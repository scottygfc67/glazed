import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { randomBytes } from 'crypto';

// Simple in-memory storage for demo purposes
// In production, use a proper database and cloud storage
const reviewRewards = new Map();

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const orderId = formData.get('orderId') as string;
    const tiktokHandle = formData.get('tiktokHandle') as string;
    const email = formData.get('email') as string;
    const reviewUrl = formData.get('reviewUrl') as string;
    const screenshot = formData.get('screenshot') as File;

    // Validation
    if (!tiktokHandle || !email || !screenshot) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // File validation
    if (screenshot.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 5MB.' },
        { status: 400 }
      );
    }

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/heic'];
    if (!allowedTypes.includes(screenshot.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload JPG, PNG, or HEIC.' },
        { status: 400 }
      );
    }

    // Check for duplicates
    const uniqueKey = `${email}-${orderId || 'no-order'}`;
    if (reviewRewards.has(uniqueKey)) {
      const existing = reviewRewards.get(uniqueKey);
      return NextResponse.json({
        error: 'You have already claimed a reward for this order',
        code: existing.code,
        status: 'already_claimed'
      });
    }

    // Generate unique code
    const code = `GLAZED30-${randomBytes(4).toString('hex').toUpperCase()}`;

    // Save file (in production, upload to S3/Cloudflare R2)
    const bytes = await screenshot.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `review-${Date.now()}-${randomBytes(8).toString('hex')}.${screenshot.type.split('/')[1]}`;
    const filepath = join(process.cwd(), 'public', 'uploads', filename);
    
    // Ensure uploads directory exists
    const uploadsDir = join(process.cwd(), 'public', 'uploads');
    try {
      await writeFile(filepath, buffer);
    } catch (error) {
      // Directory doesn't exist, create it
      const fs = require('fs');
      fs.mkdirSync(uploadsDir, { recursive: true });
      await writeFile(filepath, buffer);
    }

    // Store reward data
    const rewardData = {
      id: randomBytes(8).toString('hex'),
      orderId,
      email,
      tiktokHandle,
      reviewUrl,
      screenshotUrl: `/uploads/${filename}`,
      code,
      status: 'APPROVED',
      createdAt: new Date().toISOString(),
      ipHash: request.ip || 'unknown',
      userAgent: request.headers.get('user-agent'),
      source: request.headers.get('referer')
    };

    reviewRewards.set(uniqueKey, rewardData);

    // In production, save to database
    // await prisma.reviewReward.create({ data: rewardData });

    return NextResponse.json({
      code,
      status: 'success',
      message: 'Reward generated successfully!'
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
