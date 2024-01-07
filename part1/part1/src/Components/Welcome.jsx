import { useState, useEffect } from "react";

export default function Welcome(props){
    
    // eslint-disable-next-line react/prop-types

    const[ counter,setCounter] = useState(0);
    // eslint-disable-next-line react/prop-types
    const [semaforo, setsemaforo] = useState(false)
     // eslint-disable-next-line react/prop-types
    const {message,name} = props;

    const contar =()=>{
        console.log('Entrando en la funcion de contar ');
        setCounter(counter + 1);
        setsemaforo(!semaforo)
    }; 
    console.log(semaforo)

    useEffect(() =>{
        console.log(semaforo);
    },[semaforo])

    return (
        <div>
            <h1> Hola ,{name}</h1>
            <h2>Contador de React con Hooks</h2>
            <h4>El numero de Contador es {counter}</h4>
            <button type="submit" onClick={contar}>
            <p> el semaforo esta en color {semaforo ? 'red' : 'green'}</p>
                Sumar contador
            </button>
            <p>{message}</p>
        </div>
    );
}