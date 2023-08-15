/** Hooks **/
import useGetProduct from '../hooks/useGetProduct'

const ProductPage = () => {

    //test id
    const id = 1
    
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
