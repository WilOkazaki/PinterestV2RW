import React, { useState, useEffect } from "react";
import { FavoriteRounded } from "@mui/icons-material";
import MenuContenedor from "./MenuContenedor";
import { IconButton } from "@mui/material";
import axios from "axios";
function Favorite({ pinSize }) {
  const [photosF, setPhotosF] = useState([]);
  const getphotosF = async () => {
    try {
      const response = await axios.get("http://localhost:3030/imgFav");
      setPhotosF(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const RemoveToFav = async (i) => {
    await axios
      .delete(`http://localhost:3030/Favorite/${i}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getphotosF();
  }, []);

  return (
    <>
      {photosF.map((photo) => (
        <div key={photo._id} className={`pin ${pinSize}`}>
          <div className="Pin2">
            <img
              className="mainPic"
              src={`http://localhost:3030${photo.path}`}
              alt={photo.titulo}
            />
            <div className="contenidoPin">
              <h3>{photo.titulo}</h3>
              <div className="busqueda">
                <IconButton
                  className="favorito"
                  onClick={() => {
                    RemoveToFav(photo._id);
                  }}
                >
                  <MenuContenedor icon={<FavoriteRounded />} />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Favorite;
