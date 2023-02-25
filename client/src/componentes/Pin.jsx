import React, { useState, useEffect } from "react";
import { FavoriteRounded } from "@mui/icons-material";
import MenuContenedor from "./MenuContenedor";
import { IconButton } from "@mui/material";

function Pin({ pinSize }) {
  const [imageList, setImageList] = useState([]);

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
      {imageList.map((image) => (
        //posible server
        <div key={image} className="Pin2">
          <img
            className="mainPic"
            src={"http://localhost:8000/" + image}
            alt="..."
          />
        </div>
      ))}

      <div className="contenidoPin">
        <h3>IMAGEN</h3>
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
