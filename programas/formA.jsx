import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm(){
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`el nombre que ingresaste es: `)
        }
}