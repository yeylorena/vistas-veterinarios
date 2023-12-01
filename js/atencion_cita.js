function direccion_sub_menu(titulo) {
    sub_titulo.innerHTML = titulo
}

/*
txtPropietario
txtTelefono
txtEmail
txtDireccion
txtFecha
txtMascota
txtMotivo
txtError
txtDiagnostico
txtTratamiento
*/
function verificar() {
    let verificar = true
    if (txtMotivo.value.length <= 0) {
        txtMotivo.classList.add("advertencia")
        verificar = false
    } else {
        txtMotivo.classList.remove("advertencia")
        verificar = true
    }
    if (txtDiagnostico.value.length <= 0) {
        txtDiagnostico.classList.add("advertencia")
        verificar = false
    } else {
        txtDiagnostico.classList.remove("advertencia")
        verificar = true
    }
    if (txtTratamiento.value.length <= 0) {
        txtTratamiento.classList.add("advertencia")
        verificar = false
    } else {
        txtTratamiento.classList.remove("advertencia")
        verificar = true
    }
    if (verificar) {
        txtError.innerHTML = ""
        Swal.fire({
            title: "Esta seguro de guardar?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Guardar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Guardado con éxito!",
                    icon: "success"
                }).then((result) => {
                    formulario.submit()
                });
            }
        });
        return false
    } else {
        txtError.innerHTML = "Todos los campos son obligatorios"
        return false
    }
}

function cambiarPestaña(nombre) {
    document.getElementById('profile-tab').classList.remove('active')
    document.getElementById('bordered-profile').classList.remove('active')
    document.getElementById('bordered-profile').classList.remove('show')
    document.getElementById('home-tab').classList.add('active')
    document.getElementById('bordered-home').classList.add('active')
    document.getElementById('bordered-home').classList.add('show')
    direccion_sub_menu('Consulta')
    txtMascota.placeholder = nombre
}