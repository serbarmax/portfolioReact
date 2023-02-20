import './Hero.css'
import fotoModelo from '../Assets/fotomia.png'

const  Hero = () => {
return (
<section>
    <div className="contenedorHero">
        <div className="showcaseRowTitle">
            <p className="hello">Hola, <span className="hello2">soy</span></p>
            <p className="texto-grande control">Max Barreira</p>
            <p className="designer">Diseñador y Desarrollador Web</p>
            <p className="textoNormal marginR20">Lidero una empresa dedicada al desarrollo web, ofrecemos desde exclusivos diseños de sitios web hasta desarrollo de aplicaciones web para negocios cualquiera sea su complejidad. Nuestros especialistas ayudarán a que su empresa pueda estar presente en Internet, desarrollando aplicaciones web que se adaptan completamente a las necesidades de su emprendimiento.</p>
            <p className="sigueme">SIGUEME EN </p>
            <div className="boximagenes">
                <a href="https://www.facebook.com" target="_blank">
                    <i className="bi bi-facebook icon-cuadro"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank">
                    <i className="bi bi-twitter icon-cuadro "></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                    <i className="bi bi-linkedin icon-cuadro"></i>
                </a>
                <a href="https://www.youtube.com" target="_blank">
                    <i className="bi bi-youtube icon-cuadro"></i>
                </a>
            </div>
            <div className="boxpuntajes">
                <div className="puntajes">
                    <p className="puntaje">20+</p>
                    <p className="textoNormal">AÑOS EXPERIENCIA</p>
                </div>
                <div className="puntajes">
                    <p className="puntaje">700+</p>
                    <p className="textoNormal">CLIENTES GLOBALES</p>
                </div>
                <div className="puntajes">
                    <p className="puntaje">30+</p>
                    <p className="textoNormal">PREMIOS OBTENIDOS</p>
                </div>
            </div>
        </div>
        <div className="showcaseImg">
            <img src={fotoModelo} alt="" className="fotomodelo" />
        </div>
    </div>
</section>
);
}

export default Hero;