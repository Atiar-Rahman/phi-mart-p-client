
import ProductItem from '../product/ProductItem';
import ProdutList from './ProdutList';
import Pagination from './Pagination';
import useFetchProducts from '../../hooks/useFetchProducts';
import { useState } from 'react';
const ShopPage = () => {
    const [currentPage,setCurrentPage] = useState(1)

    const {products,loading,totalPages,error} = useFetchProducts(currentPage)
    return (
        <section>
            <ProdutList products={products} loading={loading} error={error}></ProdutList>
            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={setCurrentPage}></Pagination>
        </section>
    );
};

export default ShopPage;