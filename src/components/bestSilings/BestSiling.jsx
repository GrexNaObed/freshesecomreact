import React from 'react'
import CategoryLIst from '../categorylist/CategoryLIst'
import Cart from '../UI/Cart/Cart'
import CartSale from '../UI/Cart/CartSale'

function BestSiling() {
    return (
        <div className='bestsiling'>
            <div className="bestsiling__items">
                <div className="bestsiling__item">
                    <CategoryLIst body={ { title: 'Best selling products', btnText: 'More products' } } />
                </div>
                <Cart />
                <CartSale body={{sale:'-36%'}}/>
                <CartSale body={{sale:'-36%'}}/>
            </div>
        </div>
    )
}

export default BestSiling
