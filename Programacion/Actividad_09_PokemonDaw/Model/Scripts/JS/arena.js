$(document).ready(function()
{
  //array para guardar los datos recibidos de Ajax
  var returnedData=[];
  //var nombre pokemon
  var nomPokemon=document.getElementById("pokemon").value;
  //var imagenes pokemon
  var pokemon_Player=document.getElementById("pokemon_Player");
  var pokemon_Player_2=document.getElementById("pokemon_Player_2");
  //variable nombre pokemon turno solo texto
  var turnos=document.getElementById("turnos");
  var turnoPoke=0;
  //variables vida de los pokemon
  var vida_1=document.getElementById("vida_1");
  var vida_2=document.getElementById("vida_2");
//var dom cronometro
  var cronometro=document.getElementById("cronometro");
  var time=20;
  //var par parar el funcion
  var parar =0;

    function funcionTiempoStart()
    {
      parar= setInterval(funcionTiempoBatalla, 1000);
    }
    function restartTiempo()
    {
      clearInterval(parar);
      time=20;
      cronometro.innerHTML=time;
      funcionTiempoStart();
    }
    function funcionTiempoBatalla()
    {
      time-=1;
      cronometro.innerHTML=time;

       if(turnoPoke==0 && time == 0)
        {
          turnoPoke=1;
          turnos.innerHTML="TURNO DE "+returnedData[1]["pokemon_selected"].toUpperCase();
          restartTiempo();
        }
      else if(turnoPoke==1 && time == 0)
         {
           turnoPoke=0;
           turnos.innerHTML="TURNO DE "+returnedData[0]["pokemon_selected"].toUpperCase();
           restartTiempo();
         }
         if (returnedData[0]["salud"]<= 0 || returnedData[1]["salud"]<=0)
         {
           tiempoParar();
         }
    }
    function tiempoParar()
    {
      clearInterval(parar);
    }
    function Ataque(typePl,typeEne)
    {
      if (typePl==0)
      {
        returnedData[typeEne]["salud"]-=returnedData[typePl]["ataque"];
        vida_2.innerHTML=returnedData[typeEne]["salud"]+"/"+returnedData[typeEne]["salud"];
        document.getElementById("bar_2_vida").style.width=returnedData[typeEne]["salud"]+"%";
      }
      if (typePl==1)
      {
        returnedData[typeEne]["salud"]-=returnedData[typePl]["ataque"];
        vida_1.innerHTML=returnedData[typeEne]["salud"]+"/"+returnedData[typeEne]["salud"];
        document.getElementById("bar_1_vida").style.width=returnedData[typeEne]["salud"]+"%";
      }
    }
    function Defensa(typePl,typeEne)
    {
      if (typePl==0)
      {
        returnedData[typeEne]["ataque"]-=returnedData[typePl]["defensa"];
        returnedData[typePl]["stamina"]-=20;
      }
      if (typePl==1)
      {
        returnedData[typeEne]["ataque"]-=returnedData[typePl]["defensa"];
        returnedData[typePl]["stamina"]-=20;
      }
    }
    //Funciones para el click del ratón
    $('input').click(function ()
    {
        let input_id="";
        input_id=$(this).attr("id");

            if(input_id == "ataque_Player_1" && turnoPoke ==0)
            {
                Ataque(0,1);
                turnoPoke=1;
                turnos.innerHTML="TURNO DE "+returnedData[1]["pokemon_selected"].toUpperCase();
                restartTiempo();
            }
            else if (input_id == "defensa_Player_1" && turnoPoke ==0 && returnedData[0]["stamina"] >0)
            {
                Defensa(0,1);
                turnoPoke=1;
                turnos.innerHTML="TURNO DE "+returnedData[1]["pokemon_selected"].toUpperCase();
                restartTiempo();
            }
            if(input_id == "ataque_Player_2" && turnoPoke==1 )
            {
                Ataque(1,0);
                turnoPoke=0;
                turnos.innerHTML="TURNO DE "+returnedData[0]["pokemon_selected"].toUpperCase();
                restartTiempo();
            }
           else if (input_id == "defensa_Player_2"  && turnoPoke==1 && returnedData[1]["stamina"] >0)
              {
                Defensa(1,0);
                turnoPoke=0;
                turnos.innerHTML="TURNO DE "+returnedData[0]["pokemon_selected"].toUpperCase();
                restartTiempo();
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
      pokemon_Player.src="../Recursos/Imagenes/"+_returnedData[0]["pokemon_selected"]+".gif";
      pokemon_Player_2.src="../Recursos/Imagenes/"+_returnedData[1]["pokemon_selected"]+".gif";
      //texto turno de ...
      turnos.innerHTML="TURNO DE "+_returnedData[0]["pokemon_selected"].toUpperCase();
      //mostramos info del pokemon
      vida_1.innerHTML=_returnedData[0]["salud"]+"/"+_returnedData[0]["salud"];
      vida_2.innerHTML=_returnedData[1]["salud"]+"/"+_returnedData[1]["salud"];
      //Inicializamos el tiempo
      funcionTiempoStart();
    }

    RecogemosValores(nomPokemon);
});
