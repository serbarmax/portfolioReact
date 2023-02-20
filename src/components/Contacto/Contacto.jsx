import './Contacto.css'

const  Contacto = () => {
return (

<section>
    <a name="contacto"></a>
    <div className="divisor"></div>
    <div className="divisor divisorOculto"></div>
    <div className="contacto">
        <div>
            <div className="contactoTitulos">
                <p className="titulosRojos">CONTACTO</p>
                <p className="textogrande control">Contactesé conmigo</p>
            </div>
        </div>
        
        <div className="contactoContenedorTotal">
        {/* ----------------------------- ZONA IZQUIERDA DEL FORM --------------------- */}
            <div className="contenedorDatos">
                <div className="contactoDatos">
                    <div className="contactoIcon">
                        <i className="bi bi-map frm-icon"></i>
                    </div>
                    <p className="contactoTexto">Tejeiro Martínez <span className="numeros">558</span> - E.R. - Argentina</p>
                </div>
                <div className="contactoDatos">
                    <div className="contactoIcon">
                        <i className="bi bi-telephone  frm-icon"></i>
                    </div>
                    <p className="contactoTexto">+<span className="numeros">54 9 3435126769</span></p>
                </div>
                <div className="contactoDatos">
                    <div className="contactoIcon">
                        <i className="bi bi-envelope frm-icon"></i>
                    </div>
                    <p className="contactoTexto"> webdesign@maximodesigner.com </p>
                </div>
                <div className="contactoDatosFinal">
                    <div className="contactoIcon">
                        <i className="bi bi-check2-circle frm-icon"></i>
                    </div>
                    <p className="contactoTexto">Freelance Disponible</p>
                </div>
            </div>
        {/* ----------------------------- ZONA DERECHA DEL FORM ----------------------> */}
            <div className="contenedorForm">
                <form action="https://formsubmit.co/18eee1a7bdaf9c1dde1b948d803e4c72" method="post" >
                    <div className="contenedorGrupoCampos">
                        <input type="text"   name="nombre" required  size="40"   placeholder="* Ingrese su nombre y apellido" className="nombre" />
                        <input type="text"   name="telefono" size="40"           placeholder="Ingrese su teléfono"           className="telefono" />
                        <input type="email"  name="email"  required  size="40"   placeholder="* Ingrese su correo"          className="email" /> 
                        <input type="text"   name="asunto" required  size="40"   placeholder="* Ingrese asunto"            className="asunto" />
                        <textarea name="comentario" cols="40" required rows="14" placeholder="* Ingrese su mensaje"       className="comentario" />
                    </div>
                    <input type="hidden" name="_subject" value="Correo desde mi Porfolio" />
                    <input type="hidden" name="_next"    value="https://portfolio-react-six-rust.vercel.app/" />
                    <input type="hidden" name="_catpcha" value="false" />
                    <div className="contactoEnviar">
                        <button type="submit" className="btn btn-enviar  icon-cuadro ">
                        <span className="fuenteEnviar"> Enviar Mensaje</span> <i className="bi bi-send"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
)
}

export default Contacto;