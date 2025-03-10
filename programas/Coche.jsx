class Car extends React.Component{

     Sofia(props){
       return  <h1>sofia es {props} </h1>
    }

    render(){
        return (

        <>
            {this.Sofia({name: "osita dormilona"})}
        </>
        )
    }
}