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
        <p className="portfolioActividadReciente control">Actividad Reciente</p>
        <div className="portfolioBox">
            <div className="workImgBox hover1">
                <a href="http://lacabrera.com.ar" target="_blank">
                    <img src={work1} alt="" className="work-img img1" />
                </a>
            </div> 
            <div className="workImgBox hover2">
            <a href="http://abogadossantafe.com.ar/" target="_blank">
                <img src={work2} alt="" className="work-img" />
            </a>
            </div>
            <div className="workImgBox hover3">
            <a href="https://medicinaintegrativa.org.ar/" target="_blank">
                <img src={work3} alt="" className="work-img" />
            </a>
            </div>
            <div className="workImgBox hover4">
                <a href="https://www.isec.edu.ar/locucion/" target="_blank">
                    <img src={work4} alt="" className="work-img" />
                </a>
            </div>
            <div className="workImgBox hover5">
                <a href="https://www.viajobien.com/" target="_blank">
                    <img src={work5} alt="" className="work-img" />
                </a>
            </div>
            <div className="workImgBox hover6">
                <a href="https://www.hospitalitaliano.org.ar/" target="_blank">
                    <img src={work6} alt="" className="work-img" />
                </a>
            </div>
        </div>
        <div className="portfolioBtnDark  icon-cuadro"><a href="https://www.google.com.ar" target="_blank">Ver todos los trabajos<i className="bi bi-arrow-right-short flecha"></i></a></div>
    </div>
</section>
)
};

export default Portfolio
