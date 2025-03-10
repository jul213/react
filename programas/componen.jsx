class kizi extends React.Component{
    render(){
        return <h1>buenas soy kizi le deseo un buen dia</h1>
    }
}


class lol extends React.Component{
    render(){
        return(
        <div>
            <h1>desde la clase lol invoco a la clase kizi: </h1>
            <Kizi />
        </div>
        )
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<lol />);