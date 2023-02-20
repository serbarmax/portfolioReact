import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'

export const Footer = () => {
  return (
<footer className="footer">
    <div  className="logoyTexto">
        <img src={logo} alt="MD " />
        <div className="logo">
            MAX DESIGN
        </div>
    </div>
    <div className="footer-contenedor-iconos">
        <a href="https://www.facebook.com" target="_blank"><i className="bi bi-facebook footerIcon icon-cuadro"></i></a>
        <a href="https://www.twitter.com" target="_blank"><i className="bi bi-twitter footerIcon icon-cuadro"></i></a>
        <a href="https://www.linkedin.com" target="_blank"><i className="bi bi-linkedin footerIcon icon-cuadro"></i></a>
        <a href="https://www.youtube.com" target="_blank"><i className="bi bi-youtube footerIcon icon-cuadro"></i></a>
        <a href="https://www.instagram.com" target="_blank"><i className="bi bi-instagram footerIcon icon-cuadro"></i></a>
        <a href="https://www.dribbble.com" target="_blank"><i className="bi bi-dribbble footerIcon icon-cuadro"></i></a>
    </div>
    <p className="textoCopyright">Max Design @ <span className="numeros">2023</span> Todos los Derechos Reservados</p>
</footer>   
)
}

export default Footer;