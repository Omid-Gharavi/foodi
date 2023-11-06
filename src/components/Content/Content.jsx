import React from 'react'
import Resturant from '../Resturant/Resturant'
import Categories from '../Categories/Categories'
import Dishes from '../Dishes/Dishes'
import Customers from '../Customers/Customers'
import Journey from '../Journey/Journey'


const Content = () => {
    return (
        <>
            <Resturant />
            <div className='lg:px-[154px] px[1rem]'>
                <Categories />
                <Dishes />
                <Customers />
                <Journey />
            </div>
        </>
    )
}

export default Content