import { Link } from 'react-router-dom'

/** Icons **/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-regular-svg-icons"

const ProductsCard = ({product}) => {
    {/* Card Item */}
    return (
        <div 
            key={product.id}
            className="bg-slate-100 rounded-md overflow-hidden p-5 relative"
            >
            <Link to={`/products/${product.id}`}>
                <img 
                    src={product.image} 
                    alt="Product image"
                    className="h-96 w-full object-fit"
                />
                {/* Heart icon */}
                <div className="p-2 absolute top-0 right-0 mt-2 mr-2">
                    <FontAwesomeIcon 
                        icon={faHeart}
                        style={{color: "#31333a",}}  
                        className="fa-lg" 
                    />
                </div>
                <div>
                    <span className="font-semibold block mt-6 mb-4">{product.title}</span>
                    <span className="font-lightbold">{product.price}</span>  
                    <span>{product.description}</span>  
                </div>
            </Link> 
        </div> 
    )
}

export default ProductsCard
