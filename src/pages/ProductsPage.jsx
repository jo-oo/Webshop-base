/** Hooks **/
import useGetProducts from '../hooks/useGetProducts'

const ProductsPage = () => {
    {/* Use useGetProducts hook and return these specific values from useQuery */}
    const { data: products, error, isError, isLoading, isSuccess  } = useGetProducts()

    return (
        <div>
            {/* If loading, show message on screen for user waiting*/}
            {isLoading && <p>Loading data...</p>}

            {/* If error, show message on screen for user*/}
            {isError && (<p>Error! {error.message}</p>)}

            {/* Render products when fetching isSucess and product is loaded */}
            {isSuccess && products &&
                <>
                    {products.map((product, i) => {
                        return (    
                            <p key={i}>{product.title}</p>    
                        )            
                    })} 
                </>
            }
            {!isLoading && !products &&
                <p>There are no products</p>
            }
        </div>
    )
}

export default ProductsPage