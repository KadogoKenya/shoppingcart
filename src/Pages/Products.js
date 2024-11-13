import React, { useState } from 'react'
import Data from '../assest/Data.json'
import Product  from '../Components/Products'

const Products = () => {
    // eslint-disable-next-line
    const [products, setProducts] = useState(Data.products)
    
    return (
        <>
        <div className='container mt-5'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    products.map(p => (
                        <Product product = {p}/>
                    ))
                }
            </div>
        </div>
        
        </>
    )
}
export default Products