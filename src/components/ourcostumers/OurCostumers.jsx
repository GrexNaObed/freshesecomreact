import React from 'react'
import TopLine from '../UI/topLine/TopLine'

function OurCostumers() {
    return (
        <div className='ourcostumers'>
            
            <TopLine body={{ title:'Our customers says', text:'Button',classOne:"ourcostumers__row", classTwo:'line'}} />


            <div className="ourcostumers__slider">
                <div className="ourcostumers__slider-item">
                    <p className="ourcostumers__slider-text">“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</p>
                    <span className="ourcostumers__slider-name">Name and Surname</span>
                    <div className="ourcostumers__slider-avatar">
                        <img src="" alt="" className="ourcostumers__slider-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCostumers
