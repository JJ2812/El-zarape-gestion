let indexAlimentoSeleccionado;
let alimentos = [];
 
export function addAlimento(){
    let numero_unico_alimento, 
        nombre,
        precio,
        categoria,
        descripcion,
        URL;

 
    numero_unico_alimento = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    precio = document.getElementById("txtPrecio").value;
    categoria = document.getElementById("txtCat").value;
    descripcion = document.getElementById("txtDescrip").value;
    URL = document.getElementById("txtURL").value;


    let alimento = {};
    alimento.numero_unico_aliemento =  "RF01";
    alimento.nombre = nombre;
    alimento.precio = precio;
    alimento.categoria = categoria;
    alimento.descripcion = descripcion;
    alimento.URL = URL;
    alimento.estatus = "Activo";
    alimentos.push(alimento);
  //  clean();
    loadTabla();
}
 
export function loadTabla(){
    let cuerpo = "";
    alimentos.forEach(function (alimento){
        let registro =  
                '<tr onclick="moduloCatalogoAlimento.selectAlimento('+ alimentos.indexOf(alimento) +');">'+
                '<td>' + alimento.nombre + '</td>' +
                '<td>' + alimento.precio +  '</td>' +
                '<td>' + alimento.categoria + '</td>' +
                '<td>' + alimento.descripcion + '</td>' +
                '<td>' + alimento.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblAlimentos").innerHTML = cuerpo;
}
 
export function selectAlimento(index){
    document.getElementById("txtNumUnico").value = alimentos[index].numero_unico_alimento;
    document.getElementById("txtNombre").value = alimentos[index].nombre ;
    document.getElementById("txtPrecio").value = alimentos[index].precio;
    document.getElementById("txtCat").value = alimentos[index].categoria;
    document.getElementById("txtDescrip").value = alimentos[index].descripcion;
    document.getElementById("txtURL").value = alimentos[index].URL;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexAlimentoSeleccionado = index;
}
 
 
fetch("modules/moduloCatalogoAlimento/data_Alimento.json")
        .then(function(response){return response.json();   })
        .then(function(jsondata){
                alimentos = jsondata;
                console.log(alimentos);
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
    indexAlimentoSeleccionado = 0;
}

export function deleteAlimento(){
    bebidas[indexAlimentoSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();}

export function updateAlimento(){
    let numero_unico_alimento, 
        nombre,
        precio,
        categoria,
        descripcion,
        URL;
 
    numero_unico_alimento = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    precio = document.getElementById("txtPrecio").value;
    categoria = document.getElementById("txtCat").value;
    descripcion = document.getElementById("txtDescrip").value;
    URL = document.getElementById("txtURL").value;
    
    let alimento = {};
    alimento.numero_unico_alimento = "RF01";
    alimento.nombre = nombre;
    alimento.precio = precio;
    alimento.categoria = categoria;
    alimento.descripcion = descripcion;
    alimento.URL =  URL;
    alimento.estatus = "Activo";
    alimentos[indexBebidaSeleccionado] = alimento;
    clean();
    loadTabla();
}

export function searchAlimento(){
    let filtro = document.getElementById("txtBusquedaAlimento").value;
    let resultados = alimentos.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function(alimento){
        let registro =  
                '<tr onclick="moduloCatalogoAlimento.selectAlimento('+ alimentos.indexOf(alimento) +');">'+
                '<td>' + alimento.nombre + '</td>' +
                '<td>' + alimento.categoria + '</td>' +
                '<td>' + alimento.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblAlimentos").innerHTML = cuerpo;
}
