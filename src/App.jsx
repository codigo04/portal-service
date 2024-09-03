import React from 'react'
import { Header } from './Components/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Clima } from './pages/Clima'
import { Peliculas } from './pages/Peliculas'
import { Carrito } from './pages/Carrito'

export const App = () => {
    return (
        <>

            <Header />
               <br />
           
                <Routes>
                    
                    <Route path='/home' element={<Home></Home>}></Route>
                    <Route path='/clima' element={<Clima></Clima>}></Route>
                    <Route path='/peliculas' element={<Peliculas></Peliculas>}></Route>
                    <Route path='/carrito' element={<Carrito></Carrito>}></Route>
                    <Route path='/*' element={<Navigate to='/home' />}></Route>
                </Routes>
            
        </>
    )
}
