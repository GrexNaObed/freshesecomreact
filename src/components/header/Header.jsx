import React, { useState } from 'react'

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className='header'>
            <div className="header__top">
                <div className="header__top-contacts">
                    <a href="" className="header__top-chat">Chat with us</a>
                    <a href="tel:+420336775664" className="header__top-call">+420 336 775 664</a>
                    <a href="email:info@freshnesecom.com" className="header__top-email">info@freshnesecom.com</a>
                </div>
                <div className="header__top-nav">
                    <a href="" className="header-top-">Blog</a>
                    <a href="" className="header-top-">About Us</a>
                    <a href="" className="header-top-">Careers</a>
                </div>
            </div>
            <div className="header__search">
                <div className="header__search-logo">
                    <a href="" className="header__search-linkimg">
                        <img className="header__search-img" src='/img/logo.svg'></img>
                    </a>
                </div>
                <div className="header__search-btns">
                    <ul className="header__search-select">
                        <div className="header__search-item"  onClick={()=>setToggleMenu( toggleMenu ? false : true) }>All categories</div>
                        <div className={`header__search-wrapper ${toggleMenu ? 'active' : null}`}>
                            <li className="header__search-item item-wrapper">Bakery</li>
                            <li className="header__search-item item-wrapper">Fruit and vegetables</li>
                            <li className="header__search-item item-wrapper">Drinks</li>
                            <li className="header__search-item item-wrapper">Kitchen</li>
                            <li className="header__search-item item-wrapper">Special nutrition</li>
                            <li className="header__search-item item-wrapper">Baby</li>
                            <li className="header__search-item item-wrapper">Pharmacy</li>
                        </div>

                    </ul>
                    <input className='header__search-input' type="search" name="" id="" placeholder='Search Products, categories ...' />
                    <img src="/img/loop.svg" alt="" className="header__search-loop" />
                </div>
                <ul className="header__search-items">
                    <li className="header__search-man">
                        <img src="/img/man.svg" alt="" />
                    </li>
                    <li className="header__search-shop">
                        <img src="/img/shop.svg" alt="" />
                    </li>

                </ul>
            </div>
        </div>

    )
}

export default Header
