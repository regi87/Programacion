var type = "";
var nombreInicial="";
var nombreInicial="";
var correo="";
var user_name="";
var busqueda="";



$(document).ready(function()
{
  //para cojer el valor inicial para el Update
  $( 'input').focusin(function()
  { //valor inical del input
    busqueda=$(this).attr('value')

    $('input').focusout(function()
    {

       type = $(this).attr('name');

      document.getElementById(type).style.borderColor = "#E0D68F";
      document.getElementById("registro").disabled = false;

              var envio = $(this).val();
              var dataString = 'busqueda='+type+"-"+envio;


              console.log(busqueda+"-----"+envio);
              //comprobamos el nombre Inicial y el actual antes de comprobarDatos
              //si es el mismo no hacemos nodoImagenEditar
              if(busqueda != envio)
              if(type != "curso" && type != "edad" &type != "apellidos")
              {
                $.ajax({
                    type: "POST",
                    url: "../PHP/comprobarDatos.php",
                    data: dataString,
                    success: function(data)
                    {
                        if(data == 0 && $("#"+type).val().length > 0)
                        {
                          document.getElementById(type).style.borderColor = "green";
                          document.getElementById("registro").disabled = false;
                        }
                          else if(data == 1 && $("#"+type).val().length > 0)
                          {
                            document.getElementById(type).style.borderColor = "red";
                            document.getElementById("registro").disabled = true;

                          }
                    }
                });
            }
      });
    });
  });
