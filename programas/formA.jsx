import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm(){
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`el nombre que ingresaste es: ${name}`)
        }

        return (
            <form onSubmit={handleSubmit}>
                <label>Ingresa tu nombre: 
                    <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                </label>
                <input type="submit" />
            </form>
        )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);



function MyFormT(){
    const [textarea, setTextArea] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`el nombre que ingresaste es: ${name}`)
        }

        return (
            <form onSubmit={handleSubmit}>
                <label>Ingresa tu nombre: 
                    <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                </label>
                <input type="submit" />
            </form>
        )
}

