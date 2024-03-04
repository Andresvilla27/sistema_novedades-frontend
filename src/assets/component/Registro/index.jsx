import './index.css'

const Registro = () => {
    return (
        <>
            
            <form action="#" method="post" className="form-register">
                <h4 className="form-titulo">CREA UNA CUENTA</h4>
                <div className="contenedor-inputs">
                    <input type="text" id="nombre" name="nombre" placeholder="Nombre" className="input-48" required />
                    <input type="text" id="apellidos" name="apellidos" placeholder="Apellidos" className="input-48" required />
                    <input type="email" id="correo" name="correo" placeholder="Correo" className="input-100" required />
                    <input type="text" id="usuario" name="usuario" placeholder="Usuario" className="input-48" required />
                    <input type="password" id="clave" name="clave" placeholder="Contraseña" className="input-48" required />
                    <input type="text" id="telefono" name="telefono" placeholder="Teléfono" className="input-100" required />
                    <input type="submit" value="Registrar" className="btn-enviar" />
                    <p className="form-link">Ya tienes una cuenta?<a href="#">Ingresa aquí</a></p>
                </div>
            </form>
        </>
    )
}

export default Registro