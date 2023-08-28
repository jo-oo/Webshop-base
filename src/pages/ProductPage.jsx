/** Hooks **/
import useGetProduct from '../hooks/useGetProduct'
import { useParams } from 'react-router-dom'

const ProductPage = () => {

    //Get id from url
    const {id} = useParams()
    
    {/* Use useGetProduct hook and return these specific values from useQuery */}
    const { data: product } = useGetProduct(id)
    return (
        <div>
            <h1>Product Page</h1>
            {product && 
                <p>{product.title}</p>
            }
        </div>
    )
}

export default ProductPage
