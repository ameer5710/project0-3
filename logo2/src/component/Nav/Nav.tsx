import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Nav = () => {
  return (
    <div className='flex gap-5 text-2xl bg-green-600 text-white'>
        <header className=" flex py-1 px-1 text-2xl  bg-black ">
    <Image className="w-23 h-25 md:w-15 ml-96 " src="/hamza.jpg" alt="" width="60" height="120"/>
    </header>
        <Link href="\">HOME</Link>
        <Link href="\name">NAME</Link>
        <Link href="\name\contact">CONTACT</Link>
    </div>
  )
}

export default Nav