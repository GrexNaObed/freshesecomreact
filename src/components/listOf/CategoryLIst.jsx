import React from 'react'

function CategoryLIst({body,btnText}) {
    return (
        <div>
            <h3 className="category__title">{body.title}</h3>
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
            <button className='category__item-btn'>{body.btnText}</button>
        </div>
    )
}

export default CategoryLIst
