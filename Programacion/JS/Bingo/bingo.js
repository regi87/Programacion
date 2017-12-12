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
var array_num_bingo=[0];



function RellenamosArraysBingo()
{
  let contador = 0;
//  num_ale= Math.round(Math.random() * (90 - 0) + 0);
  for (var i = 0; i < 91; i++)
  {
      array_num_bingo[i]=i;
  }
}

function RellenamosArraysCarton()
{
    let aleatorio=[0];
    //igualamos al array del bingo con los 90 num
    aleatorio=array_num_bingo;
    //los ordenamos al azar
    aleatorio.sort(() => Math.random() > 0.5 ? 1 : -1);
    //tomamos 27
    array_num_ale_carton = aleatorio.slice(0, 27);

    InitCarton(array_num_ale_carton);
}

function InitBolasBingo()
{
  //eliminamos el boton inicial del html
  let a = nodoBoton_plantilla_carton.parentNode;
  a.removeChild(nodoBoton_plantilla_carton);

      //añadimos al array los clones de los botones por cada posición en el array un clon
      for(let i=1; i<91; i++)
      {   arrayNodos_BolasBingo[i]=nodoBoton_plantilla.cloneNode(true);
          arrayNodos_BolasBingo[i].id="boton_"+i;
          arrayNodos_BolasBingo[i].value = "   ";
          //añade los botones
          nodoBoton_padre.appendChild(arrayNodos_BolasBingo[i]);
      }
}

function InitCarton(_arrayCarton)
{
  //eliminamos el boton inicial del html
  let a = nodoBoton_plantilla.parentNode;
  a.removeChild(nodoBoton_plantilla);

  for (let i = 0; i < 3; i++)
  {
    arrayNodos_Carton[i]=new Array(8);
  }



  //añadimos al array los clones de los botones por cada posición en el array un clon
  for (let i=0; i<1; i++)
  {
    for (let e=0; e<9; e++)
      {
          arrayNodos_Carton[i][e] = nodoBoton_plantilla_carton.cloneNode(true);
          arrayNodos_Carton[i][e].id="boton_carton_"+i+"_"+e;
          arrayNodos_Carton[i][e].value = _arrayCarton[e];
          nodoBoton_padre_carton.id="contenido_0";
          nodoBoton_padre_carton.appendChild(arrayNodos_Carton[i][e]);
      }
  }
  //añadimos al array los clones de los botones por cada posición en el array un clon
  for (let i=1; i<2; i++)
  {
    for (let e=0; e<9; e++)
      {
          arrayNodos_Carton[i][e] = nodoBoton_plantilla_carton.cloneNode(true);
          arrayNodos_Carton[i][e].id="boton_carton_"+i+"_"+e;
          arrayNodos_Carton[i][e].value = _arrayCarton[e+9];
          nodoBoton_padre_carton.id="contenido_1";
          nodoBoton_padre_carton_1.appendChild(arrayNodos_Carton[i][e]);
      }
  }
  //añadimos al array los clones de los botones por cada posición en el array un clon
  for (let i=2; i<3; i++)
  {
    for (let e=0; e<9; e++)
      {
          arrayNodos_Carton[i][e] = nodoBoton_plantilla_carton.cloneNode(true);
          arrayNodos_Carton[i][e].id="boton_carton_"+i+"_"+e;
          arrayNodos_Carton[i][e].value = _arrayCarton[e+18];
          nodoBoton_padre_carton.id="contenido_2";
          nodoBoton_padre_carton_2.appendChild(arrayNodos_Carton[i][e]);
      }
  }

}

function Comprobar(_value,_id)
{
  console.log("HOLAAAA");
  console.log(_value+"_"+_id);
}


RellenamosArraysBingo();
RellenamosArraysCarton();
InitBolasBingo();
