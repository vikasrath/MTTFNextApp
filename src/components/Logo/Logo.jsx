import React from 'react'
import logo from "../../../public/assets/Long@350.png"
import logoDark from "../../../public/assets/Long@350black.png"
import Link from 'next/link'
import Image from 'next/image'


function Logo({ theme }) {
    return (
        <>
            <Link href='/'>
                <Image src={logo} alt="Comapny logo" width={160} height={37} />
            </Link>
        </>
    )
}

export default Logo