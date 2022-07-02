import React from 'react'

const Proyect = ( { p,img,key}) => {
  return (
   <>
   
   <div className="item-producto " key={key}>
            <div key={p.id} className="desc-producto">
              <h2>{p.titulo}</h2>
              <img src={img} width="100%" alt="" />
            </div>
            <div className=" img-producto">
              <p>{p.description}</p>
            </div>
          </div>
   </>
  )
}

export default Proyect