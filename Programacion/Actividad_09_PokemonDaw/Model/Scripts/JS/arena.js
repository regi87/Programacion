$(document).ready(function()
{
  var returnedData=[];
  var nomPokemon=document.getElementById("pokemon").value;
  var pokemon_Player=document.getElementById("pokemon_Player");
  var pokemon_Player_2=document.getElementById("pokemon_Player_2");



  var turnos=document.getElementById("turnos");
  var vida_1=document.getElementById("vida_1");
  var vida_2=document.getElementById("vida_2");


  var cronometro=document.getElementById("cronometro");

  function tiempo()
    {

      setInterval(function(){ cronometro.innerHTML-=1;}, 1000);

      if(cronometro.innerHTML==0)
        {
          
        }

    }
    function Combate()
    {

    }


    $('input').click(function ()
    {
        let input_id="";
        input_id=$(this).attr("id");

        if(input_id == "ataque_Player_1")
            console.log(input_id+"--"+returnedData[0]["pokemon_selected"]+"-"+returnedData[0]["ataque"]);
            else if (input_id == "defensa_Player_1")
            {
              console.log(input_id+"--"+returnedData[0]["pokemon_selected"]+"-"+returnedData[0]["defensa"]);
            }

            if(input_id == "ataque_Player_2")
                console.log(input_id+"--"+returnedData[1]["pokemon_selected"]+"-"+returnedData[1]["ataque"]);
                else if (input_id == "defensa_Player_2")
                {
                  console.log(input_id+"--"+returnedData[1]["pokemon_selected"]+"-"+returnedData[1]["defensa"]);
                }

    });

    function RecogemosValores (_nomPokemon)
    {
      var action = "../src/infoPokemon.php"
      //Para enviar por Ajax !
      var datos = "pokemon_selected="+_nomPokemon;

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
        SacamosPantalla(returnedData);
      });
    }
    function SacamosPantalla(_returnedData)
    {
      //imagen pokemon
      if(_returnedData[0]["pokemon_selected"]=="pikachu")
      {
        pokemon_Player.src="../Recursos/Imagenes/pikachu.png";
        pokemon_Player_2.src="../Recursos/Imagenes/bulbasur.png";
      }

      else if (_returnedData[0]["pokemon_selected"]=="bulbasur")
      {
        pokemon_Player.src="../Recursos/Imagenes/bulbasur.png";
        pokemon_Player_2.src="../Recursos/Imagenes/pikachu.png";
      }
      //texto turno de ...
      turnos.innerHTML="TURNO DE "+_returnedData[0]["pokemon_selected"].toUpperCase();

      //mostramos info del pokemon
      vida_1.innerHTML=_returnedData[0]["salud"]+"/"+_returnedData[0]["salud"]+"   "+"   "+_returnedData[0]["defensa"]+"/"+_returnedData[0]["defensa"];
      vida_2.innerHTML=_returnedData[0]["salud"]+"/"+_returnedData[1]["salud"]+"   "+"   "+_returnedData[1]["defensa"]+"/"+_returnedData[1]["defensa"];
      tiempo();
    }


    RecogemosValores(nomPokemon);


});
