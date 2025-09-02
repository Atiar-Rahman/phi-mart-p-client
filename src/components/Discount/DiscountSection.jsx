import React from 'react';
import bookImg from '../../assets/images/slider-image/book.jpeg'
import DiscountTimer from './DiscountTimer';
const DiscountSection = () => {
    return (
        <div className='bg-yellow-50 flex flex-col md:flex-row justify-evenly items-center h-[30vh]'>
            <div>
                <img src={bookImg} alt="" />
            </div>
            <div>
                <h1>30% Discount On All items. Hurry Up!!!</h1>
                {/* counter */}
                <DiscountTimer></DiscountTimer>
                <button className='btn btn-accent'>Shop Collection</button>
            </div>
        </div>
    );
};

export default DiscountSection;