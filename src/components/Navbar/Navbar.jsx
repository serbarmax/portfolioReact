import './Navbar.css'
import imagenLogo from '../Assets/logo.png'
import pdf from '../misc/curriculumSergioBarreira3435126769.pdf'

const  Navbar=() => {
return (
    <header>
        <a name='mainHeader' href="#"></a>
        <nav className='navbar'>
            <div className='logoyTexto'>
                <img src={imagenLogo} alt='MD ' />
                <div className='logo'>
                    MAX DESIGN
                </div>
           </div>
           <ul>
                <li><a href='#mainheader' className='colorTexto'>HOME</a></li>
                <li><a href='#servicios'   className='colorTexto'>SERVICIOS</a></li>
                <li><a href='#portfolio'    className='colorTexto'>PORTFOLIO</a></li>
                <li><a href='#experiencia'   className='colorTexto'>EXPERIENCIA</a></li>
                <li><a href='#testimonios'    className='colorTexto'>TESTIMONIOS</a></li>
                <li><a href='#contacto'        className='colorTexto'>CONTACTO</a></li>
           </ul>
           <button className="btnDownload">
                <a href={pdf} target="_blank" className="link">DESCARGAR CV</a>
            </button>
            <button className="botonMenu"><i className="bi bi-list"></i></button>
        </nav>
    </header>
);
}
export default Navbar;