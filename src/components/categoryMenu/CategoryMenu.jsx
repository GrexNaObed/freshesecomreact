import React from 'react'
import CategoryLIst from '../listOf/CategoryLIst'

function CategoryMenu() {
    return (
        <div className='category'>
            <div className="category__items">
                <div className="category__item">
                   <CategoryLIst body={{title:'Category menu', btnText:'More categories'}} />
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
