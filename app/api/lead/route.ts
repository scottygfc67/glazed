import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.text();
    console.log('Lead API called with:', body);
    
    // Here you would typically save to your database or email service
    // For now, just return success
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Lead API error:', error);
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
  }
}
