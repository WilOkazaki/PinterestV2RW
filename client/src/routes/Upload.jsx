import React, {useState, } from 'react'


function Upload() {

    const [file, setFile] = useState(null)

    const selectedHandler = e =>{
        setFile(e.target.file[0])
    }

    const setHandler = () =>{
       if(!file){
        alert("No has subido ningun archivo")
        return
       }
    

    const formdata= new formData ()
    formdata.append('image', file)

    //Posible server 
    fetch('http://localhost:8000/images/post',{
        method : 'POST',
        body: formdata
    })
    .then(res => res.text())
    .then(res => console.log(res))
    .catch(err => {
        console.error(err)
    })

    document.getElementById("fileinput").value = null
    setFile(null)

    }

  return (
    <div>
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container'>
                <a href='' className='navbar-brand'>Image App</a>
            </div>
        </nav>

        <div className='container mt-5'>
            <div className='card p-3'>
                <div className='row'>
                    <div className='col-10'>
                        <input id='fileinput' onChange={selectedHandler} className='form-control' type="file" />
                    </div>
                    <div className='col-2'>
                        <button onClick={setHandler} type='button' className='btn btn-primary col-12' >Subir</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Upload