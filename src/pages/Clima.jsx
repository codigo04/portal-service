import React, { useContext, useState } from 'react'
import '../assets/styles/clima.css'

import { climaService } from '../service/ClimaService';

export const Clima = () => {

   

    const [paisT, setPaisT] = useState('argentina')
    const [pais, setPais] = useState(paisT)

    const { dataClima, isLoading, error } = climaService(pais);
    const difKelvin = 273.15;
    console.log(dataClima);

   


  

    const handleImput = (e) => {
        setPaisT(e.target.value)
    }

    const ejecutar = () => {
        setPais(paisT)
    }



    const noSubmit = (e) => {

        e.preventDefault();

    }


    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container d-flex flex-column align-items-center">
                    <form className="d-flex mb-3 w-50" role="search" onSubmit={noSubmit}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Ingresa el lugar"
                            name={paisT}
                            aria-label="Search"
                            onChange={handleImput}
                        />
                        <button onClick={ejecutar} className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <br />
                    <div>
                        {


                            isLoading === true
                                ?
                                <div>
                                    <h2 className='color-white'>{dataClima?.name}</h2>
                                    <p className='color-white'>Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}°C</p>
                                    <p className='color-white'>Condicion Metorologica: {dataClima?.weather[0]?.description}</p>
                                    <img src={`https://openweathermap.org/img/wn/${dataClima?.weather[0]?.icon}@2x.png`} alt="" />
                                </div>
                                :
                                pais!==''&&
                                <div className="d-flex flex-column justify-content-center align-items-center" >
                                    <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                                       
                                    </div>
                                    <h1 className="mt-3 text-primary">Buscando...</h1>
                                </div>
                        }

                    </div>
                </div>
            </nav>
        </>
    )
}
