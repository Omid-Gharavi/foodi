import React, { useContext, useState } from 'react'
import { dash } from './Header'
import Image from 'next/image'
import Logo from '@/assets/images/Logo.svg'

const Dashboard = () => {
    const Dashboard = useContext(dash)
    const [menu, setMenu] = useState(false);

    return (
        <div className={`lg:hidden z-30 transition ease-in-out duration-[0.5s] fixed w-52 top-0 left-0 h-screen px-4 pt-10 bg-white shadow-md ${!Dashboard ? 'translate-x-[-208px]' : 'translate-x-0'}`}>
            <Image src={Logo} />
            <div className='mt-6'>
                <Lists menu={menu} setMenu={setMenu} name={'Menu'} index={0} />
                <Lists menu={menu} setMenu={setMenu} name={'Services'} />
            </div>
        </div >
    )
}

const Lists = ({ menu, setMenu, name, index, test = [] }) => {
    return (
        <>
            <div className={`${index !== 0 && 'mt-4'} mb-3`}>
                <p className={`text-[1.2rem] rounded-md ${menu ? 'bg-[#39DB4A] pl-2 text-gray-50' : ''} transition-all duration-[0.5s] ease-in-out`} onClick={() => setMenu(!menu)}>{name}</p>
                <div className={`grid ${menu ? 'grid-rows-[1fr] pt-2' : 'grid-rows-[0fr] pt-0'} transition-all duration-[0.5s] ease-in-out`}>
                    <ul className='overflow-hidden flex flex-col gap-4'>
                        <li className='pl-2'>Hamburger</li>
                        <li className='pl-2'>Hot Dog</li>
                        <li className='pl-2'>Pizza</li>
                    </ul>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Dashboard