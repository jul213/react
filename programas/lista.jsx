function Car(props){
    return <li>i am {props.brand} </li>
}

function Garage(){
    const cars = ['ford','bmw','audi','MClaren'];
    return (
        <>
            <h1>who cars in my garage?</h1>
            <ul>
                {cars.map((car) => <Car brand={car} />)}
            </ul>
        </>
    )
}