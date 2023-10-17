import React from 'react'
import Resturant from '../Resturant/Resturant'
import Categories from '../Categories/Categories'
import Dishes from '../Dishes/Dishes'


const Content = () => {
    return (
        <>
            <Resturant />
            <div className='lg:px-[154px] px[1rem]'>
                <Categories />
                <Dishes />
            </div>
        </>
    )
}

export default Content