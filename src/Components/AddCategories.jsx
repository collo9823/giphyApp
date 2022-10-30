import React from "react";
import { useState } from "react";

export const AddCategories=({onNewCategory})=>{

    const [inputValor, setInputValor]=useState('');

    const onChangeInput=(event)=>{
        setInputValor(event.target.value);
    }
    console.log(inputValor)
    
    const onSubmitI=(event)=>{
        event.preventDefault();
        if(inputValor.trim().length<=1)return;
        // setedCateg(cat=>[inputValor, ...cat])
        onNewCategory(inputValor.trim())
        setInputValor('');        
    }
    return (

        <form onSubmit={(event)=>onSubmitI(event)}>
            <input type="text" 
            placeholder="Buscar Gifs"
            value={inputValor}
            onChange={onChangeInput}
            />
        </form>
    )
}