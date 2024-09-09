import React, { useReducer, useState } from 'react'
import { CarritoContext } from './CarritoContext'



const initialState = []

function carritoReducer(state = initialState, accion = {}) {

  switch (accion.type) {
    case 'agregar':

       console.log(state);
       return[...state,accion.payload]

    case 'eliminar':

     return state.filter(item => item.id !== accion.payload )


    default:
      break;
  }
}

export const CarritoProvider = ({ children }) => {


  const [listaCompras, dispatch] = useReducer(carritoReducer, initialState)


  const agregarProducts = (producto) => {
    const action = {
      type: 'agregar',
      payload: producto
    }
    dispatch(action)
  }


  const eliminarProducts = (id) => {
    const action = {
      type: 'eliminar',
      payload: id
    }

    dispatch(action)
  }


   
  return (
    <CarritoContext.Provider value={{listaCompras,agregarProducts,eliminarProducts}}>  
      {children}
    </CarritoContext.Provider>

  )
}
