import React from 'react'
import Button from './Button'
import Image from 'next/image'
import play from '@/assets/images/play.svg'
import Intersect from '@/assets/images/Intersect.svg'

const Content = () => {
    return (
        <div className='mt-[138px] max-[1500px]:mt-20 pl-[153px] pr-[136px] max-[1400px]:px-[1rem] flex max-[1500px]:flex-col-reverse max-[1500px]:justify-center max-[1500px]:gap-6 justify-between content-center flex-wrap'>
            <div className='flex flex-col max-[1500px]:items-center'>
                <p className='text-[62px] max-[1500px]:text-[30px] max-[1500px]:text-center font-extrabold w-full max-w-[650px]'>Dive into Delights Of Delectable <span className='text-[#39DB4A]'>Food</span></p>
                <p className='mt-[60px] t-[26px]  max-[1500px]:text-center'>Where Each Plate Weaves a Story of Culinary<br className='max-[1500px]:hidden' /> Mastery and Passionate Craftsmanship</p>
                <div className='mt-[68px] flex items-center  max-[1500px]:gap-2'>
                    <Button />
                    <p className='ml-9 font-semibold text-[1rem] text-[#4D4D4D]  max-[1500px]:ml-0'>Watch Video</p>
                    <div className='w-16 h-16 rounded-full shadow-xl ml-[30px] flex justify-center items-center  max-[1500px]:ml-0'>
                        <Image src={play} />
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='bg-[#39DB4A] relative w-[562px] h-[562px]  max-[1500px]:w-[362px]  max-[1500px]:h-[362px] max-[900px]:w-[262px] max-[900px]:h-[262px] rounded-full'>
                    <Image src={Intersect} className='absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-70%] object-contain' />
                </div>
            </div>
        </div>
    )
}

export default Content