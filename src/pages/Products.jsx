
import { useEffect, useState } from 'react';
import ProductItem from '../components/product/ProductItem';
import { Navigation } from 'swiper/modules';
import {Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Error from '../components/Error';

import  apiClient from '../services/api-client'
const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')

    useEffect(() => {
        // base url use reduce redundency
        apiClient.get('/products/')
            .then(res => {
                // console.log(res.data.results);
                setProducts(res.data.results);
            })
            .catch(err => {
                // console.error(err)
                setError(err.message)
            })
            .finally(()=>{
                setLoading(false)
            })

    }, []);

    return (
        <section className='mx-auto py-16 bg-gray-50 my-10'>
            <div className='flex justify-between px-4 md:px-8 lg:px-16'>
                <h2 className='text-3xl font-semibold'>Tending products</h2>
                <button className='btn border-none bg-green-600 rounded-2xl px-10 text-white text-xl'><a href="#">View all</a></button>
            </div>
            {/* loading speener*/}

            {
                loading && <div className='flex justify-center items-center'>
                    <span className="loading loading-spinner text-accent text-4xl"></span>
                </div>
                    
            }
            {/* error */}
            {
                error && <Error error={error}></Error>
            }
            {/* product slider */}
        {
            !loading && !error && products.length>0 && (<Swiper modules={[Navigation]}
            spaceBetween = {10}
            slidesPerView = {1}
            navigation
            breakpoints={
                {
                    640: {slidesPerView:2},
                    900:{slidesPerView:3}
                }
            }
            className='mt-4 px-4 container '
        >
            {products.map((product, index) => (
                <SwiperSlide className='flex justify-center'>
                    <ProductItem key={index} product={product}></ProductItem>
                </SwiperSlide>
            ))}
            </Swiper>
            )
        }
        {
            !loading && !error && products.length ===0 && (
                <div>
                    <h1 className='text-xl text-gray-100 mt-4'>No products Avaliable</h1>
                </div>
            )
        }
        </section>
    );
};

export default Products 