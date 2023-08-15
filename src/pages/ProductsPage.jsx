/** Hooks **/
import useGetProducts from '../hooks/useGetProducts'

const ProductsPage = () => {
    {/* Use useGetProducts hook and return these specific values from useQuery */}
    const { data: products } = useGetProducts()
    return (
        <div>
            {products &&
                <>
                    {products.map((product, i) => {
                        return (    
                            <p key={i}>{product.title}</p>    
                        )            
                    })} 
                </>
            }
        </div>
    )
}

export default ProductsPage