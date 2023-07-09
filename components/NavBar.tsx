import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '../constants';

const NavBar = () => {
  return (
    <div className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/'>
          <Image src='/logo.svg'
            width={116}
            height={43}
            alt='logo'
          />
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((nav, index) => (
            <Link href={nav.href} key={index}>
              { nav.text }
            </Link>
          ))}
        </ul>
      </div>

      <div className='flexCenter gap-4'>
        AuthProvider
      </div>
    </div>
  )
}

export default NavBar