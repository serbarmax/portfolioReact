import './Portfolio.css'
import work1 from '../Assets/work1.jpg'
import work2 from '../Assets/work2.jpg'
import work3 from '../Assets/work3.jpg'
import work4 from '../Assets/work4.jpg'
import work5 from '../Assets/work5.jpg'
import work6 from '../Assets/work6.jpg'

const  Portfolio=() =>{
    return (

<section>
    <a name="portfolio"></a>
    <div className="divisor"></div>
    <div className="divisor divisorOculto"></div>
    <div className="portfolio">
        <p className="titulosRojos">ULTIMOS DISEÑOS</p>
        <p className="portfolioActividadReciente">Actividad Reciente</p>
        <div className="portfolioBox">
            <div className="workImgBox">
                <div className="textoImagen">
                    <a href="http://lacabrera.com.ar" target="_blank">RESTAURANT LA CABRERA</a>
                </div>
                <img src={work1} alt="" className="work-img" />
            </div>
            <div className="workImgBox">
                <img src={work2} alt="" className="work-img" />
            </div>
            <div className="workImgBox">
                <img src={work3} alt="" className="work-img" />
            </div>
            <div className="workImgBox">
                <img src={work4} alt="" className="work-img" />
            </div>
            <div className="workImgBox">
                <img src={work5} alt="" className="work-img" />
            </div>
            <div className="workImgBox">
                <img src={work6} alt="" className="work-img" />
            </div>
        </div>
        <div className="portfolioBtnDark  icon-cuadro"><a href="https://www.google.com.ar" target="_blank">Ver todos los trabajos<i className="bi bi-arrow-right-short flecha"></i></a></div>
    </div>
</section>
)
};

export default Portfolio
