function Car(props){
    return <li>i am {props.brand} </li>
}

function Garage(){
    const cars = ['ford','bmw','audi','MClaren'];
    return (
        <>
            <h1>who cars in my garage?</h1>
            <ul>
                {cars.map((index,car) => <Car key={index} brand={car} />)}
            </ul>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />)