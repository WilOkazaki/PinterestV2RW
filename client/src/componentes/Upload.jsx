import React, { useState } from "react";
import "../assets/styles/App.css";
import axios from "axios";
import PropTypes from "prop-types";
function Upload() {
  const [file, setFile] = useState(null);
  const formdata = new FormData();
  const selectedHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const setHandler = () => {
    if (!file) {
      alert("No has subido ningún archivo");
      return;
    }
    formdata.append("file", file);
    axios
      .post("http://localhost:3030/upload", formdata)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));

    document.getElementById("fileinput").value = null;
    setFile(null);
  };

  return (
    <div className="containerUpload">
      <nav className="">
        <div className="container">
          <a href="" className="navbar-brand">
            <div className="logocontainer">
              <img
                className="pinlogo"
                src="https://i.ibb.co/GRXcWmx/pinterest.png "
                alt=""
              />
            </div>
          </a>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="card p-3">
          <div className="row">
            <div className="col-10">
              <input
                id="fileinput"
                onChange={selectedHandler}
                className="form-control"
                type="file"
                accept="image/*"
              />
            </div>
            <div className="col">
              <button
                onClick={setHandler}
                type="button"
                className="btn btn-primary col-12"
              >
                Subir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//PROPSTYPES
Upload.propTypes = {
  file: PropTypes.object,
  selectedHandler: PropTypes.func,
  setHandler: PropTypes.func,
};
export default Upload;
