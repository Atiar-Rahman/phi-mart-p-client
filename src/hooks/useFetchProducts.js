import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

const useFetchProducts = (currentPage,priceRange,selectedCategory,searchQuery,sortOrder) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    const fetchProducts = async () => {
      const url = `/products/?price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}&category_id=${selectedCategory}&search=${searchQuery}&ordering=${sortOrder}`
      try {
        setLoading(true) // reset loading when page changes
        const response = await apiClient.get(url)
        const data = response.data
        setProducts(data.results)
        setTotalPages(Math.ceil(data.count / data.results.length))
      } catch (err) {
        setError(err.message || 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [currentPage,priceRange,selectedCategory,searchQuery,sortOrder])

  return {
    products,
    loading,
    totalPages,
    error
  }
}

export default useFetchProducts
