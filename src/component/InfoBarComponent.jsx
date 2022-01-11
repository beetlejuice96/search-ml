import { Link } from "react-router-dom"

const InfoBarComponent = ({carrito,children,handleKeyUp}) => {
 
    return(
        <div className="bg-white py-4">
            <div>
                <input type="text"  onInput={handleKeyUp} placeholder="buscar por nombre"/>
            </div>

            <Link to={'/'}>Ir al Home</Link>
            Elementos del carrito:{carrito.length}
        </div>
    )
    
}

export default InfoBarComponent;