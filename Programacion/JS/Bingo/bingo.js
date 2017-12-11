/*
  Autor : Regi
  Proyecto Bingo
*/

//array numeros
var arrayNumeros=[0];
// Crear nodo de tipo Element
var nodoBoton_padre = document.getElementById("contenido");
var nodoBoton_plantilla = document.getElementById("boton_");
//array nodos
var arrayNodos = [1];


function Init()
{
      nodoBoton_plantilla.value = "";

      //añadimos al array los clones de los botones por cada posición en el array un clon
      for(let i=1; i<91; i++)
      {   arrayNodos[i]=nodoBoton_plantilla.cloneNode(true);
          arrayNodos[i].id="boton_"+i;
          arrayNodos[i].value = "";
          //añade los botones
          nodoBoton_padre.appendChild(arrayNodos[i]);
      }

}

Init();
