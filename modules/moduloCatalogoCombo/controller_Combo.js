let indexComboSeleccionado;
let combos = [];

export function addCombo(){
    let numero_unico_combo, 
        nombre,
        nombre_Alimento,
        nombre_Bebida,
        precio,
        URL,
        descripcion;

 
    numero_unico_combo = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    nombre_Alimento = document.getElementById("txtNomAlimento").value;
    nombre_Bebida = document.getElementById("txtNomBebida").value;
    precio = document.getElementById("txtPrecio").value;
    URL = document.getElementById("txtURL").value;
    descripcion= document.getElementById("txtDescrip").value;


    let combo = {};
    combo.numero_unico_combo =  "RF01";
    combo.nombre = nombre;
    combo.nombre_Alimento = nombre_Alimento;
    combo.nombre_Bebida = nombre_Bebida;
    combo.precio = precio;
    combo.URL = URL;
    combo.descripcion = descripcion;
    combo.estatus = "Activo";
    combos.push(combo);
  //  clean();
    loadTabla();
}
 
export function loadTabla(){
    let cuerpo = "";
    combos.forEach(function (combo){
        let registro =  
                '<tr onclick="moduloCatalogoCombo.selectCombo('+ combos.indexOf(combo) +');">'+
                '<td>' + combo.nombre + '</td>' +
                '<td>' + combo.precio + '</td>' +
                '<td>' + combo.descripcion + '</td>' +
                '<td>' + combo.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblCombos").innerHTML = cuerpo;
}
 
export function selectCombo(index){
    document.getElementById("txtNumUnico").value = combos[index].numero_unico_combo;
    document.getElementById("txtNombre").value = combos[index].nombre ;
    document.getElementById("txtNomAlimento").value = combos[index].nombre_Alimento;
    document.getElementById("txtNomBebida").value = combos[index].nombre_Bebida;
    document.getElementById("txtPrecio").value = combos[index].precio;
    document.getElementById("txtURL").value = combos[index].URL;
    document.getElementById("txtDescrip").value = combos[index].descripcion;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexComboSeleccionado = index;
}
 
 
fetch("modules/moduloCatalogoCombo/data_Combo.json")
        .then(function(response){return response.json();   })
        .then(function(jsondata){
                combos = jsondata;
                console.log(combos);
                loadTabla();});

export function clean(){
    document.getElementById("txtNumUnico").value = "";
    document.getElementById("txtNombre").value = "" ;
    document.getElementById("txtNomAlimento").value = "";
    document.getElementById("txtNomBebida").value = "";
    document.getElementById("txtPrecio").value = "";
    document.getElementById("txtURL").value = "";
    document.getElementById("txtDescrip").value = "";
    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexComboSeleccionado = 0;
}

export function deleteCombo(){
    combos[indexComboSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();}

export function updateCombo(){
    let numero_unico_combo, 
        nombre,
        nombre_Alimento,
        nombre_Bebida,
        precio,
        URL,
        descripcion;
 
    numero_unico_combo = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    nombre_Alimento = document.getElementById("txtNomAlimento").value;
    nombre_Bebida = document.getElementById("txtNomBebida").value;
    precio = document.getElementById("txtPrecio").value;
    URL = document.getElementById("txtURL").value;
    descripcion = document.getElementById("txtDescrip").value;
    
    let combo = {};
    combo.numero_unico_combo = "RF01";
    combo.nombre = nombre;
    combo.nombre_Alimento = nombre_Alimento;
    combo.nombre_Bebida = nombre_Bebida;
    combo.precio = precio;
    combo.URL = URL;
    combo.descripcion = descripcion;
    combo.estatus = "Activo";
    combos[indexComboSeleccionado] = combo;
    clean();
    loadTabla();
}

export function searchCombo(){
    let filtro = document.getElementById("txtBusquedaCombo").value;
    let resultados = combos.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function(combo){
        let registro =  
                '<tr onclick="moduloCatalogoCombo.selectCombo('+ combos.indexOf(combo) +');">'+
                '<td>' + combo.nombre + '</td>' +
                '<td>' + combo.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblCombos").innerHTML = cuerpo;
}

