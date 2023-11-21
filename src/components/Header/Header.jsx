import Image from 'next/image'
import Link from 'next/link'
import React, { createContext, useState, useEffect } from 'react'
import Logo from '@/assets/images/Logo.svg'
import Search from '@/assets/images/search.svg'
import Product from '@/assets/images/product.svg'
import Contact from '@/assets/images/contact.svg'
import Arrow from '@/assets/images/arrow.svg'
import { useRouter } from 'next/router'
import Dashboard from './Dashboard'

export const dash = createContext()

const Header = () => {
    const router = useRouter()

    const [toggle, setToggle] = useState(false);

    const navLists = ['pl-5', 'hover:bg-[#39DB4A]', 'hover:text-gray-50']
    const nav = navLists.join(' ')

    return (
        <>
            <div className='sticky z-30 py-5 shadow-lg top-0 left-0 right-0 xl:px-[154px] px-4 flex items-center justify-between mx-auto bg-white'>
                <Image src={Logo} alt='Logo' />
                <ul className='flex gap-[60px] text-[20px] max-[1054px]:hidden'>
                    <li className='py-6'>
                        <Link href={'/'} className={router.pathname === '/' ? 'text-[#39DB4A]' : ''}>Home</Link>
                    </li>
                    <li className='flex py-6 gap-[13px] link relative dropdown'>
                        Menu
                        <Image className='arrow' src={Arrow} alt='arrow' />
                        <div className='absolute w-40 shadow-xl left-0 rounded-lg menu overflow-hidden bg-slate-50'>
                            <ul className='flex flex-col '>
                                <li className={`${nav}  pt-3 pb-4`}>Hamburger</li>
                                <hr />
                                <li className={`${nav}  py-4`}>Hot Dog</li>
                                <hr />
                                <li className={`${nav} pb-3 pt-4`}>Pizza</li>
                            </ul>
                        </div>
                    </li>
                    <li className='flex py-6 gap-[13px] link relative dropdown'>
                        Services
                        <Image className='arrow' src={Arrow} alt='arrow' />
                        <div className='absolute w-40 shadow-xl left-0 rounded-lg menu overflow-hidden bg-slate-50'>
                            <ul className='flex flex-col '>
                                <li className={`${nav}  pt-3 pb-4`}>Order</li>
                                <hr />
                                <li className={`${nav}  pb-3 pt-4`}>Reserve</li>
                            </ul>
                        </div>
                    </li>
                    <li className='py-6'>
                        <Link href={'/offers'} className={router.pathname === '/offers' ? 'text-[#39DB4A]' : ''}>Offers</Link>
                    </li>
                </ul>
                <div className='flex items-center'>
                    <Image src={Search} alt='Search' />
                    <div className='relative ml-11 max-[1054px]:ml-5'>
                        <Image src={Product} alt='product' />
                        <div className='absolute bg-[#39DB4A] text-gray-50 text-[14px] w-5 h-5 rounded-full flex justify-center items-center top-[-6px] right-[-9px]'>0</div>
                    </div>
                    <div className='max-[1054px]:hidden cursor-pointer flex justify-center items-center gap-[14px] text-gray-50 w-[180px] h-[60px] bg-[#39DB4A] rounded-[40px] ml-[43px]' aria-label='Contact'>
                        <Image src={Contact} alt='Contact' />
                        Contact
                    </div>
                    <div className='flex flex-col gap-1 ml-6 lg:hidden' onClick={() => setToggle(!toggle)} aria-label='Menu'>
                        <div className='bg-slate-950 w-6 h-1 rounded-lg'></div>
                        <div className='bg-slate-950 w-6 h-1 rounded-lg'></div>
                        <div className='bg-slate-950 w-6 h-1 rounded-lg'></div>
                    </div>
                </div>
            </div >

            <div className={`lg:hidden fixed inset-0 z-20 testBg ${toggle ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setToggle(false)}></div>

            <dash.Provider value={toggle}>
                <Dashboard />
            </dash.Provider>
        </>
    )
}

export default Header