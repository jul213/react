import { useState } from "react";
import ReactDOM from "react-dom/client";


function myForm(){
    const [name, setName] = useState("");

    return (
        <form>
            <label>enter your name: 
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
            </label>
        </form>
    )
}