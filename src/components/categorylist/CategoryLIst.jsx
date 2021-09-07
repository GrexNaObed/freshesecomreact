import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CategoryLIst({ body, btnText }) {
    const [listMenu, setListMenu] = useState([
        { id: 1, title: 'Bakery', link: 'bakery' },
        { id: 2, title: 'Fruit and vegetables', link: 'fruitandvegetables' },
        { id: 3, title: 'Meat and fish', link: 'meatandfish' },
        { id: 4, title: 'Drinks', link: 'drinks' },
        { id: 5, title: 'Kitchen', link: 'kitchen' },
    ])


    return (
        <div>
            <h3 className="category__title">{ body.title }</h3>
            <ul className='category__item-links'>
                {
                    listMenu.map(item =>
                        <li key={ item.id } className='category__item-link' onClick={ () => setListMenu() }>
                            <Link to={ `/${item.link}` } className="category__item-href"> { item.title } </Link>
                        </li>

                    )
                }

            </ul>

        </div>
    )
}

export default CategoryLIst
