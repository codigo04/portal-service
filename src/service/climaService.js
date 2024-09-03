import React, { useEffect, useState } from 'react'

export const climaService = (pais) => {

    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'
    const apiKey = '7b575102caa0c4492dbfa9e8ab039e92'

    const [dataClima, setDataClima] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState(null);

    const getClima = async () => {

        try {
            const response = await fetch(`${apiUrl}?q=${pais}&appid=${apiKey}`);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
              
            }
            
            const data = await response.json();
            // Actualiza el estado con los datos del clima obtenidos
            setDataClima(data);
            setIsLoading(true)
          } catch (error) {
            // Captura y muestra cualquier error que ocurra durante la solicitud o el procesamiento
            // console.error('Error fetching data:', error);
            setIsLoading(false)
            // Actualiza el estado con un mensaje de error o maneja el error de manera adecuada
            setDataClima(null); // O maneja el error de otra manera según tus necesidades
          }
    }

    useEffect(() => {
        getClima()
    }, [pais])

    return {
        dataClima,
        isLoading,
        error
    }


}
