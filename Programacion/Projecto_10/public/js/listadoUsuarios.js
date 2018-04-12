var type = "";
var busqueda="";
var contrasenya=document.getElementById("contrasenya");
var re_contrasenya=document.getElementById("re_contrasenya");
var nom_pagina=document.location.href.match(/[^\/]+$/)[0];

$(document).ready(function()
{
  //para cojer el valor inicial para el Update
  $( 'input').focusin(function()
  { //valor inical del input
    busqueda=$(this).attr('value')

    $('input').focusout(function()
    {
       type = $(this).attr('name');

         if(type != "contrasenya" && type != "re_contrasenya")
          {
           document.getElementById(type).style.borderColor = "#E0D68F";
            document.getElementById("registro").disabled = false;
          }

              var envio = $(this).val();
              var dataString = 'busqueda='+type+"-"+envio;

              //comprobamos el nombre Inicial y el actual antes de comprobarDatos
              //si es el mismo no hacemos nodoImagenEditar

              if(nom_pagina == "Register.php")
                if(busqueda != envio)
                  if(type != "curso" && type != "edad" && type != "apellidos" && type != "contrasenya" && type != "re_contrasenya")
                  {
                    $.ajax({
                        type: "POST",
                        url: "../comprobarDatos.php",
                        data: dataString,
                        success: function(data)
                        {
                            if(data == 0 && $("#"+type).val().length > 0 )
                            {
                                document.getElementById(type).style.borderColor = "green";
                                document.getElementById("registro").disabled = false;
                            }
                              else if(data == 1 && $("#"+type).val().length > 0 )
                              {
                                  document.getElementById(type).style.borderColor = "red";
                                  document.getElementById("registro").disabled = true;
                              }
                        }
                    });
                }


        });
    });

        $("#contrasenya").on('keyup', cambioDePass);
        $("#re_contrasenya").on('keyup', cambioDePass)


});
var cambioDePass = function()
{
		var cont = $('#contrasenya').val();
    var cont2 = $('#re_contrasenya').val();

    if (cont == cont2)
    {
      document.getElementById("contrasenya").style.borderColor = "green";
      document.getElementById("re_contrasenya").style.borderColor = "green";
      document.getElementById("registro").disabled = false;
        console.log("Las constraseñas si coinciden");
    }
    else
    {
      document.getElementById("contrasenya").style.borderColor = "red";
      document.getElementById("re_contrasenya").style.borderColor = "red";
      document.getElementById("registro").disabled = true;
      console.log("Las constraseñas no coinciden");

    }
}
