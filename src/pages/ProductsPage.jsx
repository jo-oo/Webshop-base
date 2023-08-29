import ProductsCard from '../components/ProductsCard'

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
                    <section className="bg-blue-100">

                        {/*Grid */}
                        <div className="container m-auto grid gap-8 text-neutral-600 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        
                            {products.map((product) => {
                                return (   
   
                                    <ProductsCard 
                                    key={product.id}
                                    product={product}
                                />
   
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