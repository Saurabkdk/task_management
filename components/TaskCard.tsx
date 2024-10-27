import { deleteTask, updateStatus } from '@/actions/actions'
import Link from 'next/link'
import React from 'react'

const TaskCard = ({ task }) => {
    return (
        <div>
            <div className='w-[300px] flex flex-col border border-white p-5 rounded-xl space-y-3 shadow-md shadow-white/40'>
                <div className='font-bold text-2xl flex justify-between w-full'>
                    <div>
                        {task?.title}
                    </div>
                    <div className='text-xs flex items-center p-2 rounded-full bg-blue-500'>
                        <button>{task?.status == false ? 'Complete' : 'Incomplete'}</button>
                    </div>
                </div>
                <div className='text-md'>
                    {task?.description}
                </div>
                <div className='flex justify-evenly'>
                    <Link href={`/edit/${task?.id}`}><button className='flex items-center'><span className='pi pi-pencil p-2'></span>Edit</button></Link>
                    <Link href={`/patch/${task?.id}`}>
                        <button className='flex items-center'><span className='pi pi-sync p-2'></span>Status</button>
                    </Link>
                    <Link href={`/delete/${task?.id}`}>
                        <button className='flex items-center'><span className='pi pi-trash p-2'></span>Delete</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TaskCard