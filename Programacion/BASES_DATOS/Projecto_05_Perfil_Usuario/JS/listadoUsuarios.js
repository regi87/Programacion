
var usuario_Correcto = false;


$(document).ready(function()
{

  $('#Info').html('<img src="../yes.png" alt="" />').fadeOut(0);
  $('#Info_2').html('<img src="../no.png" alt="" />').fadeOut(0);


    $('#nombre').focusout(function()
    {
      document.getElementById("nombre").style.borderColor = "#E0D68F";
      if($("#nombre").val().length == 0)
      {
        $('#Info').html('<img src="../yes.png" alt="" />').fadeOut(0);
        $('#Info_2').html('<img src="../no.png" alt="" />').fadeOut(0);
        usuario_Correcto=false;
      }
        $('#nombre').blur(function()
        {
              var nombre = $(this).val();
              var dataString = 'nombre='+nombre;

              $.ajax({
                  type: "POST",
                  url: "../PHP/comprobarDatos.php",
                  data: dataString,
                  success: function(data)
                  {
                      if(data == 0 && $("#nombre").val().length > 0)
                      {
                        $('#Info').fadeIn(1000).html(data);
                        $('#Info_2').fadeOut(0).html(data);

                        document.getElementById("nombre").style.borderColor = "green";
                        usuario_Correcto=true;

                      }
                        else if(data == 1 && $("#nombre").val().length > 0)
                        {
                          $('#Info_2').fadeIn(1000).html(data);
                            $('#Info').fadeOut(0).html(data);
                          document.getElementById("nombre").style.borderColor = "red";

                          usuario_Correcto=false;
                        }
                  }
              });

          })
      });

  });

  function UsuarioCorrecto()
  {
    console.log(usuario_Correcto);
    return usuario_Correcto;
  }
  function InsertarUsuarioNuevo()
  {
    console.log("ENTRA");
    /*
    if(UsuarioCorrecto())
    {}
      window.location="../PHP/insertarUsuario.php";
      */

  }
