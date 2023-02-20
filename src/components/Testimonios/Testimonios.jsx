import './Testimonios.css'
import testimonio1 from '../Assets/testimonial1.jpg'
import testimonio2 from '../Assets/testimonial2.png'
import testimonio3 from '../Assets/testimonial3.jpg'

const  Testimonios = () => {
return (

<section>

    <a name="testimonios"></a>   

    <div className="divisor"></div>
    <div className="divisor divisorOculto"></div>
    <div className="testimonios">
        <div className="titulosRojos">TESTIMONIOS</div>
        <p className="testimoniosSubtitulo control">Los clientes dicen</p> 
        <div className="testimoniosContenedor">
            <div className="testimonios-box">
                <div className="margenAbajo">
                    <i className="bi bi-chat-right quote"></i>
                    <i className="bi bi-chat-right quote"></i>
                    <div className="estrellasContenedor">
                        <i className="bi bi-star-fill star"></i>
                        <i className="bi bi-star-fill star"></i>
                        <i className="bi bi-star-fill star"></i>
                        <i className="bi bi-star-fill star"></i>
                        <i className="bi bi-star-fill star"></i>
                    </div>
                </div>
                <div className="textoNormal">Estamos muy contentos con el trabajo realizado por Max Design con nuestra web y los servicios de mailing. Han superado ampliamente nuestras expectativas estamos creciendo a pasos agigantados.
                </div>
                <div className="imagenPersona">
                    <img src={testimonio1} className="imgTestimonio" alt="" />
                    <p className="nombrePersonaTestimonio"> Carolina Godoy </p>
                    <p className="textoChico">Emprende Business School</p>
                </div> 
            </div> 
            <div className="testimonios-box ocultame">
                <div className="margenAbajo">
                    <i className="bi bi-chat-right quote"></i>
                    <i className="bi bi-chat-right quote"></i>
                    <div className="estrellasContenedor">
                        <i className="bi bi-star-fill star"></i>
                        <i className="bi bi-star-fill star"></i>
                        <i className="bi bi-star-fill star"></i>
                        <i className="bi bi-star-fill star"></i>
                        <i className="bi bi-star-fill star"></i>
                    </div>
                </div>
                <div className="textoNormal">Me ha proporcionado el servicio que esperaba, con un precio que dista mucho de lo standard, y con una calidad, que nada tiene que envidiar. El trato es muy profesional y muy eficaz. Lo recomiendo.
                </div>
                <div className="imagenPersona">
                    <img src={testimonio2} className="imgTestimonio" alt="" />
                    <p className="nombrePersonaTestimonio"> Vanessa Muñoz </p>
                    <p className="textoChico">Sancor Seguros Marketing</p>
                </div> 
            </div> 
            <div className="testimonios-box seoculta">
                <div className="margenAbajo">
                    <i className="bi bi-chat-right quote"></i>
                    <i className="bi bi-chat-right quote"></i>
                    <div className="estrellasContenedor">
                        <i className="bi bi-star-fill star"></i>
                        <i className="bi bi-star-fill star"></i>
                        <i className="bi bi-star-fill star"></i>
                        <i className="bi bi-star-fill star"></i>
                        <i className="bi bi-star-fill star"></i>
                    </div>
                </div>
                <div className="textoNormal">El diseño se ajusta totalmente a lo que buscamos. Una imagen atractiva en un diseño funcional. Todo con una atención personalizada para lograr entender las necesidades de nuestra empresa. 
                </div>
                <div className="imagenPersona">
                    <img src={testimonio3} className="imgTestimonio" alt="" />
                    <p className="nombrePersonaTestimonio"> Eduardo Gutierrez </p>
                    <p className="textoChico">Bussines Manager and SEO</p>
                </div> 
            </div> 
        </div> 
    </div>
</section>
)
}
export default Testimonios;
