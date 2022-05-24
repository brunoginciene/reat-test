import React, {useState} from "react";

export default function Teste(){
    const [valor, setValor] = useState("")
    const [lista, setLista] = useState([])
    
    function getValue(event){
        setValor(event.target.value)
    }

    function addItem(){
        if (valor !== ""){
            setLista(arr => [...arr, valor])
        } else{
            alert("Insira um valor")
        }
        setValor("")
    }

    return(
        <>
            <input
                onChange={getValue} 
                placeholder="Write here"
                value={valor}
            >
            </input>
            <button onClick={addItem}>Add</button>
            <ul>
                {lista.map(item => <li>{item}</li>)}
            </ul>
            <h2>{lista.length}</h2>
        </>
    )
}