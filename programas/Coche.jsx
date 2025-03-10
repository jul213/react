function Sofia(props){
    return  <h1>sofia es {props.name} </h1>
 }

class Car extends React.Component{

    render(){
        return (

           <Sofia name="osita" />
       
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

