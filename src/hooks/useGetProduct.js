import { useQuery } from 'react-query'
import ProductsService from '../services/ProductsService'

/**
 * Hook using useQuery to fetch product data from the fake store API
*/

const useGetProduct = (id) => {
    return useQuery(['product', {id}], () => ProductsService.getProduct(id))
}

export default useGetProduct