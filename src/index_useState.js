import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


function Page() {
  const [boton, setBoton] = useState(true)

  const handleBoton = ()=>{
    if(boton){
      setBoton(false)
    }else{
      setBoton(true)
    }
    
  }
    
  
  return (
    <div>
      <button onClick={handleBoton}> Habilitar </button>
      <button disabled={boton}> Hola </button>
    </div>
  )
}

export default Page




ReactDOM.render(<Page />, document.querySelector('#root'));