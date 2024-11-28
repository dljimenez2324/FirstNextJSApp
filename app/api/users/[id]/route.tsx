import { NextRequest, NextResponse } from "next/server";

// interface Props {
//     params: {id: number}
// }

// export function GET(request: NextRequest, {params:{id}}:Props) {

// }

// we can destructure and create our props inside inline like this  (use this for when you have one prop or two  anymore then do a traditional interface)
export function GET(request: NextRequest, {params}:{params:{id:number}}) {

    if(params.id > 10)
        return NextResponse.json({error: "User not found"},{status:404})
        return NextResponse.json({id:1, name: "Jose"})
}