// we will use this to do our HTTP requests (CRUD)
// GET for getting data
// POST for creating data
// PUT for updating data
// DELETE for deleting data

import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {

    // fetch users from a database
    // hard code our data for now
    return NextResponse.json([
        {id: 1, name: "Jacob"},
        {id: 2, name: "Jose"},
    ])

}