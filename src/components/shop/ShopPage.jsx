import React, { useEffect, useState } from 'react';
import apiClient from "../../services/api-client"
import ProductItem from '../product/ProductItem';
import ProdutList from './ProdutList';
import Pagination from './Pagination';
const ShopPage = () => {
    const [products, setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')
    const [totalPages,setTotalPages] = useState(0)
    const [currentPage,setCurrentPage] = useState(1)

    useEffect(() => {
        FetchProcucts();

    }, [currentPage]);

    // const FetchProcucts=()=>{
    //     // base url use reduce redundency
    //     apiClient.get(`/products/?page=${currentPage}`)
    //         .then(res => {
    //             // console.log(res.data.results);
    //             setProducts(res.data.results);

    //             setTotalPages(Math.ceil(res.data.count/res.data.results.length))

    //         })
    //         .catch(err => {
    //             console.error(err)
    //               setError(err.message)
    //         })
    //         .finally(() => {
    //               setLoading(false)
    //         })
    // }

    const FetchProcucts = async()=>{
        try{
            const response = await apiClient.get(`/products/?page=${currentPage}`)
            const data = await response.data
            setProducts(data.results)
            setTotalPages(Math.ceil(data.count/data.results.length))
        }
        catch(error){
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }
    return (
        <section>
            <ProdutList products={products} loading={loading} error={error}></ProdutList>
            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={setCurrentPage}></Pagination>
        </section>
    );
};

export default ShopPage;