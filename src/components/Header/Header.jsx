import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/assets/images/logo.svg'
import Search from '@/assets/images/Search.svg'
import Product from '@/assets/images/product.svg'
import Contact from '@/assets/images/contact.svg'
import Arrow from '@/assets/images/arrow.svg'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()

    return (
        <div className='pt-10 xl:px-[154px] px-4 flex items-center justify-between mx-auto'>
            <Image src={Logo} alt='Logo' />
            <ul className='flex gap-[60px] text-[20px] max-[1054px]:hidden'>
                <li>
                    <Link href={'/'} className={router.pathname === '/' ? 'text-[#39DB4A]' : ''}>Home</Link>
                </li>
                <li className='flex gap-[13px] link'>
                    Menu
                    <Image className='arrow' src={Arrow} alt='arrow' />
                </li>
                <li className='flex gap-[13px] link'>
                    Services
                    <Image className='arrow' src={Arrow} alt='arrow' />
                </li>
                <li>
                    <Link href={'/offers'} className={router.pathname === '/offers' ? 'text-[#39DB4A]' : ''}>Offers</Link>
                </li>
            </ul>
            <div className='flex items-center'>
                <Image src={Search} alt='Search' />
                <div className='relative ml-11 max-[1054px]:ml-5'>
                    <Image src={Product} alt='product' />
                    <div className='absolute bg-[#39DB4A] text-gray-50 text-[14px] w-5 h-5 rounded-full flex justify-center items-center top-[-6px] right-[-9px]'>8</div>
                </div>
                <div className='max-[1054px]:hidden flex justify-center items-center gap-[14px] text-gray-50 w-[180px] h-[60px] bg-[#39DB4A] rounded-[40px] ml-[43px]' aria-label='Contact'>
                    <Image src={Contact} alt='Contact' />
                    Contact
                </div>
                <div className='flex flex-col gap-1 ml-6 lg:hidden'>
                    <div className='bg-slate-950 w-6 h-1'></div>
                    <div className='bg-slate-950 w-6 h-1'></div>
                    <div className='bg-slate-950 w-6 h-1'></div>
                </div>
            </div>
        </div >
    )
}

export default Header