'use client'

import { useRouter } from "next/navigation"  // make sure to use next/navigation and NOT next/router

const NewUserPage = () => {

  const router = useRouter();  // need to use useRouter from next/navigation and save to a variable

  return (
    <>
      <div>New Users Page</div>
      {/* Notice that we are using an onclick here so we must state 'use client' at the top of the page in order to use client side onClick events */}
      <button className="btn btn-secondary" onClick={() => router.push('/users')}>Create</button>  
    </>

  )
}

export default NewUserPage