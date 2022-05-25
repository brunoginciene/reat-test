import React, {useState} from "react";

export default function Teste(){
    const [valor, setValor] = useState("")
    const [lista, setLista] = useState([])
    
    function getValue(event){
        setValor(event.target.value)
    }

    function addItem(){
        if (valor !== ""){
            setLista(arr => [...arr, {valor, id: Date.now()}])
        } else{
            alert("Insira um valor")
        }
        setValor("")
    }

    function removeItem(event){
        console.log(lista.map(i =>(i.id != event.target.id)))
    }

    return(
        <>
            <h2>Total de items: {lista.length}</h2>
            <input
                onChange={getValue} 
                placeholder="Write here"
                value={valor}
            >
            </input>
            <button onClick={addItem}>Add</button>
            <ul>
                {lista.map(item => 
                    <li key={item.id}>
                        {item.valor}
                        <button id={item.id} onClick={removeItem}>
                            Delete
                        </button>
                    </li>
                )}
            </ul>
            
        </>
    )
}