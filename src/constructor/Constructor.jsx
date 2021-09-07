import React, { useContext, useState } from 'react'
import { Route, Link } from "react-router-dom"
import HomePage from '../pages/HomePage'

const TransferContext = React.createContext()

export const useTransferContext = () => {
    return useContext(TransferContext)
}

function Constructor() {
    const [ItemToShow, setItemToShow] = useState(5)

    const [listMenu, setListMenu] = useState([
        { id: 1, title: 'Bakery', link: 'bakery' },
        { id: 2, title: 'Fruit and vegetables', link: 'fruitandvegetables' },
        { id: 3, title: 'Meat and fish', link: 'meatandfish' },
        { id: 4, title: 'Drinks', link: 'drinks' },
        { id: 5, title: 'Kitchen', link: 'kitchen' },
        { id: 6, title: 'Special nutrition', link: 'specialnutrition' },
        { id: 7, title: 'Baby', link: 'baby' },
        { id: 8, title: 'Pharmacy', link: 'pharmacy' },
    ])

    return (
        <Route exact path='/'>
            <TransferContext.Provider value={{setListMenu,listMenu,ItemToShow,setItemToShow}}>
                <HomePage />
            </TransferContext.Provider>
        </Route>

    )
}

export default Constructor
