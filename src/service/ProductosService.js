import React, { useContext, useEffect, useState } from 'react'
import { ProductosContext } from '../context/ProductosContext';

export const ProductosService = () => {
    const [respuesta, setRespuesta] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            //console.log(data)
            setRespuesta(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return { respuesta, isLoading, error };

}
