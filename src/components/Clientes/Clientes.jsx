import './Clientes.css'
import clienteLogo1 from '../Assets/clientes-logo1.png'
import clienteLogo2 from '../Assets/clientes-logo2.png'
import clienteLogo3 from '../Assets/clientes-logo3.png'
import clienteLogo4 from '../Assets/clientes-logo4.png'
import clienteLogo5 from '../Assets/clientes-logo5.png'
import clienteLogo6 from '../Assets/clientes-logo6.png'
import clienteLogo7 from '../Assets/clientes-logo7.png'
import clienteLogo8 from '../Assets/clientes-logo8.png'

const  Clientes = () => {
return (
    <section>
        <a name="clientes"></a>
        <div className="divisor"></div>
        <div className="divisor divisorOculto"></div>
        <div className="clientes">
            <div className="clientesTitulos">
                <p className="titulosRojos">MEJORES CLIENTES</p>
                <p className="clienteSubtitulo control">Clientes Seleccionados</p>
            </div>
            <div className="contenedorClientes">
                <div className="clientes-box">
                    <a href="https://www.ciudaddetotoras.gob.ar" target="_blank">
                        <img src={clienteLogo1} alt="" className="clientesImg icon-cuadro" />
                    </a>
                </div>
                <div className="clientes-box">
                    <a href="https://www.facebook.com/Dasein.Estudio.DG/posts/2964256280269020/" target="_blank">
                        <img src={clienteLogo2} alt=""  className="clientesImg icon-cuadro" />
                    </a>
                </div>
                <div className="clientes-box">
                    <a href="https://www.facebook.com/profile.php?id=100069382821876" target="_blank">
                        <img src={clienteLogo3} alt=""  className="clientesImg icon-cuadro" />
                    </a>
                </div>
                <div className="clientes-box">
                    <a href="https://rinaudoehijos.com.ar/" target="_blank">
                        <img src={clienteLogo4} alt=""  className="clientesImg icon-cuadro" />
                    </a>
                </div>
                <div className="clientes-box">
                    <a href="https://www.odaia.ai/" target="_blank">
                        <img src={clienteLogo5} alt=""  className="clientesImg icon-cuadro" />
                    </a>
                </div>
                <div className="clientes-box">
                    <a href="https://www.energia-argentina.com.ar/" target="_blank">
                        <img src={clienteLogo6} alt=""  className="clientesImg icon-cuadro" />
                    </a>
                </div>
                <div className="clientes-box">
                    <a href="https://www.chicagoconstrucciones.com.ar/" target="_blank">
                        <img src={clienteLogo7} alt=""  className="clientesImg icon-cuadro"/>
                    </a>
                </div>
                <div className="clientes-box">
                    <a href="https://agropremiun.com.ar/" target="_blank">
                        <img src={clienteLogo8} alt=""  className="clientesImg icon-cuadro" />
                    </a>
                </div>
            </div>
        </div>
    </section>
)
}

export default Clientes;
