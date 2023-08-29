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
                    <section className="bg-pink-100 py-10">

                        {/*Grid */}
                      <div className="container m-auto grid gap-8 text-neutral-600 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                       
                            {products.map((product) => {
                                return (   

                                    //Card Item
                                    <div key={product.id}
                                        className="bg-slate-100 rounded-md overflow-hidden p-5"
                                    >
                                        <Link to={`/products/${product.id}`}>
                                            <img 
                                                src={product.image} 
                                                alt="Product image"
                                                className="h-96 w-full object-fit"
                                            />
                                            <div>
                                                <span className="font-semibold block mt-6 mb-4">{product.title}</span>
                                                <span className="font-lightbold">{product.price}</span>  
                                                <span>{product.description}</span>  
                                            </div>
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