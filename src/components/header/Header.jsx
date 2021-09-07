import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className='header'>
            <div className="header__top">
                <div className="header__top-contacts">
                    <Link to="/chat" className="header__top-chat">Chat with us</Link>
                    <a href={"tel:+420336775664"} className="header__top-call">+420 336 775 664</a>
                    <a href={"email:info@freshnesecom.com"} className="header__top-email">info@freshnesecom.com</a>
                </div>
                <div className="header__top-nav">
                    <Link to="/blog" className="header-top-">Blog</Link>
                    <Link to="/aboutus" className="header-top-">About Us</Link>
                    <Link to="/careesrs" className="header-top-">Careers</Link>
                </div>
            </div>
            <div className="header__search">
                <div className="header__search-logo">
                    <Link to="/" className="header__search-linkimg">
                        <img className="header__search-img" src='/img/logo.svg' alt="logo"></img>
                    </Link>
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
