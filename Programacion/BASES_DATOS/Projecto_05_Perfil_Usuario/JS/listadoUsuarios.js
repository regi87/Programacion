var type = "";

$(document).ready(function()
{
    $('input').focusout(function()
    {
       type = $(this).attr('name');

      document.getElementById(type).style.borderColor = "#E0D68F";
      document.getElementById("registro").disabled = false;

              var envio = $(this).val();
              var dataString = 'busqueda='+type+"-"+envio;

              if(type != "curso" && type != "edad")
              {
                $.ajax({
                    type: "POST",
                    url: "../PHP/comprobarDatos.php",
                    data: dataString,
                    success: function(data)
                    {
                      console.log(data);
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
