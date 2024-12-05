// we will use this to do our HTTP requests (CRUD)
// GET for getting data
// POST for creating data
// PUT for updating data
// DELETE for deleting data

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  // fetch users from a database
  const users = await prisma.user.findMany();
  // hard code our data for now
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  // create an object
  const body = await request.json();

  // we should validate the data
  // if invalid, return 400
  // if(!body.name)
  //     return NextResponse.json({error: 'Name is Required'}, {status:400})

  // now using validate with zod
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  //make and object to hold the data
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  // else (meaning its good) return the data that was created
  return NextResponse.json(user, { status: 201 });
}
