

const Contact = () => {
    return (
        <>
            <div class="row">
                <h4 class="col s8 offset-s2">Ingresá tus datos y nos comunicaremos a la brevedad</h4>
                <form class="col s8 offset-s2">
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="first_name" type="text" class="validate" />
                            <label for="first_name">Nombre</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="last_name" type="text" class="validate" />
                            <label for="last_name">Apellido</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="phone" type="number" class="validate" />
                            <label for="phone">Celular</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="email" type="email" class="validate" />
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Enviar
                        <i class="material-icons right">send</i>
                    </button>
                </form>
            </div>
        </>
    )
}

export default Contact