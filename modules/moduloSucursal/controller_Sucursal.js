let indexSucursalSeleccionado;
let sucursales = [];
 
export function addSucursal(){
    let numero_unico_sucursal, 
        nombre,
        calleYNum,
        colonia,
        GPS,
        telefono;

 
    numero_unico_sucursal = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    calleYNum = document.getElementById("txtCalleYNum").value;
    colonia = document.getElementById("txtColonia").value;
    GPS = document.getElementById("txtGPS").value;
    telefono = document.getElementById("txtTelefono").value;


    let sucursal = {};
    sucursal.numero_unico_sucursal =  "RF01";
    sucursal.nombre = nombre;
    sucursal.calleYNum = calleYNum;
    sucursal.colonia = colonia;
    sucursal.telefono = telefono;
    sucursal.GPS = GPS;
    sucursal.estatus = "Activo";
    sucursales.push(sucursal);
  //  clean();
    loadTabla();
}
 
export function loadTabla(){
    let cuerpo = "";
    sucursales.forEach(function (sucursal){
        let registro =  
                '<tr onclick="moduloSucursal.selectSucursal('+ sucursales.indexOf(sucursal) +');">'+
                '<td>' + sucursal.nombre + '</td>' +
                '<td>' + sucursal.calleYNum +  ' '+ sucursal.colonia +'</td>' +
                '<td>' + sucursal.telefono + '</td>' +
                '<td>' + sucursal.GPS + '</td>' +
                '<td>' + sucursal.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblSucursal").innerHTML = cuerpo;
}
 
export function selectSucursal(index){
    document.getElementById("txtNumUnico").value = sucursales[index].numero_unico_cliente;
    document.getElementById("txtNombre").value = sucursales[index].nombre ;
    document.getElementById("txtCalleYNum").value = sucursales[index].calleYNum;
    document.getElementById("txtColonia").value = sucursales[index].colonia;
    document.getElementById("txtTelefono").value = sucursales[index].telefono;
    document.getElementById("txtGPS").value = sucursales[index].GPS;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexSucursalSeleccionado = index;
}
 
 
fetch("modules/moduloSucursal/data_Sucursal.json")
        .then(function(response){return response.json();   })
        .then(function(jsondata){
                sucursales = jsondata;
                console.log(sucursales);
                loadTabla();});

export function clean(){
    document.getElementById("txtNumUnico").value = "";
    document.getElementById("txtNombre").value = "" ;
    document.getElementById("txtCalleYNum").value = "";
    document.getElementById("txtColonia").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtGPS").value = "";
    document.getElementById("txtHorario").value = "";
    document.getElementById("txtPagWeb").value = "";
    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexSucursalSeleccionado = 0;
}

export function deleteSucursal(){
    sucursales[indexSucursalSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();}

export function updateSucursal(){
    let numero_unico_cliente, 
        nombre,
        calleYNum,
        colonia,
        telefono,
        GPS,
        horario,
        pagWeb;
 
    numero_unico_cliente = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    calleYNum = document.getElementById("txtCalleYNum").value;
    colonia = document.getElementById("txtColonia").value;
    telefono = document.getElementById("txtTelefono").value;
    GPS = document.getElementById("txtGPS").value;
    horario = document.getElementById("txtHorario").value;
    pagWeb = document.getElementById("txtPagWeb").value;
    let sucursal = {};
    sucursal.numero_unico_cliente = "RF01";
    sucursal.nombre = nombre;
    sucursal.calleYNum = calleYNum;
    sucursal.Colonia = colonia;
    sucursal.telefono = telefono;
    sucursal.horario = horario;
    sucursal.GPS = GPS;
    sucursal.pagWeb = pagWeb;
    sucursal.estatus = "Activo";
    sucursales[indexSucursalSeleccionado] = sucursal;
    clean();
    loadTabla();
}

export function searchSucursal(){
    let filtro = document.getElementById("txtBusquedaSucursal").value;
    let resultados = sucursales.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function(sucursal){
        let registro =  
                '<tr onclick="moduloSucursal.selectSucursal('+ sucursales.indexOf(sucursal) +');">'+
                '<td>' + sucursal.nombre + '</td>' +
                '<td>' + sucursal.calleYNum +  ' '+ sucursal.colonia +'</td>' +
                '<td>' + sucursal.GPS + '</td>' +
                '<td>' + sucursal.telefono + '</td>' +
                '<td>' + sucursal.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblSucursal").innerHTML = cuerpo;
}