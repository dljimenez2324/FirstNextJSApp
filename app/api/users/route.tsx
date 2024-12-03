// we will use this to do our HTTP requests (CRUD)
// GET for getting data
// POST for creating data
// PUT for updating data
// DELETE for deleting data

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {

    // fetch users from a database
    // hard code our data for now
    return NextResponse.json([
        {id: 1, name: "Jacob"},
        {id: 2, name: "Jose"},
    ])

}

export async function POST(request: NextRequest) {
    // create an object
    const body = await request.json();

    // we should validate the data
    // if invalid, return 400
    // if(!body.name)
    //     return NextResponse.json({error: 'Name is Required'}, {status:400})

    // now using validate with zod
    const validation = schema.safeParse(body)
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status:400})

    // else (meaning its good) return the data that was created
    return NextResponse.json({id:1, name: body.name}, {status: 201})
}

