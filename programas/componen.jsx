import { useState } from "react";
import ReactDOM from "react-dom/client";

function Form(){

    const [inputs, setInputs] = useState({});


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Datos del formulario: /n" + JSON.stringify(inputs, null, 2));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Ingresa tu nombre: 
                <input type="text" 
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}/>
            </label>
            <br />
            <label>Ingresa tu edad: 
                <input type="number" 
                name="age"
                value={inputs.age || ""}
                onChange={handleChange}/>
            </label>

            <input type="submit"/> 
        </form>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Form/>)