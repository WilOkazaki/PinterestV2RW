import { useEffect, useState } from "react";
import {
  AddAPhoto,
  ExitToAppRounded,
  FavoriteRounded,
  Person,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import MenuContenedor from "./MenuContenedor";
import Pin from "./Pin";
import Favorite from "./Favorite";
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
  const [toogle, setToogle] = useState(true);
  const img = () => {
    setToogle(true);
  };
  const fav = () => {
    setToogle(false);
  };
  const handleLogout = async () => {
    try {
      localStorage.setItem("token", null);
      window.location.href = "/";
      console.log("Token eliminado");
    } catch (error) {
      console.error(error);
    }
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
            <IconButton onClick={img}>
              <MenuContenedor icon={<Person />} />
            </IconButton>
          </div>
          <IconButton onClick={handPhoto}>
            <MenuContenedor icon={<AddAPhoto />} />
          </IconButton>
          <IconButton onClick={fav}>
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
        {/* AQUI HACEMOS CONDICIONAL */}
        <div className="contenedorMain">
          {toogle ? (
            <Pin pinSize={"medium"} />
          ) : (
            <Favorite pinSize={"medium"} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Pinterest;
