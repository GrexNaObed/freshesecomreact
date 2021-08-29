import React from 'react'
import Cart from '../UI/Cart/Cart'
import CartSale from '../UI/Cart/CartSale'

function Headline() {
    return (
        <div className='headline'>
            <div className="headline_row-info">
                <h2 className="headline-title">Section Headline</h2>
                <button className='headline-btn'>Button</button>
            </div>
            <div className="headline_row-cart">
                <Cart/>
                <Cart/>
                <CartSale body={{sale:'-36%'}}/>
                <Cart/>
            </div>
        </div>
    )
}

export default Headline
