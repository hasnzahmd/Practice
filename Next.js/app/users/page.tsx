import Link from 'next/link';
import React from 'react'

interface User {
    id: number,
    name: string
}

const UsersPage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});  // , {next: {revalidate: 10}}
    const users: User[] = await res.json();  

  return (
    <>
        <h1 className='bg-green-400 text-center text-3xl text-white p-4'>Users Page</h1>
        <p className='bg-gray-300 p-2 shadow-md shadow-black hover:shadow-none text-center border border-transparent hover:bg-gray-400 hover:border-4 hover:border-blue-400 duration-300'>{new Date().toLocaleTimeString()}</p>
        <ul className=' flex flex-col gap-4 p-10 bg-blue-100 items-center justify-center'>
            {users.map((user)=> <li className='bg-blue-200 w-2/4 py-1 text-center hover:bg-purple-300 hover:border-red-300 hover:border-2' key={user.id}>{user.name}</li>)}
        </ul>
        <button className=' text-center bg-rose-600 mr-20 text-white w-screen p-2 border-0 hover:border-green-600 hover:border-2 hover:bg-rose-500 duration-200' >
          <Link href='/'>Home</Link>
        </button>
    </>
  )
}

export default UsersPage
