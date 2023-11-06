import React from 'react'
import Button from '../Content/Button'
import salad from '@/assets/images/Journey/salad.svg'
import fast from '@/assets/images/Journey/fast.svg'
import gift from '@/assets/images/Journey/gift.svg'
import shop from '@/assets/images/Journey/shop.svg'
import Image from 'next/image'

const Journey = () => {
    const list = [
        {
            image: salad,
            title: 'Catering',
            text: 'Delight your guests with our flavors and  presentation'
        },
        {
            image: fast,
            title: 'Fast delivery',
            text: 'We deliver your order promptly to your door'
        },
        {
            image: shop,
            title: 'Online Ordering',
            text: 'Explore menu & order with ease using our Online Ordering'
        },
        {
            image: gift,
            title: 'Gift Cards',
            text: 'Give the gift of exceptional dining with Foodi Gift Cards'
        },
    ]

    return (
        <div className='mt-[227px] flex items-center justify-between max-2xl:flex-col max-2xl:gap-16'>
            <div className='flex flex-col max-2xl:items-center max-2xl:text-center'>
                <p className='text-[#FF6868] font-bold uppercase'>Our Story & Services</p>
                <p className='font-bold text-[50px] leading-[4rem] mt-[53px] max-2xl:leading-[3rem] max-2xl:text-[30px]'>Our Culinary Journey<br /> And Services</p>
                <p className='font-medium text-[1rem] mt-[50px] max-w-[370px] text-[#555555]'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
                <div className='mt-[53px]'>
                    <Button text={'Explore'} />
                </div>
            </div>
            <div className='grid grid-cols-[277px_277px] gap-9 max-sm:grid-cols-1'>
                {
                    list.map((list, index) => (
                        <Lists key={index + 1} image={list.image} title={list.title} text={list.text} />
                    ))
                }
            </div>
        </div>
    )
}

const Lists = ({ image, title, text }) => {
    return (
        <div className='w-[277px] h-[290px] shadow-xl flex flex-col items-center rounded-3xl text-center'>
            <Image className='mt-11' src={image} />
            <p className='uppercase text-[#5FE26C] font-bold mt-6 text-[24px]'>{title}</p>
            <p className='w-[232px] text-[20px] mt-4 font-semibold text-[#90BD95]'>{text}</p>
        </div>
    )
}

export default Journey