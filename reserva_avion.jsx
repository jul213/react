import "./reserva_avion.css"
import { useState } from "react"
import { useEffect } from "react"

function aeropuerto(){
    const [abierto, setAbierto] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        console.log("bienvenidos al aeropuerto barajas")
        const verificarHorario = () => {
            const ahora = new Date();
            const hora = ahora.getHours();
            if (hora > 6 && hora < 24){
                setAbierto(true)
            } else{
                setAbierto(false)
            }
        }
        verificarHorario()
    })
}