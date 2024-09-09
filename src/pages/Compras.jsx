import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const Compras = () => {

 const {listaCompras,agregarProducts,eliminarProducts} = useContext(CarritoContext);


 const total =() => {

  // return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2);
    return listaCompras.reduce((total,item) => total + item.price,0).toFixed(2);
 }
  
  return (
    <>
      <table className="table container">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col" className="text-center">Cantidad</th>
            <th scope="col" className="text-center">Eliminar</th>
          </tr>
        </thead>
        <tbody>
         {
          listaCompras.map(pro =>( 
            <tr key={pro.id}>
            <td>{pro.title}</td>
            <td>s/ {pro.price}</td>
            <td className="text-center">
              <button className="btn btn-outline-danger btn-sm">+</button>
              <button className="btn btn-primary btn-sm mx-2">0</button>
              <button className="btn btn-outline-danger btn-sm">-</button>
            </td>
            <td className="text-center">
              <button className="btn btn-danger btn-sm">Eliminar</button>
            </td>
          </tr>
          ))
         }
          {/* Añadir más filas según sea necesario */}
          <tr>
            <th>TOTAL:</th>
            <td>s/ {total()}</td>
            <td></td>
            <td></td>

            
          </tr>
        </tbody>
      </table>

      <div className="d-grid gap-2 mt-3 container" >
        <button className="btn btn-primary">COMPRA</button>
      </div>

    </>
  )
}
