import { useEffect, useState } from "react";
import Data from "./Data";
import {
  AddAPhoto,
  ExitToAppRounded,
  FavoriteRounded,
  Person,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import MenuContenedor from "./MenuContenedor";
import Pin from "./Pin";
import "../assets/styles/Pinterest.css";
import axios from "axios";

function Pinterest() {
  useEffect(() => {
    const allIcon = document.querySelectorAll(".iconContenedor");

    function activarMenuActive() {
      allIcon.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allIcon.forEach((n) => n.addEventListener("click", activarMenuActive));
  }, []);

  const handleLogout = async () => {
    window.location.href = "/";
    /*  try {
      // Llamar a la ruta /logout en el servidor para eliminar el token
      await axios.post("http://localhost:3030/logout");
      // Redirigir al usuario a la página de inicio de sesión
      console.log("Token eliminado");
    } catch (error) {
      console.error(error);
    } */
  };
  const handPhoto = () => {
    window.location.href = "/upload";
  };

  return (
    <div className="Pinterest">
      <div className="contenedorMenu">
        <img
          src="https://i.ibb.co/GRXcWmx/pinterest.png"
          alt=""
          className="logo"
        />

        <div className="subMenu">
          <div>
            <IconButton>
              <MenuContenedor icon={<Person />} />
            </IconButton>
          </div>
          <IconButton onClick={handPhoto}>
            <MenuContenedor icon={<AddAPhoto />} />
          </IconButton>
          <IconButton>
            <MenuContenedor icon={<FavoriteRounded />} />
          </IconButton>
          <div></div>
          <div>
            <IconButton onClick={handleLogout}>
              <MenuContenedor icon={<ExitToAppRounded />} />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="buscadorBox">
          <input type="text" placeholder="Buscador.. " />
          <div className="buscador">
            <img
              src="https://i.ibb.co/wh1NVxp/circulo-de-flecha.png"
              alt=""
              className="flecha"
            />
          </div>
        </div>

        <div className="contenedorMain">

          {
            Data && Data.map((data) => 
            <Pin 
            key={data.id}
            pinSize={data.size}
            imgSrc={data.imgSrc}
            name={data.name}
            link={data.link}
             />)
          }


        
        </div>
      </div>
    </div>
  );
}

export default Pinterest;
