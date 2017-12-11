/*
  Autor : Regi
  Proyecto Ahorcado
*/
//INICIACIÓN VARIABLES
var palabra = ["CASA", "COCHE", "LIMUSINA"];
var vector_palabra_nueva =["_"];
var vector_vacio =[""];
var num_ale=  Math.round(Math.random() * (2 - 0) + 0);
var letra_player="A";
var contador= 0;
var tamayo = palabra[num_ale].length;
var encotradoBool = false;

var contadorbusqueda = 0;
var arrayComprobacionLetrasCogidas = ["A"];
var econtrada = false;

    //FUNCIÓN BIENVENIDA
    function Bienvenida()
        {
          alert('BIENVENIDOS AL JUEGO DEL AHORACADO');
          console.log(palabra[num_ale]);
          alert("NÚMERO DE LETRAS DE LA PALABRA BUSCADA: "+palabra[num_ale].length);
        }
        //FUNCIÓN RESULTANTE DE LA BUSQUEDA POSITIVA
      function Encontrada(i)
         {
          encotradoBool = true;
          vector_palabra_nueva[i]=letra_player;
          contador=contador+1;
          alert("LETRAS ENCONTRADAS:  "+contador+" LETRA ENCONTRADA : "+letra_player);
          alert("LETRAS RESTANTES: "+ (tamayo - contador));

          vector_vacio[i] = vector_palabra_nueva[i];
          alert("LETRAS ENCONTRADAS DE LA PALABRA "+vector_vacio.toString().replace(/[,]+/g, ''));
        }
        function ComprobacionLetrasUtilizadas()
        {
          let utilizada = false;
          let econtrada_palabra_correcta = false;

          console.log("PrimeraEntrada____"+ contadorbusqueda);
          econtrada = false;
          for(let y=0; y < contadorbusqueda; y++)
          {
            if(arrayComprobacionLetrasCogidas[y] == letra_player)
              econtrada = true;
          }

          for(let z=0; z <= vector_palabra_nueva.length;z++)
          {
            if(vector_palabra_nueva[z] == letra_player)
              econtrada_palabra_correcta = true;
          }

         for(let y=0; y <= contadorbusqueda; y++)
          {

             if(arrayComprobacionLetrasCogidas[y] != letra_player && econtrada == false)
            {
              arrayComprobacionLetrasCogidas[contadorbusqueda]=letra_player;
            }
          }

          if(econtrada == true || econtrada_palabra_correcta == true)
          {
              alert("LETRA YA UTILIADA : "+letra_player);
          }

          if(econtrada == false && econtrada_palabra_correcta == false)
          {
            contadorbusqueda++;
            NOencontrada();
          }

        }
        //FUNCIÓN RESULTANTE DE LA BUSQUEDA NEGATIVA
      function NOencontrada()
        {
            alert("LETRA NO ENCONTRADA ");
            encotradoBool = true;
        }

        //FUNCIÓN BUSQUEDA
      function Busqueda()
        {
          vector_vacio.length = tamayo;
          for (var i = 0; i < vector_vacio.length; i++) {
            vector_vacio[i]="___  ";
          }

          while(contador < tamayo )
          {
                letra_player = window.prompt("LETRA SOLICITADA: ");
                letra_player=letra_player.toUpperCase();

                encotradoBool = false;

                  for( i=0;i<tamayo;i++)
                  {
                      if(palabra[num_ale][i] == letra_player && vector_palabra_nueva[i] != letra_player)
                        {
                           Encontrada(i);
                        }
                  }

                  if(encotradoBool == false)
                  {
                      ComprobacionLetrasUtilizadas();
                  }
                console.log(vector_palabra_nueva.toString().replace(/[,]+/g, ''));
             }
             Finjuego();
        }

        //FUNCIÓN FIN juego
      function Finjuego()
        {
             alert("ENORABUENA POR GANAR EL JUEGO");
        }

//MAIN
Bienvenida();
Busqueda();
