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

    useEffect(() => {
        // Load the initial menu toggle state from cache
        const cachedToggleState = localStorage.getItem('toggleState');
        setToggle(cachedToggleState === 'true');
    }, []);

    useEffect(() => {
        // Update the cache whenever the menu toggle state changes
        localStorage.setItem('toggleState', toggle.toString());
    }, [toggle]);

    const navLists = ['pl-5', 'hover:bg-[#39DB4A]', 'hover:text-gray-50']
    const nav = navLists.join(' ')

    return (
        <>
            <div className='relative h-[81px]'>
                <div className='pt-10 fixed top-0 left-0 right-0 xl:px-[154px] px-4 flex items-center justify-between mx-auto bg-white'>
                    <Image src={Logo} alt='Logo' />
                    <ul className='flex gap-[60px] text-[20px] max-[1054px]:hidden'>
                        <li className='py-4'>
                            <Link href={'/'} className={router.pathname === '/' ? 'text-[#39DB4A]' : ''}>Home</Link>
                        </li>
                        <li className='flex py-4 gap-[13px] link relative dropdown'>
                            Menu
                            <Image className='arrow' src={Arrow} alt='arrow' />
                            <div className='absolute w-40 shadow-xl left-0 rounded-lg menu overflow-hidden'>
                                <ul className='flex flex-col '>
                                    <li className={`${nav}  pt-3 pb-4`}>Hamburger</li>
                                    <hr />
                                    <li className={`${nav}  py-4`}>Hot Dog</li>
                                    <hr />
                                    <li className={`${nav} pb-3 pt-4`}>Pizza</li>
                                </ul>
                            </div>
                        </li>
                        <li className='flex py-4 gap-[13px] link relative dropdown'>
                            Services
                            <Image className='arrow' src={Arrow} alt='arrow' />
                            <div className='absolute w-40 shadow-xl left-0 rounded-lg menu overflow-hidden'>
                                <ul className='flex flex-col '>
                                    <li className={`${nav}  pt-3 pb-4`}>Order</li>
                                    <hr />
                                    <li className={`${nav}  pb-3 pt-4`}>Reserve</li>
                                </ul>
                            </div>
                        </li>
                        <li className='py-4'>
                            <Link href={'/offers'} className={router.pathname === '/offers' ? 'text-[#39DB4A]' : ''}>Offers</Link>
                        </li>
                    </ul>
                    <div className='flex items-center'>
                        <Image src={Search} alt='Search' />
                        <div className='relative ml-11 max-[1054px]:ml-5'>
                            <Image src={Product} alt='product' />
                            <div className='absolute bg-[#39DB4A] text-gray-50 text-[14px] w-5 h-5 rounded-full flex justify-center items-center top-[-6px] right-[-9px]'>0</div>
                        </div>
                        <div className='max-[1054px]:hidden flex justify-center items-center gap-[14px] text-gray-50 w-[180px] h-[60px] bg-[#39DB4A] rounded-[40px] ml-[43px]' aria-label='Contact'>
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

                <div className={`fixed inset-0 z-20 testBg ${toggle ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setToggle(false)}></div>

                <dash.Provider value={toggle}>
                    <Dashboard />
                </dash.Provider>
            </div>
        </>
    )
}

export default Header