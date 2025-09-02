import React from 'react';

const Pagination = ({totalPages,currentPage,handlePageChange}) => {
    return (
        <div className='flex justify-center my-10'>
            {
                Array.from({length:totalPages},(_,i)=>(
                <button onClick={()=>handlePageChange(i+1)} className={`px-3 mx-1 rounded cursor-pointer ${currentPage===i+1 ? "bg-amber-600 text-white": "bg-gray-200 text-black"}`} key={i}>
                    {i+1}
                </button>))
            }
        </div>
    );
};

export default Pagination;