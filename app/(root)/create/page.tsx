import { createTask } from '@/actions/actions'
import React from 'react'

const page = () => {
    return (
        <div className="px-5 py-10 flex flex-col">
            <div className="text-3xl">
                Create a task
            </div>
            <div className="mt-5 flex items-center">
                <div className='w-2/5'>
                    <form action={createTask} className='flex flex-col space-y-5 text-lg'>
                        <label>Title:</label>
                        <input type="text" name="title" className='h-[50px] rounded-md text-black' placeholder='Title' />
                        <label>Description:</label>
                        <textarea rows={5} cols={10} name="description" className='text-black' placeholder='Description...' />
                        <label htmlFor='C'>Complete
                            <input type="radio" name="status" value="C" className='ml-3' />
                        </label>
                        <label htmlFor='Nc'>Incomplete
                            <input type="radio" name="status" value="NC" className='ml-3' defaultChecked />
                        </label>
                        <button type="submit" className='p-3 bg-lime-500 rounded-md'>Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page