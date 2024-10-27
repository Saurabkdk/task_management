import prisma from '@/lib/db';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async ({params} : {params: {id: string}}) => {
    const val = await params;
    const data = await prisma.tasks.findUnique({
        where:{
            id: val.id
        }
    });

    const status = !data?.status;

    await prisma.tasks.update({
        where:{
            id: val.id
        },
        data: {
            status: status
        }
    });
    redirect('/');
  return (
    <div></div>
  )
}

export default page