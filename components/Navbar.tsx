import { auth, signOut } from '@/auth'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {
  const session = await auth();

  return (
    <div>
      <nav className='flex justify-between text-xl'>
        <div>
          <Link href='/'>
            <Image src='/logo.png' width={50} height={50} alt='logo' />
          </Link>
        </div>
        <div className='flex justify-between gap-8'>
          {session && session?.user && (
            <>
              <Link href='/create'>Create</Link>
              <form action={async () => {
                'use server';
                await signOut({redirectTo: '/'});
              }}>
                <button type='submit'>Logout</button>
              </form>
            </>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar