/** Hooks **/
import { useParams } from 'react-router-dom'
import useGetProduct from '../hooks/useGetProduct'

const ProductPage = () => {

    //Get id from url
    const {id} = useParams()
    
    {/* Use useGetProduct hook and return these specific values from useQuery */}
    const { data: product, error, isError, isLoading, isSuccess } = useGetProduct(id)

    return (
        <div>
            {/* If loading, show message on screen for user waiting*/}
            {isLoading && <p>Loading data...</p>}

            {/* If error, show message on screen for user*/}
            {isError && (<p>Error! {error.message}</p>)}
         
            {/* Render product when fetching isSucess and product is loaded */}
            <h1>Product Page</h1>
            {isSuccess && product &&
                <p>{product.title}</p>
            }
            {!product &&
                <p>No such product existing</p>
            }
        </div>
    )
}

export default ProductPage
