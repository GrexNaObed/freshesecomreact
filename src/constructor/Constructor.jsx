import React from 'react'
import { Route, Link } from "react-router-dom"
import HomePage from '../pages/HomePage'


function Constructor() {

    return (
        <Route exact path='/'>
            <HomePage />
        </Route>

    )
}

export default Constructor
