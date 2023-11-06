import Image from 'next/image'
import React from 'react'
import chef from '@/assets/chef.svg'
import girl from '@/assets/images/Profiles/girl.svg'
import star from '@/assets/start.svg'

const Customers = () => {
    return (
        <div className='flex max-[1220px]:flex-col max-[1220px]:items-center'>
            <div className=''>
                <Image src={chef} alt='chef' className='pl-8' />
            </div>
            <div className='pt-[100px] max-[1220px]:pt-[40px] ml-12 max-[1220px]:ml-0 max-[1220px]:text-center'>
                <p className='uppercase text-[#FF6868] font-bold text-[1rem] tracking-wide'>Testimonials</p>
                <p className='mt-[53px] font-bold text-[50px] max-[1220px]:text-[30px]'>What Our Customers<br /> Say About Us</p>
                <p className='text-[#555555] text-[1rem] font-medium mt-7'>“I had the pleasure of dining at Foodi last night, and<br className='max-[1220px]:hidden' /> I'm still raving about the experience! The attention to<br className='max-[1220px]:hidden' /> detail in presentation and service was impeccable”</p>
                <div className='max-[1220px]:text-center'>
                    <p className='font-semibold text-[1rem] mt-[67px]'>Customer Feedback</p>
                    <div className='flex max-xl:justify-center mt-[13px] gap-[17px] w-full'>
                        <div className='flex items-center'>
                            <Image src={star} className='h-4' alt='star' />
                            <span className='select-none font-semibold'>4.9</span>
                        </div>
                        <p className='font-medium text-[#807E7E]'>(18.6k Reviews)</p>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Customers