import React from 'react'
import Cart from '../UI/Cart/Cart'
import CartSale from '../UI/Cart/CartSale'
import TopLine from '../UI/topLine/TopLine'

function Headline() {
    return (
        <div className='headline'>

            <TopLine body={{ classOne:'headline_row-info', classTwo:'line', title:'Section Headline', text:'Button'}}/>

            
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
