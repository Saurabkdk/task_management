import { auth, signIn } from '@/auth'
import { redirect } from 'next/navigation';
import React from 'react'

const login = async () => {
  const session = await auth();
  if(session) redirect('/');

  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='bg-lime-500 w-[250px] h-[50px] rounded-xl flex items-center justify-center'>
        <div className='text-xl'>
        <form action={async () => {
                'use server';
                await signIn('github');
              }}>
                <button type='submit'>Login With Github</button>
              </form>
        </div>
      </div>
    </div>
  )
}

export default login