import React, { useEffect, useState } from 'react'

export const peliculasService = (namePelicula) => {
    const apiKey = '3082bcb1625dcf286ab207fd658d1894'
    const apiUrl = 'https://api.themoviedb.org/3/search/movie'

    const [dataPelicula, setDataPelicula] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    //consumo de api con fetch
    const getData = async () => {
        try {
            const response = await fetch(`${apiUrl}?query=${namePelicula}&api_key=${apiKey}`);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json()
            console.log(data);
            setDataPelicula(data.results);
            setIsLoading(true)

        } catch (error) {
            setIsLoading(false)
            setError(error.message)
            console.log(error.message);
        }
    }

    useEffect(() => {
        getData();
    }, [namePelicula]);

    return {
        dataPelicula,
        isLoading,
        error
    }
}
