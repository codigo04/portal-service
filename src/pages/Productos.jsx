import React, { useContext, useState } from 'react'
import { ProductosContext } from '../context/ProductosContext'
import { CardCompra } from '../Components/cardCompra'
import { CarritoContext } from '../context/CarritoContext'



export const Productos = () => {

  const { respuesta, isLoading, error } = useContext(ProductosContext)

 const {agregarProducts,eliminarProducts} = useContext(CarritoContext);


  const agregarPro = (producto)=>{
    agregarProducts(producto);
  }


  return (
    <>


      <section className="container d-flex " >
        {/* <h1 className="text-center text-color mb-5">Productos</h1> */}
        <div className='p-2 w-100'>

          <h1 className="text-center text-color mb-5">Productos</h1>
          <div className='container flex-wrap d-flex align-items-stretch justify-content-center gap-4 mt-5'>
            {
              respuesta.map(product => (
                <CardCompra
                item={product}
                agregarPro={()=>agregarPro(product)}
                >
                </CardCompra>
              ))
            }




          </div>


        </div>

      </section>



    </>

  )
}
