import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function GET(request: NextRequest) {
    
    const product = prisma.product.findMany();
    return NextResponse.json(product);

    // return NextResponse.json([
    //     {id: 1, name: "milk", price: 6.99},
    //     {id: 2, name: "eggs", price: 4.69}
    // ])
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    // Validate the data
    // If invalid, return 400
    const validation = schema.safeParse(body);
    if(!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price
        }
    });

    // Else, return data
    return NextResponse.json(newProduct, { status: 201 });
}