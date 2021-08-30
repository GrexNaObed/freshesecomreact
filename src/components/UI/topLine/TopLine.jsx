import React from 'react'

function TopLine({body}) {
    return (
        <div className={body.classOne + " " + body.classTwo} >
            <h2 className="headline-title">{body.title}</h2>
            <button className='headline-btn'>{body.text}</button>
        </div>
    )
}

export default TopLine
