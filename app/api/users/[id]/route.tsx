import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";



// interface Props {
//     params: {id: number}
// }

// export function GET(request: NextRequest, {params:{id}}:Props) {

// }

// we can destructure and create our props inside inline like this  (use this for when you have one prop or two  anymore then do a traditional interface)
export async function GET(request: NextRequest, {params}:{params:{id:string}}) {

    // fetch the data from our db using prisma
    const user = await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    })



    if(!user)
        return NextResponse.json({error: "User not found"},{status:404})
        return NextResponse.json(user)
}

export async function PUT(request: NextRequest, {params}:{params:{id:number}}) {
    // validate the request of the body
    const body = await request.json();

    // if invalid return 400
    // if(!body.name)
    //     return NextResponse.json({error: "Name is required"}, {status:400})
    const validation = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400})

    // if doesnt exist, return 404
    if(params.id > 10)
        return NextResponse.json ({error: "User not found"}, {status: 404})

    // fetch the user with the given id
    //// if true / is valid then update the user
    return NextResponse.json({id:1, name: body.name});
    //// return the updated user

}

export function DELETE(request: NextRequest, {params}:{params:{id:number}}) {
    // we would already have our fetched data from user db
    // if not found 404
    if(params.id > 10)
        return NextResponse.json({error: "user not found"},{status: 404})
    // delete the user db
        return NextResponse.json({})
    // return 200 request

}