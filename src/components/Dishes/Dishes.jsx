import Image from 'next/image'
import React from 'react'
import Arrow from '@/assets/Arrow.svg'
import ArrowRight from '@/assets/ArrowRight.svg'
import fattoush from '@/assets/images/Dishes/fattoush.svg'
import salad from '@/assets/images/Dishes/salad.svg'
import egg from '@/assets/images/Dishes/egg.svg'
import start from '@/assets/start.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css/navigation"
import { Navigation } from "swiper";

import 'swiper/css'

const Dishes = () => {
    const dish = [
        {
            image: fattoush,
            name: 'Fattoush salad',
            price: '24.00'
        },
        {
            image: salad,
            name: 'Vegetable salad',
            price: '26.00'
        },
        {
            image: egg,
            name: 'Egg vegi salad',
            price: '23.00'
        },
        {
            image: fattoush,
            name: 'Fattoush salad',
            price: '24.00'
        },
        {
            image: salad,
            name: 'Vegetable salad',
            price: '26.00'
        },
        {
            image: egg,
            name: 'Egg vegi salad',
            price: '23.00'
        },
    ]

    return (
        <div className='mt-52'>
            <p className='uppercase text-[#FF6868] text-[1rem] font-bold tracking-[17.5%] max-xl:text-center'>Special Dishes</p>
            <div className='flex justify-between max-xl:flex-col max-xl:items-center max-xl:gap-16'>
                <p className='text-[50px] leading-[131%] font-bold mt-10 max-lg:text-[30px]'>Standout Dishes<br /> From Our Menu</p>
                <div className='xl:self-end flex gap-[50px] max-xl:gap-8'>
                    <button aria-label='left' className='w-20 h-20 rounded-full bg-[#39DB4A] flex justify-center items-center cursor-pointer transition-all ease-in-out duration-[.2s]' id='left'>
                        <Image className='rotate-180' src={ArrowRight} alt='left' />
                    </button>
                    <button aria-label='right' className='w-20 h-20 rounded-full bg-[#39DB4A] flex justify-center items-center cursor-pointer transition-all ease-in-out duration-[.2s]' id='right'>
                        <Image src={ArrowRight} alt='right' />
                    </button>
                </div>
            </div>
            <div className='my-[63px]'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={40}
                    navigation={{ nextEl: '#right', prevEl: '#left' }}
                    modules={[Navigation]}
                    breakpoints={{
                        1250: { slidesPerView: 3 },
                        1000: { slidesPerView: 2 }
                    }}
                >
                    {
                        dish.map((dish, index) => (
                            <SwiperSlide key={index + 1}>
                                <div className='relative w-[346px] bg-slate-50 shadow-xl h-[423px] rounded-[40px] flex justify-center overflow-hidden'>
                                    <div className='mt-6 flex flex-col'>
                                        <Image className='mt-1 h-[14rem] select-none' src={dish.image} alt='dish' />
                                        <div>
                                            <p className='mt-[14px] font-semibold text-[20px] select-none'>{dish.name}</p>
                                            <p className='mt-2 text-[#555555] text-[1rem] font-semibold select-none'>Description of the item</p>
                                            <div className='mt-[28px] flex justify-between items-center '>
                                                <div className='flex text-[1.3rem] font-semibold select-none'>
                                                    <span className='text-[#FF6868]'>$</span><p>{dish.price}</p>
                                                </div>
                                                <div className='flex items-center'>
                                                    <Image src={start} className='h-4' alt='star' />
                                                    <span className='select-none'>4.6</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='absolute right-0 rounded-bl-[42.5px] bg-[#FF6868] w-[67px] h-[57px]'></div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </div>
    )
}

export default Dishes