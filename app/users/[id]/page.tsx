import React from "react";

interface Props {
    params: { id: number }
}

const UserDetailsPage = ({ params: {id} } : Props) => {


    return (
        <>
            <div>UserDetailspage {id}</div>
        </>
    )
}

export default UserDetailsPage

// localhost:3000/users/2/photo/2