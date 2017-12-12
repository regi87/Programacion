/*
  Autor : Regi
  Proyecto Bingo
*/

//array numeros
var arrayNumeros=[0];
// Crear nodo de tipo Element numeros bingo
var nodoBoton_padre = document.getElementById("contenido");
var nodoBoton_plantilla = document.getElementById("boton_");

// Crear nodo de tipo Element numeros carton
var nodoBoton_padre_carton = document.getElementById("contenido_0");
var nodoBoton_plantilla_carton = document.getElementById("boton_carton_");
var nodoBoton_padre_carton_1 = document.getElementById("contenido_1");
var nodoBoton_padre_carton_2 = document.getElementById("contenido_2");

//array nodos bolas Bingo
var arrayNodos_BolasBingo = [1];
//array nodos bolas Bingo
var arrayNodos_Carton = new Array(8);

//array numeros aleaotorios Carton
var array_num_ale_carton=[0];
//array numeros aleaotorios Bingo
var array_num=[0];


function NumerosAleatoriosCarton()
{

}
function RellenamosArrays()
{
  let contador = 0;
//  num_ale= Math.round(Math.random() * (90 - 0) + 0);
  for (var i = 0; i < 91; i++)
  {
      array_num[i]=i;

      console.log(array_num[i]);
  }

}

function InitBolasBingo()
{
        nodoBoton_plantilla.value = "   ";
      //añadimos al array los clones de los botones por cada posición en el array un clon
      for(let i=1; i<91; i++)
      {   arrayNodos_BolasBingo[i]=nodoBoton_plantilla.cloneNode(true);
          arrayNodos_BolasBingo[i].id="boton_"+i;
          arrayNodos_BolasBingo[i].value = "   ";
          //añade los botones
          nodoBoton_padre.appendChild(arrayNodos_BolasBingo[i]);
      }
}

function InitCarton()
{
  for (let i = 0; i < 3; i++)
  {
    arrayNodos_Carton[i]=new Array(8);
  }
  nodoBoton_plantilla_carton.value = "   ";


  //añadimos al array los clones de los botones por cada posición en el array un clon
  for (let i=0; i<1; i++)
  {
    for (let e=1; e<9; e++)
      {
          arrayNodos_Carton[i][e] = nodoBoton_plantilla_carton.cloneNode(true);
          arrayNodos_Carton[i][e].id="boton_carton_"+i+"_"+e;
          arrayNodos_Carton[i][e].value = "   ";
          nodoBoton_padre_carton.id="contenido_0";
          nodoBoton_padre_carton.appendChild(arrayNodos_Carton[i][e]);
      }
  }
  nodoBoton_plantilla_carton.value = "   ";
  //añadimos al array los clones de los botones por cada posición en el array un clon
  for (let i=1; i<2; i++)
  {
    for (let e=0; e<9; e++)
      {
          arrayNodos_Carton[i][e] = nodoBoton_plantilla_carton.cloneNode(true);
          arrayNodos_Carton[i][e].id="boton_carton_"+i+"_"+e;
          arrayNodos_Carton[i][e].value = "   ";
          nodoBoton_padre_carton.id="contenido_1";
          nodoBoton_padre_carton_1.appendChild(arrayNodos_Carton[i][e]);
      }
  }

  nodoBoton_plantilla_carton.value = "   ";
  //añadimos al array los clones de los botones por cada posición en el array un clon
  for (let i=2; i<3; i++)
  {
    for (let e=0; e<9; e++)
      {
          arrayNodos_Carton[i][e] = nodoBoton_plantilla_carton.cloneNode(true);
          arrayNodos_Carton[i][e].id="boton_carton_"+i+"_"+e;
          arrayNodos_Carton[i][e].value = "   ";
          nodoBoton_padre_carton.id="contenido_2";
          nodoBoton_padre_carton_2.appendChild(arrayNodos_Carton[i][e]);
      }
  }





}

function CrearCarton()
{

}



RellenamosArrays();
InitBolasBingo();
InitCarton();
CrearCarton();
