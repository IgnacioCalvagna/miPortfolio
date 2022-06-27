// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/css/idiomas.css'
import ingles from '../assets/img/idiomas/ingles.png'
import esp from '../assets/img/idiomas/espaniol.png'
const Idiomas = () => {
  return (
    <>
         <div className="col-4 flags">
          {/* <h3>Cambiar de idioma</h3> */}
           
           
         <img src={esp} width="55%" alt="" />
           <button className="btn "><img src={ingles} width="25%" alt="" /></button>
        </div>
    </>
  )
}

export default Idiomas