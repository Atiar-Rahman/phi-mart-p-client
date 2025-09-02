import React, { useEffect, useState } from 'react';
import apiClient from '../../services/api-client';
import CategoryItem from './CategoryItem';
const Category = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        apiClient.get('/categories/')
            .then(res => {
                // console.log(res.data)
                setCategories(res.data)
            })
            .catch(err => console.log(err))
            .finally()
    }, [])
    return (
        <section>
            <div className='flex justify-between px-4 md:px-8 lg:px-16'>
                <h2 className='text-3xl font-semibold'>Browse Categories</h2>
                <button className='btn border-none bg-green-600 rounded-2xl px-10 text-white text-xl'><a href="#">View all</a></button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                { 
                    categories.map((category,index) => <CategoryItem key={category.id} category={category} index={index}></CategoryItem>)
                }
            </div>
        </section>
    );
};

export default Category;