/*
  Autor : Regi
  Proyecto Ahorcado 2
*/

var palabra = ["LIBRO", "COCINA", "PERRO","TELE","PERIODICO","ORDENADOR"];
var num_ale=  Math.round(Math.random() * (3 - 0) + 0);
var tamayo = palabra[num_ale].length;

// Crear nodo de tipo Element
var nodoBoton_padre = document.getElementById("contenido");
var nodoBoton_plantilla = document.getElementById("boton_");
//array nodos
var arrayNodos = [1];
//array abecederario
var arrayAbecedario= ["B","C","D","E","F","G","H","I","J","K","L","M", "N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//array __ lineas de las letras
var array_lineas =["___"];

//contador numero fallos
var contadorFallos = 1;

//contador numero fallos
var contadorAciertos = 0;

//array letras encontradas
var arrayLetrasEncontradas=[0];


function Init()
{
      nodoBoton_plantilla.value = "A";

      //añadimos al array los clones de los botones por cada posición en el array un clon
      for(let i=0; i<26; i++)
      {   arrayNodos[i]=nodoBoton_plantilla.cloneNode(true);
          arrayNodos[i].id="boton_"+i;
          arrayNodos[i].value = arrayAbecedario[i];
          //añade los botones
          nodoBoton_padre.appendChild(arrayNodos[i]);
      }

      EspaciosLetra();
}

function EspaciosLetra()
{
  let nodoPadre_lineas = document.getElementById("contenido_2");
  let nodoLinea_plantilla = document.getElementById("num_letras_espacios_");

  for(let i=0; i < tamayo; i++)
    {
      array_lineas[i]= nodoLinea_plantilla.cloneNode(true);
      array_lineas[i].id = "num_letras_espacios_"+i;
      array_lineas[i].textContent = (" ____ ");
      nodoPadre_lineas.appendChild(array_lineas[i]);
    }
}

function Comprobamos (letra, boton_id)
{
  let imagenModificar = document.getElementById("imagen");
  //booleano para modificar la imagen
  let entra_noEncontrada = false;
  let encontrada = false;

  for(let i=0; i < tamayo; i++)
  {
    if(contadorFallos < 7 && contadorAciertos < tamayo)
    {
        if(palabra[num_ale][i] == letra)
        {
          array_lineas[i].textContent = letra;
          document.getElementById(boton_id).disabled = true;
          document.getElementById(boton_id).style.backgroundColor = "red";
          encontrada = true;
          contadorAciertos++;
          arrayLetrasEncontradas[i]=letra;
        }
        else
        {
          entra_noEncontrada = true;
          document.getElementById(boton_id).disabled = true;
          document.getElementById(boton_id).style.backgroundColor = "red";
        }
      }

  }

  if(entra_noEncontrada == true && encontrada  == false && contadorFallos < 7)
  {
    contadorFallos++;
    imagenModificar.src="Imagenes_Ahorcado/imagen_"+contadorFallos+".png";
  }

  console.log(contadorAciertos);
  console.log(contadorFallos);
  console.log( palabra[num_ale].length);
  ComprobamosEstado(contadorFallos,contadorAciertos);
}

function Pista()
{
  let pista = document.getElementById("pista");
  let pista_text = document.getElementById("pista_text");


  if(contadorAciertos < tamayo-1)
  {
    pista.style.visibility = "visible";
    pista_text.style.visibility = "visible";
  }
}
function MostramosPista()
{
  let poscionLetra = 0;


  if(contadorAciertos==0)
     array_lineas[0].textContent =palabra[num_ale][0];

     else
     {
       for (var i = 0; i < tamayo; i++)
       {
         if(arrayLetrasEncontradas[i] != palabra[num_ale][i])
            posicionLetra = i;
       }
       array_lineas[posicionLetra].textContent =palabra[num_ale][posicionLetra];

     }


}

function ComprobamosEstado(contadorFallos_Fun,contadorAciertos_Func)
{
  let mensaje= document.getElementById("finJuego");

  if(contadorFallos == 7)
  {
    mensaje.textContent = "TU PIERDES !!";
  }

else if(contadorAciertos == tamayo)
  {
    mensaje.textContent = "TU GANAS !!";
  }
  else if(contadorFallos == 4)
  {
    Pista();
  }
}


console.log(palabra[num_ale]);
Init();
