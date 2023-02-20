import React, {useState} from "react";
import "./Menu.css"

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="Menu">
            <div className="nav_logo"> CODEA.APP </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href='#mainheader' className='colorTexto'>HOME</a>
                <a href='#servicios'   className='colorTexto'>SERVICIOS</a>
                <a href='#portfolio'    className='colorTexto'>PORTFOLIO</a>
                <a href='#experiencia'   className='colorTexto'>EXPERIENCIA</a>
                <a href='#testimonios'    className='colorTexto'>TESTIMONIOS</a>
                <a href='#contacto'        className='colorTexto'>CONTACTO</a>
                </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Menu
 