import React, { useState, useEffect } from "react";
import { FavoriteRounded } from "@mui/icons-material";
import MenuContenedor from "./MenuContenedor";
import { IconButton } from "@mui/material";

function Pin({ pinSize, imgSrc, name, link,  }) {
  

  /* useEffect(() => {
    //posible server
    fetch("http://localhost:8000/images/get")
      .then((res) => res.json())
      .then((res) => setImageList(res))
      .catch((err) => {
        console.error(err);
      });
  }, []); */

  return (
    <div className={`pin ${pinSize}`}>
     
        <div className="Pin2">
          <a href={link}>
          <img
            className="mainPic"
            src={imgSrc}
            alt="..."
          />
          </a>
         
        </div>
      

      <div className="contenidoPin">
        <h3>{name}</h3>
        <div className="busqueda">
          <IconButton className="favorito">
            <MenuContenedor icon={<FavoriteRounded />} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Pin;
