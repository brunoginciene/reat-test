import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Getdata(){
    const [listaData, setListadata] = useState([])
    const url = "https://jsonplaceholder.typicode.com/users"

    useEffect(()=>{
        axios.get(url).then((response)=>{
            setListadata(arr => [...arr, response.data])
        })
    },[])

    console.log(listaData)
    
    
    return(
        <h2>Get data here: {listaData.length} </h2>
    )
}