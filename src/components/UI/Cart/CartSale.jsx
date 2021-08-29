import React from 'react'

function CartSale({body}) {
    return (
        <div className="bestsiling__item-cart">
            <div className="bestsiling__cart-wrapper">
                <div className="bestsiling__cart-sale">{ body.sale }</div>
                <img src="/img/empty.png" alt="" className="bestsiling__cart-img" />
            </div>


            <h2 className="bestsiling__cart-title">Product Title</h2>
            <p className="bestsiling__cart-text">Space for a small product description </p>
            <div className="bestsiling__cart-bottom">
                <div className="bestsiling__cart-priceBottom">
                    <h2 className="bestsiling__cart-price">1.48 USD</h2>
                </div>
                <button className='bestsiling__cart-btn'>Buy now</button>
            </div>
        </div>
    )
}

export default CartSale
