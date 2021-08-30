import React from 'react'
import TopLine from '../UI/topLine/TopLine'
import Slider from 'react-slick';

function OurCostumers() {
    const settings = {
        slidesToShow: 2,
        slidesToScroll:1,
        dots: false,
        arrow: true,
        centerMode: true,
        centerPadding: '17%',
        infinite: true,
    }
    return (
        <div className='ourcostumers'>
            
            <TopLine body={{ title:'Our customers says', text:'Button',classOne:"ourcostumers__row", classTwo:'line'}} />


            <Slider {...settings}>
                <div className="ourcostumers__slider-item">
                    <p className="ourcostumers__slider-text">“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</p>
                    <span className="ourcostumers__slider-name">Name and Surname</span>
                    <div className="ourcostumers__slider-avatar">
                        <img src="/img/avatarSl.png" alt="" className="ourcostumers__slider-img" />
                    </div>
                </div>
                <div className="ourcostumers__slider-item">
                    <p className="ourcostumers__slider-text">“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</p>
                    <span className="ourcostumers__slider-name">Name and Surname</span>
                    <div className="ourcostumers__slider-avatar">
                        <img src="/img/avatarSl.png" alt="" className="ourcostumers__slider-img" />
                    </div>
                </div>
                <div className="ourcostumers__slider-item">
                    <p className="ourcostumers__slider-text">“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</p>
                    <span className="ourcostumers__slider-name">Name and Surname</span>
                    <div className="ourcostumers__slider-avatar">
                        <img src="/img/avatarSl.png" alt="" className="ourcostumers__slider-img" />
                    </div>
                </div>
                <div className="ourcostumers__slider-item">
                    <p className="ourcostumers__slider-text">“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</p>
                    <span className="ourcostumers__slider-name">Name and Surname</span>
                    <div className="ourcostumers__slider-avatar">
                        <img src="/img/avatarSl.png" alt="" className="ourcostumers__slider-img" />
                    </div>
                </div>
                <div className="ourcostumers__slider-item">
                    <p className="ourcostumers__slider-text">“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</p>
                    <span className="ourcostumers__slider-name">Name and Surname</span>
                    <div className="ourcostumers__slider-avatar">
                        <img src="/img/avatarSl.png" alt="" className="ourcostumers__slider-img" />
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default OurCostumers
