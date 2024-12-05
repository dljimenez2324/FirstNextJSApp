import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";



// interface Props {
//     params: {id: number}
// }

// export function GET(request: NextRequest, {params:{id}}:Props) {

// }

// we can destructure and create our props inside inline like this  (use this for when you have one prop or two  anymore then do a traditional interface)
// SINGLE USER
export async function GET(request: NextRequest, {params}:{params:{id:string}}) {

    // fetch the data from our db using prisma
    const user = await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    })



    if(!user)
        return NextResponse.json({error: "User not found"},{status:404})
        return NextResponse.json(user)
}


export async function PUT(request: NextRequest, {params}:{params:{id:string}}) {
    // validate the request of the body
    const body = await request.json();

    // if invalid return 400
    // if(!body.name)
    //     return NextResponse.json({error: "Name is required"}, {status:400})
    const validation = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400})

    const user = await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    })
    // if doesnt exist, return 404
    if(!user)
        return NextResponse.json ({error: "User not found"}, {status: 404})

    // fetch the user with the given id
    const updatedUser = await prisma.user.update({
        where: {id: user.id},
        data: {
            name: body.name,
            email: body.email,
        }
    })
    //// if true / is valid then update the user
    //// return the updated user
    return NextResponse.json(updatedUser);

}

export async function DELETE(request: NextRequest, {params}:{params:{id:string}}) {
    // we would already have our fetched data from user db
    const user = await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    })
    // if not found 404
    if(!user)
        return NextResponse.json({error: "user not found"},{status: 404})
    // delete the user db
        await prisma.user.delete({
            where: {id: user.id}
        })
        return NextResponse.json({})
    // return 200 request

}