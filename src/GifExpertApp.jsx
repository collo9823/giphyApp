import React from "react";
import { useState } from "react";
import { AddCategories, GifGrid } from "./Components/index";



export const GifExpertApp=()=>{
    

    const [categories, setCategories] = useState(['programacion'])

    const onAddCategory=(value)=>{
        setCategories([value, ...categories.filter(val=>val!=value)])
    }

    return(
        <>
        <h1>Title</h1>

        <AddCategories 
        // setedCateg={setCategories}
        onNewCategory={value=>onAddCategory(value)}/>

        
            {categories.map((cat)=>(
                <GifGrid cat={cat} key={cat}/>
                ))
            }
        </>
    );
}