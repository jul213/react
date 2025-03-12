function pepe(props){
    const cars = props.cars;
    return (
        <>
            <h1>GARAGE</h1>
            {cars.length > 0 &&
            <h2>
                tienes los siguientes coches {cars.length} en tu garage
            </h2>
            }
        </>
    )
}

const cars = ["ford", "bmw", "audi"];
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<pepe cars={cars} />)