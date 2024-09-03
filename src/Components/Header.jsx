import React from 'react'
import   imgLogo from '../assets/img/Logo.png'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <>
     
            
     <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink to="/home" className="navbar-brand "><img src={imgLogo} alt="" width={30}/></NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <NavLink
                                to="/home"
                                className="nav-link"
                                activeClassName="active"
                                aria-current="page"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/clima"
                                className="nav-link"
                                activeClassName="active"
                            >
                                Clima
                            </NavLink>
                            <NavLink
                                to="/peliculas"
                                className="nav-link"
                                activeClassName="active"
                            >
                                Películas
                            </NavLink>
                            <NavLink
                                to="/carrito"
                                className="nav-link"
                                activeClassName="active"
                            >
                                Carrito Compra
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}
