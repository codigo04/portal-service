import React from 'react'
import { Header } from './Components/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Clima } from './pages/Clima'
import { Peliculas } from './pages/Peliculas'
import { Productos } from './pages/Productos'
import { Compras } from './pages/Compras'
import { ProductoProvider } from './context/ProductoProvider'
import { CarritoProvider } from './context/CarritoProvider'


export const App = () => {
    return (
        <>
            <ProductoProvider>
                <CarritoProvider>
                    <Header> </Header>
                    <br />
                    <Routes>
                        <Route path='/home' element={<Home></Home>}></Route>
                        <Route path='/clima' element={<Clima></Clima>}></Route>
                        <Route path='/peliculas' element={<Peliculas></Peliculas>}></Route>
                        <Route path='/Productos' element={<Productos></Productos>}></Route>
                        <Route path='/compras' element={<Compras></Compras>}></Route>
                        <Route path='/*' element={<Navigate to='/home' />}></Route>
                    </Routes>
                </CarritoProvider>
            </ProductoProvider>
        </>
    )
}
