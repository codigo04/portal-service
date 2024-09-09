import React from 'react'




export const CardCompra = ({item,agregarPro}) => {

    const agrePro = () => {
        console.log("se hizo Clinc")
        agregarPro(); 
    }
    return (
        <>

            <div key={item.id} className="card" style={{ width: '18rem' }}>
                <img src={item.image} className="card-img-top" alt={item.title} />


                <div className="card-body d-flex flex-column align-items-center justify-content-sm-between">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
        
                    <button   onClick={agrePro} type='button' className='btn btn-primary'>Añadir Carrito</button>
                </div>
            </div>

        </>
    )
}
