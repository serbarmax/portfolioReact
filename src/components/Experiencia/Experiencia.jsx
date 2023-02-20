import './Experiencia.css'

const  Experiencia = () => {
return (

<section>
    <a name="experiencia"></a>

    <div className="divisor"></div>
    <div className="divisor divisorOculto"></div>

    <div className="mainExperiencia">
        <div className="contenedorTitulo">
            <p className="titulosRojos">AÑOS DE EXPERIENCIA</p>
            <p className="textogrande control">Resumen</p> 
        </div>
        <div className="experienciaContenedor">
            <div className="columna">
                <div className="experienciaTitulo3">
                    <p className="experienciaTxtMedio">Experiencia Laboral</p>
                    <p className="experienciaNumeros numeros">2010 - 2022</p>
                </div>
                <div className="expCajaLineaVertical">
                    <div className="cajaExperienciaBox " >
                        <p className="experiencia-titulo">Programador Web</p>
                        <p className="academia">Banco Santander (<spam className="numeros">2010-2019</spam>)</p>
                        <div className="textoNormal margenSuperiorExperiencia">Escribí el código una página web con la capacidad de recibir a más de un millón de usuarios diariamente.</div>
                    </div>
                </div>
                <div className="expCajaLineaVertical">
                    <div className="cajaExperienciaBox ">
                        <p className="experiencia-titulo">Programador Web</p>
                        <p className="academia">Banco Hipotecario (<spam className="numeros">2010-2019</spam>)</p>
                        <p className="textoNormal margenSuperiorExperiencia">Responsable de crear un comparador de tarjetas de crédito que elevó las ventas de producto en un <spam className="numeros">15</spam>%</p>
                    </div>
                </div>
                <div className="expCajaLineaVertical">
                    <div className="cajaExperienciaBox ">
                        <p className="experiencia-titulo">Programador Web</p>
                        <p className="academia">Banco Santander(<spam className="numeros">2010-2019</spam>)</p>
                        <p className="textoNormal margenSuperiorExperiencia">Desarrollé una aplicación bancaria especializada en seguros de auto la cual recibió una calificación de <spam className="numeros">4.8 estrellas</spam></p>
                    </div>
                </div>
            </div>
            <div className="columna">
                <div className="experienciaTitulo3">
                    <p className="experienciaTxtMedio">Calidad en Educación</p>
                    <p className="experienciaNumeros numeros">2010 - 2022</p>
                </div>
                <div className="expCajaLineaVertical">
                    <div className="cajaExperienciaBox">
                        <p className="experiencia-titulo">Desarrollo Web</p>
                        <p className="academia">Tecnologías de Desarrollo (<spam className="numeros">2010-2019</spam>)</p>
                        <p className="textoNormal margenSuperiorExperiencia">Dominio de PHP, MySQL, HTML<spam className="numeros">5</spam>, CSS<spam className="numeros">3</spam> y Javascript. Conocimiento de las bases de datos MySQL. Capacidad de liderazgo y trabajo en equipo</p>
                    </div>
                </div>
                <div className="expCajaLineaVertical">
                    <div className="cajaExperienciaBox ">
                        <p className="experiencia-titulo">Marketing de contenidos</p>
                        <p className="academia">UTN Buenos Aires (<spam className="numeros">2010-2019</spam>)</p>
                        <p className="textoNormal margenSuperiorExperiencia">Marketing de contenidos y estrategias prácticas para la adquisición de potenciales clientes, sobre Rdes sociales, blogs, newsletters y otros canales.</p>
                    </div>
                </div>
                <div className="expCajaLineaVertical">
                    <div className="cajaExperienciaBox">
                        <p className="experiencia-titulo">Optimización motores de búsqueda</p>
                        <p className="academia">Coderhouse (<spam className="numeros">2010-2019</spam>)</p>
                        <p className="textoNormal margenSuperiorExperiencia">Optimización de SEO para lograr un mejor posicionamiento orgánico de las páginas, con las que la audiencia busca los productos y servicios.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
)
}

export default Experiencia;