import React, {useState} from "react";

export default function Teste(){
    const [counter, setCounter] = useState(0)

    function add(){
        setCounter(counter + 1)
    }

    function clear(){
        setCounter(0)
    }
    
    return(
        <>
            <h1>{counter}</h1>
            <button onClick={add}>Add</button>
            <button onClick={clear}>Clear</button>
        </>
    )
}