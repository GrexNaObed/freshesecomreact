import React from 'react'
import CategoryLIst from '../listOf/CategoryLIst'
import Cart from '../UI/Cart/Cart'
import CartSale from '../UI/Cart/CartSale'

function BestFromFrames() {
    return (
        <div className='bestfromframes'>
            <div className="bestfromframes__items">
                <div className="bestfromframes-item">
                    <CategoryLIst body={{title:'Best from Farmers', btnText:'More products'}}/>
                </div>
                <Cart/>
                <CartSale body={{sale:'- 36 %'}}/>
                <CartSale body={{sale:'- 36 %'}}/>
            </div>
        </div>
    )
}

export default BestFromFrames
