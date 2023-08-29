import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

/** Hooks **/
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
            {isSuccess && product &&
                <>
                    {/*Product Card List Section/Container*/}
                    <section className="pt-12 pb-12 bg-blue-100 mx-5 grid lg:grid-cols-4">
                        <ProductCard
                            product={product}
                        />
                        <div className="lg:col-span-1 mt-2 mx-7">
                            <span className="font-semibold block leading-[22px]">
                                <p className="">Shipping to: Sweden</p>
                            </span>
                            <span className="block text-slate-700">
                                <p className="my-2">Standard shipping: 40SEK / Free over 700SEK</p>
                            </span>
                            <span className="block text-slate-700">     
                                <p className="my-2">Minimum order value: 50SEK</p>
                            </span>
                            <span className="block text-slate-700">
                                <p className="my-2">Pay with Credit Cards, Paypal or Klarna</p>
                            </span>
                        </div>
                    </section>
                </>
            }
            {!isLoading && !product &&
                <p>No such product existing</p>
            }
        </div>
    )
}

export default ProductPage
