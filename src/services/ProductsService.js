/**
 * Products service calling Fakestore API
*/

import axios from 'axios'

const BASE_URL = 'https://fakestoreapi.com'


/**
 * GET an endpoint
 */
 const get = async (endpoint) => {
    const response = await axios.get(BASE_URL + endpoint)
    return response.data 
}

/**
 * GET all products
 */
 const getProducts = () => {
    return get('/products')
}


export default {
	getProducts
}

