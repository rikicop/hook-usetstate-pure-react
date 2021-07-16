import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


function Page() {
  const [items, setItems] = useState({ contadorA: 0, contadorB: 0 })

  const sumarA = () => {
    setItems((items) => ({ ...items, contadorA: items.contadorA + 1 }))
  }

  const sumarB = () => {
    setItems((items) => ({ ...items, contadorB: items.contadorB + 1 }))
  }

  const malA = ()=>{
    setItems((items) => ({ contadorA: items.contadorA + 1 }))
  }




  return (
    <div>
      <button onClick={sumarA}> Sumar A </button>
      <p>{items.contadorA}</p>

      <button onClick={sumarB}> Sumar B </button>
      <p>{items.contadorB}</p>

      <button onClick={malA}> Sumar A </button>
      <p>{items.contadorA}</p>

    </div>
  )
}

export default Page




ReactDOM.render(<Page />, document.querySelector('#root'));