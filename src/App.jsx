import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import NotFound from './pages/NotFound'
import NavBar from './Layout/Navigation/NavBar'

function App() {

    return (
        <div>
            <div className="">
				<NavBar />  
			</div>
            <Routes>
				<Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
				<Route path="/products/:id" element={<ProductPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App
