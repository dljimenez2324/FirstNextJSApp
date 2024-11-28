import { notFound } from "next/navigation";
import React from "react";

interface Props {
    params: { id: number }
}

const UserDetailsPage = ({ params: {id} } : Props) => {

    if(id > 10) notFound()

    return (
        <>
            <div>UserDetailspage {id}</div>
        </>
    )
}

export default UserDetailsPage

// localhost:3000/users/2/photo/2