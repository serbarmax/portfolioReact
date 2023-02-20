import './Servicios.css'

const  Servicios=() => {

    return (
<section>
    <a name="servicios"></a>
    <div className="divisor"></div>
    <div className="divisorOculto"></div>
    <div className="mainServices">
        <p className="titulosRojos">MIS SERVICIOS</p>
        <p className="textogrande">Sectores de Actividad</p>
        <div className="cajasServicios">
            <div className="cajaServiciosBox">
                <i className="bi bi-cast pc iconosRojos"></i>
                <p className="serviciosTitulo">Website Design</p>
                <p className="textoNormal">Nuestro enfoque para el diseño de sitios web es crear un sitio web que fortalezca la marca de su empresa </p>
            </div>
            <div className="cajaServiciosBox">
                <i className="bi bi-window-desktop pc iconosRojos"></i>
                <p className="serviciosTitulo">WordPress websites</p>
                <p className="textoNormal">
                    Administre su sitio web utilizando el sistema de administración de contenido más popular de la web.</p>
            </div>
            <div className="cajaServiciosBox">
                <i className="bi bi-display pc iconosRojos"></i>
                <p className="serviciosTitulo">Performance & testing</p>
                <p className="textoNormal">Haga que su sitio web sea rápido, fácil de encontrar y llegue a la audiencia más amplia posible.</p>
            </div>
            <div className="cajaServiciosBox">
                <i className="bi bi-cast pc iconosRojos"></i>
                <p className="serviciosTitulo">Ecommerce</p>
                <p className="textoNormal">Integración de plataformas de comercio electrónico, pasarelas de pago, plantillas de productos personalizados y más.</p>
            </div>
            <div className="cajaServiciosBox">
                <i className="bi bi-window-desktop pc iconosRojos"></i>
                <p className="serviciosTitulo">Analytics</p>
                <p className="textoNormal">
                    Obtenga información sobre quién navega por su sitio para que pueda tomar decisiones comerciales más inteligentes.</p>
            </div>
            <div className="cajaServiciosBox">
                <i className="bi bi-display pc iconosRojos"></i>
                <p className="serviciosTitulo">Mentor</p>
                <p className="textoNormal">Realmente me preocupo por las personas y me encanta ayudar a otros diseñadores a trabajar en su oficio.</p>
            </div>
        </div>
    </div>
</section>
)
}
export default Servicios;