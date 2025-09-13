import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage for demo purposes
// In production, use a proper database
const reviewRewards = new Map();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('orderId');
    const email = searchParams.get('email');

    if (!orderId || !email) {
      return NextResponse.json(
        { error: 'Missing orderId or email' },
        { status: 400 }
      );
    }

    // Check for existing reward
    const uniqueKey = `${email}-${orderId}`;
    const existingReward = reviewRewards.get(uniqueKey);

    if (existingReward) {
      return NextResponse.json({
        status: 'already_claimed',
        code: existingReward.code,
        claimedAt: existingReward.createdAt
      });
    }

    return NextResponse.json({
      status: 'not_claimed'
    });

  } catch (error) {
    console.error('Check error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
