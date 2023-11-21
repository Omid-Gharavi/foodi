import React from 'react'
import Button from '@/components/Content/Button'
import Image from 'next/image'
import play from '@/assets/images/play.svg'
import right from '@/assets/images/right.svg'

const Resturant = () => {
    return (
        <div className='mt-[70px] max-[1500px]:mt-20 items-center pl-[153px] pr-[136px] max-[1400px]:px-[1rem] flex flex-col-reverse lg:flex-row max-[1500px]:justify-center max-[1500px]:gap-6 justify-between'>
            <div className='flex flex-col max-[1500px]:items-center'>
                <p className='text-[42px] max-[1500px]:text-[30px] max-[1500px]:mt-8 max-[1500px]:text-center font-extrabold w-full max-w-[650px]'>Dive into Delights Of Delectable <span className='text-[#39DB4A]'>Food</span></p>
                <p className='mt-[60px] text-[1rem] max-[1500px]:text-center'>Where Each Plate Weaves a Story of Culinary<br className='max-[1500px]:hidden' /> Mastery and Passionate Craftsmanship</p>
                <div className='mt-[68px] flex items-center  max-[1500px]:gap-2'>
                    <Button text={'Order Now'} key={1} />
                    <p className='ml-9 font-semibold text-[1rem] text-[#4D4D4D]  max-[1500px]:ml-0'>Watch Video</p>
                    <div className='w-16 h-16 rounded-full shadow-xl ml-[30px] flex justify-center items-center  max-[1500px]:ml-0'>
                        <Image src={play} alt='play' />
                    </div>
                </div>
            </div>
            <div>
                <Image src={right} alt='right' />
            </div>
        </div>
    )
}

export default Resturant