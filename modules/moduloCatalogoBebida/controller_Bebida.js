let indexBebidaSeleccionado;
let bebidas = [];
 
export function addBebida(){
    let numero_unico_bebida, 
        nombre,
        precio,
        categoria,
        descripcion,
        URL;

 
    numero_unico_bebida = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    precio = document.getElementById("txtPrecio").value;
    categoria = document.getElementById("txtCat").value;
    descripcion = document.getElementById("txtDescrip").value;
    URL = document.getElementById("txtURL").value;


    let bebida = {};
    bebida.numero_unico_bebida =  "RF01";
    bebida.nombre = nombre;
    bebida.precio = precio;
    bebida.categoria = categoria;
    bebida.descripcion = descripcion;
    bebida.URL = URL;
    bebida.estatus = "Activo";
    bebidas.push(bebida);
  //  clean();
    loadTabla();
}
 
export function loadTabla(){
    let cuerpo = "";
    bebidas.forEach(function (bebida){
        let registro =  
                '<tr onclick="moduloCatalogoBebida.selectBebida('+ bebidas.indexOf(bebida) +');">'+
                '<td>' + bebida.nombre + '</td>' +
                '<td>' + bebida.precio + '</td>' +
                '<td>' + bebida.categoria + '</td>' +
                '<td>' + bebida.descripcion + '</td>' +
                '<td>' + bebida.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblBebidas").innerHTML = cuerpo;
}
 
export function selectBebida(index){
    document.getElementById("txtNumUnico").value = bebidas[index].numero_unico_bebida;
    document.getElementById("txtNombre").value = bebidas[index].nombre ;
    document.getElementById("txtPrecio").value = bebidas[index].precio;
    document.getElementById("txtCat").value = bebidas[index].categoria;
    document.getElementById("txtDescrip").value = bebidas[index].descripcion;
    document.getElementById("txtURL").value = bebidas[index].URL;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexBebidaSeleccionado = index;
}
 
 
fetch("modules/moduloCatalogoBebida/data_Bebida.json")
        .then(function(response){return response.json();   })
        .then(function(jsondata){
                bebidas = jsondata;
                console.log(bebidas);
                loadTabla();});

export function clean(){
    document.getElementById("txtNumUnico").value = "";
    document.getElementById("txtNombre").value = "" ;
    document.getElementById("txtPrecio").value = "";
    document.getElementById("txtCat").value = "";
    document.getElementById("txtDescrip").value = "";
    document.getElementById("txtURL").value = "";
    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexBebidaSeleccionado = 0;
}

export function deleteBebida(){
    bebidas[indexBebidaSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();}

export function updateBebida(){
    let numero_unico_bebida, 
        nombre,
        precio,
        categoria,
        descripcion,
        URL;
 
    numero_unico_bebida = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    precio = document.getElementById("txtPrecio").value;
    categoria = document.getElementById("txtCat").value;
    descripcion = document.getElementById("txtDescrip").value;
    URL = document.getElementById("txtURL").value;
    
    let bebida = {};
    bebida.numero_unico_bebida = "RF01";
    bebida.nombre = nombre;
    bebida.precio = precio;
    bebida.categoria = categoria;
    bebida.descripcion = descripcion;
    bebida.URL = URL;
    bebida.estatus = "Activo";
    bebidas[indexBebidaSeleccionado] = bebida;
    clean();
    loadTabla();
}

export function searchBebida(){
    let filtro = document.getElementById("txtBusquedaBebida").value;
    let resultados = bebidas.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function(bebida){
        let registro =  
                '<tr onclick="moduloCatalogoBebida.selectBebida('+ bebidas.indexOf(bebida) +');">'+
                '<td>' + bebida.nombre + '</td>' +
                '<td>' + bebida.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblBebidas").innerHTML = cuerpo;
}