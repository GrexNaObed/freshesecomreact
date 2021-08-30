import React from 'react'
import TopLine from '../UI/topLine/TopLine'

function Blog() {
    return (
        <div className='blog'>
            <TopLine body={ { classOne: 'blog__row', classTwo: 'line', title: 'Read our Blog posts', text: 'Go to Blog' } } />

            <div className="blog__items">

                <div className="blog__item">
                    <span className="blog__item-sub">Dinner tips</span>
                    <img src="/img/blogImg.png" alt="" className="blog__item-img" />
                    <div className="blog__item-info">
                        <p className="blog__item-text">Our chef tips for a great and tasty dinner ready in 20 minutes</p>
                        <div className="blog__item-autor">
                            <div className="blog__item-avatar">
                                <img src="/img/blogAvatarimg.png" alt="" className="blog__avatar-img" />
                            </div>
                            <span className="blog__avatar-autor">Author</span>
                            <span className="blog__avatar-data">17. 6. 2020</span>
                        </div>
                    </div>
                </div>

                <div className="blog__item-two">
                    <img src="/img/blogImg2.png" alt="" className="blog__two-img" />
                    <span className="blog__two-sub">Vegetable</span>
                    <p className="blog__two-text">Which vegetable your family will love and want’s eat each day</p>
                    <div className="blog__two-info">
                        <span className="blog__two-autor">Author</span>
                        <span className="blog__two-data">15. 6. 2020</span>
                    </div>
                </div>

                <div className="blog__item-three">

                    <div className="blog__three-item">
                        <div className="blog__three-info">
                            <p className="blog__three-text">Salat is kinda good start to your morning routines</p>
                            <div className="blog__three-autor">
                                <span className="blog__three-aname">Author</span>
                                <span className="blog__three-data">14.1.2020</span>
                            </div>
                        </div>
                        <div className="blog__three-img">
                            <img src="/img/blogImg3.png" alt="" className="blog__three-photo" />
                        </div>
                    </div>
                    <div className="blog__three-item">
                        <div className="blog__three-info">
                            <p className="blog__three-text">Prepare a simple and delicious breads</p>
                            <div className="blog__three-autor">
                                <span className="blog__three-aname">Author</span>
                                <span className="blog__three-data">14.1.2020</span>
                            </div>
                        </div>
                        <div className="blog__three-img">
                            <img src="/img/blogImg3.png" alt="" className="blog__three-photo" />
                        </div>
                    </div>
                    <div className="blog__three-item">
                        <div className="blog__three-info">
                            <p className="blog__three-text">Our chef tips for a great and healthy breakfast</p>
                            <div className="blog__three-autor">
                                <span className="blog__three-aname">Author</span>
                                <span className="blog__three-data">14.1.2020</span>
                            </div>
                        </div>
                        <div className="blog__three-img">
                            <img src="/img/blogImg3.png" alt="" className="blog__three-photo" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog
