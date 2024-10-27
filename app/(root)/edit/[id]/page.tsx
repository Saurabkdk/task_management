import { updateTask } from '@/actions/actions'
import prisma from '@/lib/db'
import React from 'react'

const page = async ({params} : {params: {id: string}}) => {
    const val = await params;
    const task = await prisma.tasks.findUnique({
        where: {
            id: val.id
        }
    })
    return (
        <div className="px-5 py-10 flex flex-col">
            <div className="text-3xl">
                Create a task
            </div>
            <div className="mt-5 flex items-center">
                <div className='w-2/5'>
                    <form action={updateTask} className='flex flex-col space-y-5 text-lg'>
                        <input type="text" name='id' hidden defaultValue={task?.id} />
                        <label>Title:</label>
                        <input type="text" name="title" className='h-[50px] rounded-md text-black' placeholder='Title' defaultValue={task?.title} />
                        <label>Description:</label>
                        <textarea rows={5} cols={10} name="description" className='text-black' placeholder='Description...'>{task?.description}</textarea>
                        <button type="submit" className='p-3 bg-lime-500 rounded-md'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page