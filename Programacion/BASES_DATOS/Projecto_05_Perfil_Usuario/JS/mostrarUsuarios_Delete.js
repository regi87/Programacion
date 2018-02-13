var arrayNodos=[0];
var arrayNodos_Image_Eliminar=[0];
var arrayNodos_Image_Editar=[0];
var arrayUsuarios=[0];

  $.ajax({
    type: "GET",
    datatype: 'json',
    url: '../PHP/listadoUsuarios.php',
    success: function(data)
    {
       arrayUsuarios = jQuery.parseJSON(data);
      Init(arrayUsuarios);
    }
  });

  function Init(arrayUsuarios)
{
    var nodoBoton_padre = document.getElementById("lista5");
    var nodoBoton_plantilla = document.getElementById("Usuario_");

    var nodoImagenEliminar=document.getElementById("imagen_");
    var nodoImagenEditar=document.getElementById("imagen2_");

    nodoBoton_padre.removeChild(nodoBoton_plantilla);
    //nodoBoton_padre.removeChild(nodoImagen);

    for(let i=0; i<arrayUsuarios.length; i++)
    {
      arrayNodos[i]=nodoBoton_plantilla.cloneNode(true);
      arrayNodos_Image_Eliminar[i]=nodoImagenEliminar.cloneNode(true);

      arrayNodos_Image_Editar[i]=nodoImagenEditar.cloneNode(true);

      arrayNodos[i].id="Usuario_"+i;

      arrayNodos_Image_Eliminar[i].id="imagen_"+i;

      arrayNodos_Image_Editar[i].id="imagen2_"+i;

      arrayNodos[i].innerHTML =  "Nombre: "+arrayUsuarios[i]["nombre"]+" Apellidos: "+arrayUsuarios[i]["apellidos"]+" Edad: "+arrayUsuarios[i]["edad"]+" Correo: "+arrayUsuarios[i]["correo"]+" Usuario: "+arrayUsuarios[i]["user_name"];

      //añade los Usuarios
      nodoBoton_padre.appendChild(arrayNodos[i]);
      nodoBoton_padre.appendChild(arrayNodos_Image_Eliminar[i]);
      nodoBoton_padre.appendChild(arrayNodos_Image_Editar[i])

    }
}
    function Eliminar_Usuario(id)
    {
      var i = id.substring(7);
      var busqueda = arrayUsuarios[i]['nombre'];
      window.location = '../PHP/borradoUsuario.php?busqueda='+busqueda;
    }

    function Editar_Usuario(id)
    {
      let i = id.substring(8);

      var usuario = JSON.stringify(arrayUsuarios[i]);

      $.ajax({
        type: "POST",
        url: '../PHP/editar_Usuario.php',
        data: {usuario},

        success: function(reponse) {
   window.location=('../PHP/editar_Usuario.php?usuario=' + usuario);
        },
      });


    }
