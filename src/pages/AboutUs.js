import './AboutUs.css'

const AboutUs = () => {
    return (
        <>
            <h2 className='row titulo'>Quienes somos?</h2>
            <div className="row">
                <div className="col s5 offset-s1">
                    <img className="foto-perfil" src="../../assets/foto-perfil.jpg" alt="foto de lautaro" />
                </div>
                <div className="col s5  ficha-personal">
                    <h3>Ficha personal</h3>
                    <table className="highlight table">
                        <thead>
                            <tr>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Nombre</td>
                                <td>Lautaro</td>

                            </tr>
                            <tr>
                                <td>Apellido</td>
                                <td>Tallarico</td>

                            </tr>
                            <tr>
                                <td>Ciudad</td>
                                <td>Rosario</td>

                            </tr>
                            <tr>
                                <td>Pais</td>
                                <td>Argentina</td>

                            </tr>
                        </tbody>
                    </table>
                    <p className='texto'>
                        Hola! Me presento soy Lautaro, contador publico y cajero de banco.
                        <br></br>
                        En la actualidad estoy cursando la carrera de desarrollo fullstack en coderhouse, siendo éste mi proyecto final del curso de React JS
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutUs