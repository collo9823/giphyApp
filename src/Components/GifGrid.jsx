import React from "react";
import {GifGridItem} from './GifGridItem'
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid=({cat})=>{

    const {images, isLoading} = useFetchGifs(cat);


    return(
        <>
        <h3>{cat}</h3>

        {
            isLoading && ( <h2>Cargando...</h2>)
        }

        <div className="card-grid">

            {
                images.map((image)=>
                <GifGridItem
                key={image.id}
                {...image}
                />
                )
            }
        </div>
        </>
    )
}