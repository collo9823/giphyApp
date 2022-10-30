import React from "react";

export const GifGridItem=({title, src, id})=>{

    return(
        <div className="card">
            <img src={src} alt={title} />
            <p>{title}</p>
        </div>
    )
}