import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest): NextResponse {
    return NextResponse.json({message: "hello"})
}