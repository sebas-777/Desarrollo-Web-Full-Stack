import { useState } from "react";

export default function Welcome(props){
    
    // eslint-disable-next-line react/prop-types

    const[ counter,setCounter] = useState(0);
    // eslint-disable-next-line react/prop-types
    const {message,name} = props;
    return (
        <div>
            <h1> Hola ,{name}</h1>
            <h2>Contador de React con Hooks</h2>
            <h4>El numero de Contador es {counter}</h4>
            <button type="submit" onClick={() => setCounter(counter+1)}>
                Sumar contador
            </button>
            <p>{message}</p>
        </div>
    );
}