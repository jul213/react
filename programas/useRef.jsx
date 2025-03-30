import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";

function App(){
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");


    useEffect(() => {
        previousInputValue.current = inputValue
    }, [inputValue])


    return(
        <>
            <input type="text" 
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}/>
        </>
            <h2>el valor es: {inputValue}</h2>
             <h2>el valor previo es: {previousInputValue}</h2>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
