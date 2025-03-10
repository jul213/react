class Hola extends React.Component{

    constructor(){
        super();
        this.state={color: "blue"}
    }

    render(){
        return <h2>el hola es de color {this.state.color} </h2>
    }
    
}