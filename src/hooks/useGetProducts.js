import { useQuery } from 'react-query'
import ProductsService from '../services/ProductsService'

/**
 * Hook using useQuery to fetch products data from the fake store API
*/

const useGetProducts= () => {
    return useQuery('products', ProductsService.getProducts)
}

export default useGetProducts