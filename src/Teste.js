import React, {useState} from "react";

export default function Teste(){
    const [valor, setValor] = useState("")
    //const [lista, setLista] = useState([])
    
    function getValue(event){
        setValor(event.target.value)
    }

    function addItem(){
        alert(valor)
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
                <li>
                    Item 1
                </li>
            </ul>
        </>
    )
}