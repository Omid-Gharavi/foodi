import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/Logo.svg'
import facebook from '@/assets/images/SocialMedia/facebook.svg'
import instagram from '@/assets/images/SocialMedia/instagram.svg'
import twitter from '@/assets/images/SocialMedia/twitter.svg'
import youtube from '@/assets/images/SocialMedia/youtube.svg'

const Footer = () => {
    const icons = [
        {
            image: facebook,
            invert: 'invert'
        },
        {
            image: instagram,
        },
        {
            image: twitter,
        },
        {
            image: youtube,
        },
    ]

    return (
        <div className='mt-60 mb-8'>
            <div className='flex max-md:flex-col justify-center flex-wrap gap-[184px] max-md:gap-20'>
                <div className='flex flex-col max-md:items-center'>
                    <Image src={logo} alt='logo' />
                    <p className='w-[170px] mt-[37px] text-[#555555] max-md:text-center'>
                        Savor the artistry where every dish is a culinary masterpiece
                    </p>
                </div>
                <div className='mt-[12px] flex max-md:flex-col flex-wrap items-center justify-center gap-48 max-lg:gap-20'>

                    <div>
                        <p className='font-semibold'>Useful links</p>
                        <ul className='mt-[36px] flex flex-col gap-[31px]'>
                            <li className='text-[#555555]'>About us</li>
                            <li className='text-[#555555]'>Events</li>
                            <li className='text-[#555555]'>Blogs</li>
                            <li className='text-[#555555]'>FAQ</li>
                        </ul>
                    </div>

                    <div>
                        <p className='font-semibold'>Main Menu</p>
                        <ul className='mt-[36px] flex flex-col gap-[31px]'>
                            <li className='text-[#555555]'>Home</li>
                            <li className='text-[#555555]'>Offers</li>
                            <li className='text-[#555555]'>Menus</li>
                            <li className='text-[#555555]'>Reservation</li>
                        </ul>
                    </div>

                    <div>
                        <p className='font-semibold'>Contact Us</p>
                        <ul className='mt-[36px] flex flex-col gap-[31px]'>
                            <li className='text-[#555555]'>example@email.com</li>
                            <li className='text-[#555555]'>+64 958 248 966</li>
                            <li className='text-[#555555]'>Social media</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className='flex items-center flex-wrap gap-[170px] mt-[100px] mx-[155px] max-md:justify-center max-lg:mx-[85px]'>
                <div className='flex flex-wrap gap-5 max-md:justify-center'>
                    {
                        icons.map((icon, index) => (
                            <Icon key={index + 1} image={icon.image} invert={icon.invert} />
                        ))
                    }
                </div>
                <p>Copyright 2023 Dscode | All rights reserved</p>
            </div>
        </div>
    )
}

const Icon = ({ image, invert }) => {
    return (
        <div className='cursor-pointer bg-[#EDFFEF] hover:bg-[#39DB4A] transition duration-[0.2s] ease-in-out w-14 h-14 rounded-full flex justify-center items-center'>
            <Image className={`${invert ?? ''}`} src={image} alt='media' />
        </div>
    )
}

export default Footer