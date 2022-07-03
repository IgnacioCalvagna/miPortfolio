import React from 'react'

const Proyecto = ( {p,key} ) => {
  return (
    <div key={key} >


        <h2>{p.titulo}</h2>
        <img src={p.img } width='15%' alt="..." />

    </div>
  )
}

export default Proyecto