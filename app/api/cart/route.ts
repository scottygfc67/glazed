import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.text();
    console.log('Cart API called with:', body);
    
    // Here you would typically integrate with your cart system
    // For now, just return success
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Cart API error:', error);
    return NextResponse.json({ error: 'Failed to add to cart' }, { status: 500 });
  }
}
