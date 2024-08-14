let indexUsuarioSeleccionado;
let usuarios = [];
 
export function addUsuario(){
    let numero_unico_usuario, 
        nombres,
        apellidos,
        edad,
        telefono,
        calleYCol,
        CP,
        correo;

 
    numero_unico_usuario = document.getElementById("txtNumUnico").value;
    nombres = document.getElementById("txtNombre").value;
    apellidos = document.getElementById("txtApellido").value;
    edad = document.getElementById("txtEdad").value;
    telefono = document.getElementById("txtTelefono").value;
    calleYCol = document.getElementById("txtCalleyCol").value;
    CP = document.getElementById("txtCP").value;
    correo = document.getElementById("txtCorreo").value;


    let usuario = {};
    usuario.numero_unico_bebida =  "RF01";
    usuario.nombres = nombres;
    usuario.apellidos = apellidos;
    usuario.edad = edad;
    usuario.telefono = telefono;
    usuario.calleYCol = calleYCol;
    usuario.CP = CP;
    usuario.correo = correo;
    usuario.estatus = "Activo";
    usuarios.push(usuario);
  //  clean();
    loadTabla();
}
 
export function loadTabla(){
    let cuerpo = "";
    usuarios.forEach(function (usuario){
        let registro =  
                '<tr onclick="moduloUsuario.selectUsuario('+ usuarios.indexOf(usuario) +');">'+
                '<td>' + usuario.nombres +  ' '+ usuario.apellidos +'</td>' +
                '<td>' + usuario.edad + '</td>' +
                '<td>' + usuario.telefono + '</td>' +
                '<td>' + usuario.calleYCol +  ' '+ usuario.CP +'</td>' +
                '<td>' + usuario.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblUsuarios").innerHTML = cuerpo;
}
 
export function selectUsuario(index){
    document.getElementById("txtNumUnico").value = usuarios[index].numero_unico_usuario;
    document.getElementById("txtNombre").value = usuarios[index].nombres;
    document.getElementById("txtApellido").value = usuarios[index].apellidos;
    document.getElementById("txtEdad").value = usuarios[index].edad;
    document.getElementById("txtTelefono").value = usuarios[index].telefono;
    document.getElementById("txtCalleyCol").value = usuarios[index].calleYCol;
    document.getElementById("txtCP").value = usuarios[index].CP;
    document.getElementById("txtCorreo").value = usuarios[index].correo;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexUsuarioSeleccionado = index;
}
 
 
fetch("modules/moduloUsuario/data_Usuario.json")
        .then(function(response){return response.json();   })
        .then(function(jsondata){
                usuarios = jsondata;
                console.log(usuarios);
                loadTabla();});

export function clean(){
    document.getElementById("txtNumUnico").value = "";
    document.getElementById("txtNombre").value = "" ;
    document.getElementById("txtApellido").value = "" ;
    document.getElementById("txtEdad").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtCalleyCol").value = "";
    document.getElementById("txtCP").value = "";
    document.getElementById("txtCorreo").value = "";
    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexUsuarioSeleccionado = 0;
}

export function deleteUsuario(){
    usuarios[indexUsuarioSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();}

export function updateUsuario(){
    let numero_unico_usuario, 
        nombres,
        apellidos,
        edad,
        telefono,
        calleYCol,
        CP,
        correo;
 
    numero_unico_usuario = document.getElementById("txtNumUnico").value;
    nombres = document.getElementById("txtNombre").value;
    apellidos = document.getElementById("txtApellido").value;
    edad = document.getElementById("txtEdad").value;
    telefono = document.getElementById("txtTelefono").value;
    calleYCol = document.getElementById("txtCalleyCol").value;
    CP = document.getElementById("txtCP").value;
    correo = document.getElementById("txtCorreo").value;

    let usuario = {};
    usuario.numero_unico_usuario = "RF01";
    usuario.nombres = nombres;
    usuario.apellidos = apellidos;
    usuario.edad = edad;
    usuario.telefono = telefono;
    usuario.calleYCol = calleYCol;
    usuario.CP = CP;
    usuario.correo = correo;
    usuario.estatus = "Activo";
    usuarios[indexUsuarioSeleccionado] = usuario;
    clean();
    loadTabla();
}

export function searchUsuario(){
    let filtro = document.getElementById("txtBusquedaUsuario").value;
    let resultados = usuarios.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function(usuario){
        let registro =  
                '<tr onclick="moduloUsuario.selectUsuario('+ usuarios.indexOf(usuario) +');">'+
                '<td>' + usuario.nombres +'</td>' +
                '<td>' + usuario.apellidos + '</td>' +
                '<td>' + usuario.edad + '</td>' +
                '<td>' + usuario.calleYCol + '</td>' +
                '<td>' + usuario.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblUsuarios").innerHTML = cuerpo;
}
