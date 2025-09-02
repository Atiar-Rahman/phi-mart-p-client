import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
const CategoryItem = ({category,index}) => {
    const gradients = ["from-pink-100 to-blue-100","from-pink-100 to-green-100"]
    console.log(category)
    return (
        <div className={`p-4 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer bg-gradient-to-br ${gradients[index%gradients.length]}`}>
            <div className='flex justify-between items-center'>
                <p className='bg-cyan-200 rounded-full w-10 h-10 flex justify-center items-center'>{category.name[0]}</p>
                <p className='bg-white p-2 rounded-xl'>{category.product_count} items</p>
            </div>
            <h1 className='text-2xl font-bold'>{category.name}</h1>
            <p>{category.description}</p>
            <button className='flex justify-center items-center btn bg-green-300 border-none rounded-xl my-3'>Explore<IoIosArrowForward /></button>
        </div>
    );
};

export default CategoryItem;