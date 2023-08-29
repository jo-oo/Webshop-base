import { Link } from 'react-router-dom'

const ProductsCard = ({product}) => {
    {/* Card Item */}
    return (
        <div 
            key={product.id}
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
}

export default ProductsCard
