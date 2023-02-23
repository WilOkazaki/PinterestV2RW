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
import "../assets/styles/Pinterest.css";

function Pinterest() {
  useEffect(() => {
    const allIcon = document.querySelectorAll(".iconContenedor");

    function activarMenuActive() {
      allIcon.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allIcon.forEach((n) => n.addEventListener("click", activarMenuActive));
  }, []);

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
          <a href="#!">
            <IconButton>
              <MenuContenedor icon={<AddAPhoto />} />
            </IconButton>
          </a>
          <IconButton>
            <MenuContenedor icon={<FavoriteRounded />} />
          </IconButton>
          <div></div>
          <div>
            <IconButton>
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
          <Pin pinSize={"small"} />
          <Pin pinSize={"medium"} />
          <Pin pinSize={"large"} />
          <Pin pinSize={"small"} />
          <Pin pinSize={"medium"} />
          <Pin pinSize={"large"} />
        </div>
      </div>
    </div>
  );
}

export default Pinterest;
