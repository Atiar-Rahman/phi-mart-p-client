import { useState, useEffect } from "react"
import apiClient from "../services/api-client"

const useFetchCategories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await apiClient.get("/categories/")
        // Handle both { results: [...] } and direct array
        const data = res.data.results || res.data
        setCategories(Array.isArray(data) ? data : [])
      } catch (err) {
        setError(err.message || "Failed to fetch categories")
      } finally {
        setLoading(false)
      }
    }
    fetchCategories()
  }, [])

  return { categories, loading, error }
}


export default useFetchCategories
