function Pepe(props){
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
root.render(<Pepe cars={cars} />)



function Goal(props){
    const isGoal = props.isGoal
    return(
        <>
        {isGoal ? <MadeGoal /> : <MissedGoal/>}
        </>
    )
}

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<Goal isGoal={true} />)


function Car(props){
    return <li>yo soy un {props.brand} </li>
}

function Coleccion(){
    const cars = [
        {id: 1, brand: "FORD"},
        {id: 2, brand: "BMW"},
        {id: 3, brand: "AUDI"}
    ];

    return (
        <>
            <h1>quien esta en el garage? </h1>
            <ul>
                {cars.map((car) => <Car key={car.id} brand={car.brand} />}
            </ul>
        </>
    )
}

const root2 = ReactDOM.createRoot(document.getElementById("root"));
