import React from 'react'
import { Route, Link } from "react-router-dom"
import CategoryLIst from '../components/categorylist/CategoryLIst'
import HomePage from '../pages/HomePage'

export const AppContext = React.createContext({})

function Constructor() {
    
    return (
        <AppContext.Provider >
            <Route exact path='/'>
                <HomePage />
            </Route>
        </AppContext.Provider>

    )
}

export default Constructor
