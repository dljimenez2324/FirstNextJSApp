import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json([
        {id: 1, name: "milk", price: 6.99},
        {id: 2, name: "eggs", price: 4.69}
    ])
}