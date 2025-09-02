
import ProdutList from './ProdutList';
import Pagination from './Pagination';
import useFetchProducts from '../../hooks/useFetchProducts';
import { useState } from 'react';
import FilterSection from './FilterSection';
import useFetchCategories from '../../hooks/useFetchCategories';
const ShopPage = () => {
    const [currentPage,setCurrentPage] = useState(1)
    const [priceRange,setPriceRange]  = useState([0,1000])
    const [selectedCategory,setSelectedCategory] = useState("")
    const [searchQuery,setSearchQuery] = useState('')
    const [sortOrder,setSortOrder] = useState('')
    
    const handlePriceChange = (index,value) =>{
        setPriceRange((prev)=>{
            const newRange = [...prev]
            newRange[index] = value;
            return newRange
        })
        setCurrentPage(1)
    }
    
    const {products,loading,totalPages,error} = useFetchProducts(currentPage,priceRange,selectedCategory,searchQuery,sortOrder)
    const {categories } = useFetchCategories()
    return (
        <section className='max-w-7xl  mx-auto py-8 px-4'>
            <h1 className='text-3xl font-bold my-4'>Shop Our Products</h1>
            <FilterSection 
            priceRange={priceRange} 
            handlePriceChange={handlePriceChange} 
            categories={categories} 
            selectedCategory={selectedCategory} 
            handleCategoryChange={setSelectedCategory} 
            searchQuery={searchQuery} 
            handleSearchQuery={setSearchQuery} 
            sortOrder={sortOrder} 
            handleSorting={setSortOrder}>
            </FilterSection>
            <ProdutList products={products} loading={loading} error={error}></ProdutList>
            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={setCurrentPage}></Pagination>
        </section>
    );
};

export default ShopPage;