import { Link } from 'react-router-dom'

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
                    {/*Product Card List Section/Container*/}
                    <section className="bg-pink-100 py-10 px-12">

                        {/*Grid */}
                      <div className="container m-auto grid gap-8 text-neutral-600 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                       
                            {products.map((product) => {
                                return (   
                                    //Card Item
                                    <div key={product.id}
                                        className="bg-white"
                                    >
                                        <Link to={`/products/${product.id}`}>
                                            <img src={product.image} />
                                            <p>{product.title}</p>
                                            <p>{product.price}</p>
                                            <p>{product.description}</p>
                                        </Link> 
                                    </div>    
                                )            
                            })} 
                        </div>
                   </section>
                </>
            }
            {!isLoading && !products &&
                <p>There are no products</p>
            }
        </div>
    )
}

export default ProductsPage