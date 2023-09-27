import Image from 'next/image'
import React from 'react'
import Hamburger from '@/assets/images/Categories/hamburger.svg'
import breakFast from '@/assets/images/Categories/breakFast.svg'
import iceCream from '@/assets/images/Categories/icecream.svg'
import juice from '@/assets/images/Categories/juice.svg'

const Categories = () => {
    const datas = [
        {
            id: 1,
            image: Hamburger,
            title: 'Main Dish',
            text: '(86 dishes)',
            bg: 'bg-[#f1c1c1]',
        },
        {
            id: 2,
            image: breakFast,
            title: 'Break Fast',
            text: '(12 break fast)',
        },
        {
            id: 3,
            image: iceCream,
            title: 'Dessert',
            text: '(48 dessert)',
            bg: 'bg-[#f1e2c1]',
        },
        {
            id: 4,
            image: juice,
            title: 'Browse All',
            text: '(255 Items)',
            bg: 'bg-[#c1cff1]',
        },
    ]

    return (
        <div className='mt-8 max-[1500px]:mt-20'>
            <p className='uppercase text-[#FF6868] font-bold text-[1rem] text-center'>customer favorities</p>
            <p className='text-center mt-7 font-bold text-[40px] max-[1500px]:text-[30px]'>Popular Catagories</p>
            <div className='mt-20 flex flex-wrap gap-[38px] justify-center'>
                {
                    datas.map(data => (
                        <Lists key={data.id} image={data.image} title={data.title} text={data.text} bg={data.bg} />
                    ))
                }
            </div>
        </div>
    )
}

const Lists = ({ image, title, text, bg = 'bg-[#C1F1C6]' }) => {
    return (
        <div className='shadow-2xl w-[226px] h-[226px] rounded-[40px] flex flex-col items-center'>
            <div className={`mt-[20px] w-[100px] h-[100px] rounded-full ${bg} flex justify-center items-center`}>
                <Image src={image} />
            </div>
            <p className='mt-3 text-[20px] font-bold'>{title}</p>
            <p className='mt-3 font-medium text-[#555555]'>{text}</p>
        </div>
    )
}

export default Categories