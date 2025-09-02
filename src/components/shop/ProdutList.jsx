import React from 'react';
import ProductItem from '../product/ProductItem';

const ProdutList = ({ products, loading, error }) => {
    return (
        <section>
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    products.map((product) => <ProductItem key={product.id} product={product}></ProductItem>)
                }
            </div>
        </section>
    );
};

export default ProdutList;