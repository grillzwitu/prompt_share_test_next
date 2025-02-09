'use client'

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, UseSession, getProviders } from "next-auth/react";
import logo from '@public/assets/images/logo.svg';


const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">

        <Link href='/' className="flex gap-2 flex-center">
            <Image src={logo} alt="logo" width={30} height={30} className="object-contain"/>
        </Link>

    </nav>
  )
}
export default Nav
