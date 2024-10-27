import prisma from '@/lib/db';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async ({params} : {params: {id: string}}) => {
    const val = await params;
    try {
        await prisma.tasks.delete({
            where: {
                id: val.id
            }
        })
    } catch (error) {
        console.log(error);
        redirect('/');
    }
  return (
    <div className='w-full h-screen flex justify-center'>
        <div>
            <p className='p-4 text-xl'>Task Deleted</p>
            <Link className='px-4' href='/'><button className='p-4 bg-gray-500 rounded-full'>Go to tasks</button></Link>
        </div>
        </div>
  )
}

export default page