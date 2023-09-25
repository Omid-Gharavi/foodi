import React, { useContext } from 'react'
import { dash } from './Header'
import Image from 'next/image'
import Logo from '@/assets/images/Logo.svg'

const Dashboard = () => {
    const Dashboard = useContext(dash)
    console.log(Dashboard)

    return (
        <div className={`lg:hidden z-30 transition ease-in-out duration-[0.5s] fixed w-52 top-0 left-0 h-screen px-4 pt-10 bg-white shadow-md ${Dashboard ? 'translate-x-0' : 'translate-x-[-208px]'}`}>
            <Image src={Logo} />
        </div>
    )
}

export default Dashboard