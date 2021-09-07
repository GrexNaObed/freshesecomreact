import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTransferContext } from '../../constructor/Constructor'

function CategoryLIst({ body, btnText }) {
    const {  listMenu, ItemToShow } = useTransferContext()
    return (
        <div>
            <h3 className="category__title">{ body.title }</h3>
            <ul className='category__item-links'>
                {
                    listMenu.slice(0,ItemToShow).map(item =>
                        <li key={ item.id } className='category__item-link' >
                            <Link to={ `/${item.link}` } className="category__item-href"> { item.title } </Link>
                        </li>
                    )
                }

            </ul>

        </div>
    )
}

export default CategoryLIst
