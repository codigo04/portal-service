import React, { useState } from 'react'
import { ProductosContext } from './ProductosContext'
import { ProductosService } from '../service/ProductosService'

export const ProductoProvider = ({ children }) => {


      const { respuesta, isLoading, error } = ProductosService();



       

    return (
        <ProductosContext.Provider value={{respuesta,isLoading,error}}>
            {children}
        </ProductosContext.Provider>
    )
}
