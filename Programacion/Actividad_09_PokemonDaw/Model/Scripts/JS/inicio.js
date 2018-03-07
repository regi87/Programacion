$(document).ready(function()
{
    document.getElementById("table").style.visibility = "hidden";
    document.getElementById("jugar").style.visibility = "hidden";
    var returnedData=[];

    $('input').click(function ()
    {
        let input_id="";
        input_id=$(this).attr("id");

        if(input_id=="pikachu" || input_id=="bulbasur")
        {
            document.getElementById("jugar").style.visibility = "visible";
            submitInfo(input_id);
        }
        else
          {
            Arena();
          }
    });

    function submitInfo(pokemon_id){
       //recogemos el "action" a donde se enviarán los datos mediante "POST"
       var action = "../src/infoPokemon.php"
       //Para enviar por Ajax !
       var datos = "pokemon_selected="+pokemon_id;

       $.ajax({
          //url a enviar
          url: action,
          //el tipo GET o POST en nuestro caso POST
          type: 'POST',
          //evitamos el cacheo de los datos
          cache: false,
          //definimos los datos a enviar, nosotros ya los tenemos definidos en la variable "datos"
          data: datos
          //cuando se recibe la respuesta se activa el siguiente trozo de código
          //la r que recibe la funcion de callback es "response" que viene del script PHP
       })
       .done(function(respuesta)
       {
           returnedData = JSON.parse(respuesta);
           Respuesta(returnedData);
       });
    }

    function Respuesta(_returnedData)
    {
        //sacamos la tabla de características
        document.getElementById("table").style.visibility = "visible";
        //detenemos animación vibración
        document.getElementById("pokemon").style.animation = "shake 0s";
        //imagen pokemon
        document.getElementById("pokemon").src ="../Recursos/Imagenes/"+_returnedData[0]["pokemon_selected"]+".png";
        //características
        document.getElementById("salud").innerHTML = _returnedData[0]["salud"];
        document.getElementById("ataque").innerHTML = _returnedData[0]["ataque"];
        document.getElementById("defensa").innerHTML = _returnedData[0]["defensa"];
        document.getElementById("stamina").innerHTML = _returnedData[0]["stamina"];
    }
    function Arena()
    {
      var redirect = "../Html/arena.php";
      //location.href ="../Html/arena.php?pokemon="returnedData["nombre"];
      window.location.replace('../Html/arena.php?pokemon=' + returnedData[0]["pokemon_selected"]);
    }

});
