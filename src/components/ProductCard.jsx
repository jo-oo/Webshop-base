
/** Icons **/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-regular-svg-icons"

const ProductCard = ({product}) => {

    console.log("desciption ", product)
    {/* Card Item */}
    return (
        <div 
            key={product.id}
            className="bg-slate-100 rounded-md overflow-hidden p-5 relative lg:col-span-3"
            >
  
                <div className="container m-auto grid sm:grid-cols-2 gap-4 bg-white rounded-lg overflow-hidden relative">
                    <img src={product.image} 
                    alt="Product image"
                    className="w-full object-cover"
                    />
                    {/* Heart icon */}
                    <div className="p-2 absolute top-0 right-0 mt-3 mr-3">
                        <FontAwesomeIcon icon={faHeart}
                        style={{color: "#31333a",}}  className="fa-lg" />
                    </div>

                    {/* Product data */}
                    <div className="mt-12 mx-8 mb-4 relative content-between">
                        {/* <div className="relative"> */}
                        <div className="h-full grid grid-cols-1 gap-6 content-between">
                            {/* Product description*/}
                            <span className="leading-4 block text-sm text-slate-700">{product.description}</span>
                            {/* Product price and button */}
                            <div>  
                                <div className="flex justify-between">
                                <div className="flex items-end">
                                    <span className="inline-block align-bottom  font-semibold text-slate-800 text-[50px]..."><span>$ </span>{product.price}</span>
                                </div>    
                                    <button
                                        className="bg-black hover:bg-gray-600 text-white py-3 px-4 text-sm">
                                            ADD TO CART
                                    </button>
                                </div>
                            </div>        
                        </div>
                    </div>
                </div> 
         

        </div>
    )
}

export default ProductCard