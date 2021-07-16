/* State Array */
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


function Page() {
  const [items, setItems] = useState([])
  const agregarItem = ()=>{
     setItems([...items , {id:items.length, value: Math.random() * 100}]);
  }
  
    
  
  return (
    <div>
      <button onClick={agregarItem}> Agregar </button>
      {items.map(item =>(<p key={item.id}>{item.value}</p>))}
    </div>
  )
}

export default Page




ReactDOM.render(<Page />, document.querySelector('#root'));