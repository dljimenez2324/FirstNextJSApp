import Link from "next/link";
import React from "react"
import { sort } from 'fast-sort';

interface User {
    id: number,
    name: string,
    email: string
}

interface Props {
    sortOrder: string;
}


const UserTable = async ({sortOrder}:Props) => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        // next: { revalidate: 10 }  // this was only to revalidate every 10 seconds but we will not use this  normal use would be say a day or whatever use you need
        
    });

    const users: User[] = await response.json();  // this is our array of users take from the api

    // lets use sort to sort our users or emails
    const sortedUsers = sort(users).asc(sortOrder === 'email' ? user => user.email : user => user.name);


    return (
        <table className="table table-bordered">

            <thead>
                <tr>
                    <th><Link href='/users?sortOrder=name'>Name</Link></th>
                    <th><Link href='/users?sortOrder=email'>Email</Link></th>
                </tr>
            </thead>

            <tbody>
                {
                    sortedUsers.map(user => <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>)
                }
            </tbody>
        </table>

    )
}

export default UserTable