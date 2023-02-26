import React, { useState, useEffect } from "react";
import { FavoriteRounded } from "@mui/icons-material";
import MenuContenedor from "./MenuContenedor";
import { IconButton } from "@mui/material";
import axios from "axios";
function Pin({ pinSize }) {
  const [photos, setPhotos] = useState([]);
  const getPhotos = async () => {
    try {
      const response = await axios.get("http://localhost:3030/images");
      setPhotos(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const AddToFav = async (i) => {
    await axios
      .post(`http://localhost:3030/Favorite/${i}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      {photos.map((photo) => (
        <div className={`pin ${pinSize}`}>
          <div key={photo._id} className="Pin2">
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
                  onClick={() => AddToFav(photo._id)}
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

export default Pin;
