import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from './Title'
import Productitem from './Productitem'


const Bestseller = () => {
    const { products } = useContext(Shopcontext)
    const [bestseller, setbestseller] = useState([])
    useEffect(() => {
        const bestproduct = products.filter((items) => (items.bestseller))
        setbestseller(bestproduct.slice(0, 5))
    }, [products])
    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'}></Title>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, accusamus pariatur vero veritatis illo sequi.
                </p>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                    {
                        bestseller.map((item, index) => (
                            <Productitem
                                key={index}
                                id={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                            />
                        ))
                    }

                </div>

            </div>

        </div>
    )
}

export default Bestseller
