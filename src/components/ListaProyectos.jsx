import React from 'react'
import CaroucelProyectos from './CaroucelProyectos'
// import Proyecto from './Proyecto'
const ListaProyectos = ({ proyectos }) => {

    console.log("mis proyectos desde lista--->",proyectos)



  return (
    <div className="container">
    {
        // proyectos.map((p,i)=>{
        //     return(
        //         <Proyecto p={p} key={i} />
        //     )
        // })
        <CaroucelProyectos />
    }
    
    </div>
  )
}

export default ListaProyectos