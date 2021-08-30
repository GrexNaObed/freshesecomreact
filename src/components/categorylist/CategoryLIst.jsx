import React from 'react'

function CategoryLIst({ body, btnText }) {

    const [fullMenu, setfullMenu] = React.useState(
        <div>
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
            <button onClick={ fullMenuFunc } className='category__item-btn'>{ body.btnText }</button>
        </div>
    )

    function notFullMenu() {
        setfullMenu(
            <div>
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
                <button onClick={ fullMenuFunc } className='category__item-btn'>{ body.btnText }</button>
            </div>
        )
    }

    function fullMenuFunc() {
        setfullMenu(
            <div>
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
                    <li className="category__item-link">
                        <a href="" className="category__item-href">Special nutrition</a>
                    </li>
                    <li className="category__item-link">
                        <a href="" className="category__item-href">Baby</a>
                    </li>
                    <li className="category__item-link">
                        <a href="" className="category__item-href">Pharmacy</a>
                    </li>
                </ul>
                <button onClick={ notFullMenu } className='category__item-btn'>{ body.btnText }</button>
            </div>)
    }

    return (
        <div>
            <h3 className="category__title">{ body.title }</h3>
            { fullMenu }
        </div>
    )
}

export default CategoryLIst
