import React from 'react'
import Resturant from '../Resturant/Resturant'
import Categories from '../Categories/Categories'


const Content = () => {
    return (
        <>
            <Resturant />
            <div className='lg:px-[154px] px[1rem]'>
                <Categories />
            </div>
        </>
    )
}

export default Content