import React from 'react';

const List = () => {
    const fruits = ['apple','banana','orange']

    return (
        <div className='to-red-300'>
            {
                fruits.map((fruit,idx)=><li key={idx}>{fruit}</li>)
            }
        </div>
    );
};

export default List;