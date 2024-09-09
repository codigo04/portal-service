import React, { useState } from 'react'
import { peliculasService } from '../service/peliculasService'
import '../assets/styles/pelicula.css'

export const Peliculas = () => {


  const [peliculaT, setPeliculaT] = useState('la sirenita')

  const [pelicula, setPelicula] = useState(peliculaT);

  const { dataPelicula, isLoading, error } = peliculasService(pelicula);
  
  console.log(dataPelicula)
  const handleImput = (e) => {
    console.log(e.target.value)
    setPeliculaT(e.target.value)
  }

  const ejecutar = () => {
    setPelicula(peliculaT);
  }

  const noSubmit = (e) => {
    e.preventDefault();
  }



  return (
    <>
      <section className='fondo container-fluid'>
        <nav className="navbar navbar-light">
          <div className="container d-flex flex-column align-items-center">
            <form className="d-flex mb-3 w-50" role="search" onSubmit={noSubmit}>
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Nombre de la pelicula"
                name={peliculaT}
                aria-label="Search"
                onChange={handleImput}
              />
              <button onClick={ejecutar} className="btn btn-outline-danger" type="submit">Search</button>
            </form>
          </div>
        </nav>

        {
          isLoading === true


            ?


            <section class="container d-flex flex-column" >
              <h1 class="text-center text-color mb-5">Películas</h1>
              <div class="card-container">



                {dataPelicula.length > 0
                  ?
                  dataPelicula.map((item) => (
                    <div class="card">
                      <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} class="card-img-top" alt="Pelicula 1" />
                      <div class="card-body d-flex flex-column align-items-center justify-content-sm-between" >
                        <span><h5 class="card-title">{item.title}</h5>
                          <p class="card-text">{item.overview}</p></span>
                        <button class="btn-watch">Ver ahora</button>
                      </div>
                    </div>
                  ))
                  :
                  <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                    <i className="bi bi-exclamation-circle text-danger" style={{ fontSize: '3rem' }} />
                    <h1 className="text-center text-danger mt-3">
                      No hay resultados para esta búsqueda
                    </h1>
                  </div>

                }






              </div>
            </section>




            :
            <div className="container d-flex flex-column justify-content-center align-items-center" >
              <div className="netflix-loader"></div>
              <h1 className="loading-text">Cargando...</h1>
            </div>
        }
      </section>
    </>

  )
}
