import React from 'react'

function CategoryMenu() {
    return (
        <div className='category'>
            <div className="category__items">
                <div className="category__item">
                    <h3 className="category__title">Category menu</h3>
                    <ul className="category__item-links">
                        <li className="category__item-link">
                            <a href="" className="category__item-href">Bakery</a>
                        </li>
                        <li className="category__item-link">
                            <a href="" className="category__item-href">Fruit and vegetables</a>
                        </li>
                        <li className="category__item-link">
                            <a href="" className="category__item-href">Meat and fish</a>
                        </li>
                        <li className="category__item-link">
                            <a href="" className="category__item-href">Drinks</a>
                        </li>
                        <li className="category__item-link">
                            <a href="" className="category__item-href">Kitchen</a>
                        </li>
                    </ul>
                    <button className='category__item-btn'>More categories</button>
                </div>

                <div className="category__item">
                    <div className="category__item-inner">
                        <div className="category__item-info">
                            <span className="category__item-sub">Banner subfocus</span>
                            <h3 className="category__item-title">Space for heading</h3>
                        </div>
                        <button className="category__item-btns">Read recepies</button>
                    </div>
                </div>
                <div className="category__item">
                    <div className="category__item-inner">
                        <div className="category__item-info">
                            <span className="category__item-sub">Banner subfocus</span>
                            <h3 className="category__item-title">Space for heading</h3>
                        </div>
                        <button className="category__item-btns">Read recepies</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryMenu
