import React, { useState } from "react";
import "../assets/styles/App.css";

function Upload() {
  const [file, setFile] = useState(null);

  const selectedHandler = (e) => {
    setFile(e.target.file[0]);
  };

  const setHandler = () => {
    if (!file) {
      alert("No has subido ningún archivo");
      return;
    }

    const formdata = new formData();
    formdata.append("image", file);

    //Posible server
    fetch("http://localhost:8000/images/post", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.text())
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
      });

    document.getElementById("fileinput").value = null;
    setFile(null);
  };

  return (

    <div class="containerUpload">
          <nav className="">
            <div className="container">
              <a href="" className="navbar-brand">
                <div className="logocontainer">
                  <img  className="pinlogo" src="https://i.ibb.co/GRXcWmx/pinterest.png " alt="" />
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

export default Upload;
