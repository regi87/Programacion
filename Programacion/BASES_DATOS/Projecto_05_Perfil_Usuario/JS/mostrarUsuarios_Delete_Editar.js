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


      arrayNodos[i].innerHTML =  arrayUsuarios[i]["nombre"]+" "+arrayUsuarios[i]["apellidos"]+" "+arrayUsuarios[i]["edad"]+" "+arrayUsuarios[i]["correo"];

      //añade los Usuarios
      nodoBoton_padre.appendChild(arrayNodos[i]);
      nodoBoton_padre.appendChild(arrayNodos_Image_Eliminar[i]);
      nodoBoton_padre.appendChild(arrayNodos_Image_Editar[i])

    }
}
    function Eliminar_Usuario(id)
    {

      var i = id.substring(7);
      console.log(arrayUsuarios[i]['nombre']);
      var busqueda = arrayUsuarios[i]['nombre'];


      window.location = '../PHP/borradoUsuario.php?busqueda='+busqueda;


    }
