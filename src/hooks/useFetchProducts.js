import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

const useFetchProducts = (currentPage) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true) // reset loading when page changes
        const response = await apiClient.get(`/products/?page=${currentPage}`)
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
  }, [currentPage])

  return {
    products,
    loading,
    totalPages,
    error
  }
}

export default useFetchProducts
