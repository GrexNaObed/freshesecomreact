import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../constructor/Constructor'
import { fullMenuFunc } from '../../functions/functions'

function CategoryLIst({ body, btnText }) {

    const [fullMenu, setfullMenu] = React.useState(
        <div>
            <ul className="category__item-links">
                <li className="category__item-link">
                    <Link to='/bakery' className="category__item-href">Bakery</Link>
                </li>
                <li className="category__item-link">
                    <Link to='/fruitandvegetables' className="category__item-href">Fruit and vegetables</Link>
                </li>
                <li className="category__item-link">
                    <Link to='/meatandfish' className="category__item-href">Meat and fish</Link>
                </li>
                <li className="category__item-link">
                    <Link to='/drinks' className="category__item-href">Drinks</Link>
                </li>
                <li className="category__item-link">
                    <Link to='/kitchen' className="category__item-href">Kitchen</Link>
                </li>
            </ul>
            <button onClick={ fullMenuFunc } className='category__item-btn'>{ body.btnText }</button>
        </div>
    )

    function fullMenuFunc() {
        setfullMenu(
            <div>
                <ul className="category__item-links">
                    <li className="category__item-link">
                        <Link to='/bakery' className="category__item-href">Bakery</Link>
                    </li>
                    <li className="category__item-link">
                        <Link to='/fruitandvegetables' className="category__item-href">Fruit and vegetables</Link>
                    </li>
                    <li className="category__item-link">
                        <Link to='/meatandfish' className="category__item-href">Meat and fish</Link>
                    </li>
                    <li className="category__item-link">
                        <Link to='/drinks' className="category__item-href">Drinks</Link>
                    </li>
                    <li className="category__item-link">
                        <Link to='/kitchen' className="category__item-href">Kitchen</Link>
                    </li>
                    <li className="category__item-link">
                        <Link to='/specialnutrition' className="category__item-href">Special nutrition</Link>
                    </li>
                    <li className="category__item-link">
                        <Link to='/baby' className="category__item-href">Baby</Link>
                    </li>
                    <li className="category__item-link">
                        <Link to='/pharmacy' className="category__item-href">Pharmacy</Link>
                    </li>
                </ul>
                <button onClick={ notFullMenu } className='category__item-btn'>{ body.btnText }</button>
            </div>)
    }

    function notFullMenu() {
        setfullMenu(
            <div>
                <ul className="category__item-links">
                    <li className="category__item-link">
                        <Link to='/bakery' className="category__item-href">Bakery</Link>
                    </li>
                    <li className="category__item-link">
                        <Link to='/fruitandvegetables' className="category__item-href">Fruit and vegetables</Link>
                    </li>
                    <li className="category__item-link">
                        <Link to='/meatandfish' className="category__item-href">Meat and fish</Link>
                    </li>
                    <li className="category__item-link">
                        <Link to='/drinks' className="category__item-href">Drinks</Link>
                    </li>
                    <li className="category__item-link">
                        <Link to='/kitchen' className="category__item-href">Kitchen</Link>
                    </li>
                </ul>
                <button onClick={ fullMenuFunc } className='category__item-btn'>{ body.btnText }</button>
            </div>
        )
    }


    return (
        <div>
            <h3 className="category__title">{ body.title }</h3>
            { fullMenu }
        </div>
    )
}

export default CategoryLIst
