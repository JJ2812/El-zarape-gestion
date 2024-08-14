let moduloSucursal;
let moduloUsuario;
let moduloCatalogoCombo;
let moduloCatalogoBebida;
let moduloCatalogoAlimento;
 
function cargarModuloSucursal(){
    fetch("modules/moduloSucursal/view_Sucursal.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloSucursal/controller_Sucursal.js").then(
                            function(controller){
                                moduloSucursal = controller;
                            }
                            );
                }
            );
}
 
function cargarModuloUsuario(){
    fetch("modules/moduloUsuario/view_Usuario.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloUsuario/controller_Usuario.js").then(
                            function(controller){
                                moduloUsuario = controller;
                            }
                            );
                }
            );
            
}

function cargarModuloAlimento(){
    fetch("modules/moduloCatalogoAlimento/view_Alimento.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloCatalogoAlimento/controller_Alimento.js").then(
                            function(controller){
                                moduloCatalogoAlimento = controller;
                            }
                            );
                }
            );
}

function cargarModuloBebida(){
    fetch("modules/moduloCatalogoBebida/view_Bebida.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloCatalogoBebida/controller_Bebida.js").then(
                            function(controller){
                                moduloCatalogoBebida = controller;
                            }
                            );
                }
            );
}

function cargarModuloCombo(){
    fetch("modules/moduloCatalogoCombo/view_Combo.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloCatalogoCombo/controller_Combo.js").then(
                            function(controller){
                                moduloCatalogoCombo = controller;
                            }
                            );
                }
            );
}