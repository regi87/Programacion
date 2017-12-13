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
//linea
var linea = false;
//bingo
var bingo = false;
//contador premios
var contador = 0;

function Rand_ArrayCarton()
{
  let _random_Num=[0];

  for (let i = 0; i < 10; i++)
  {
    if(i<4)
    _random_Num[i] = 1;
    else
    {
      _random_Num[i] = 0;
    }
  }
  //los ordenamos al azar
 _random_Num.sort(() => Math.random() > 0.5 ? 1 : -1);

  return _random_Num;
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

function RellenamosArraysBingo()
{
  for (var i = 1; i < 92; i++)
  {
      array_num_bingo[i-1]=i;
  }
  array_num_bingo.sort();
}

function InitBolasBingo()
{
  //eliminamos el boton inicial del html
  let a = nodoBoton_plantilla_carton.parentNode;
  a.removeChild(nodoBoton_plantilla_carton);

      //añadimos al array los clones de los botones por cada posición en el array un clon
      for(let i=0; i<91; i++)
      {   arrayNodos_BolasBingo[i]=nodoBoton_plantilla.cloneNode(true);
          arrayNodos_BolasBingo[i].id="boton_"+i;
          arrayNodos_BolasBingo[i].value = array_num_bingo[i];
          nodoBoton_padre.appendChild(arrayNodos_BolasBingo[i]);
      }
}

function InitCarton(_arrayCarton)
{
  //random posiciones carton sin numeros
  let random_Num=[0];
  //eliminamos el boton inicial del html
  let a = nodoBoton_plantilla.parentNode;
  a.removeChild(nodoBoton_plantilla);

  for (let i = 0; i < 3; i++)
  {
    arrayNodos_Carton[i]=new Array(8);
  }

random_Num=Rand_ArrayCarton();
  //añadimos al array los clones de los botones por cada posición en el array un clon
  for (let i=0; i<1; i++)
  {
    for (let e=0; e<9; e++)
      {
          num =random_Num[e];
          arrayNodos_Carton[i][e] = nodoBoton_plantilla_carton.cloneNode(true);
          arrayNodos_Carton[i][e].id=i+"_"+e;
          if(random_Num[e] == 0)
            arrayNodos_Carton[i][e].value = _arrayCarton[e];
          else
          {
            arrayNodos_Carton[i][e].value ="";
          }
          nodoBoton_padre_carton.id="contenido_0";
          nodoBoton_padre_carton.appendChild(arrayNodos_Carton[i][e]);
      }
  }
  random_Num=Rand_ArrayCarton();

  //añadimos al array los clones de los botones por cada posición en el array un clon
  for (let i=1; i<2; i++)
  {
    for (let e=0; e<9; e++)
      {
          arrayNodos_Carton[i][e] = nodoBoton_plantilla_carton.cloneNode(true);
          arrayNodos_Carton[i][e].id="boton_carton_"+i+"_"+e;
          if(random_Num[e] == 0)
              arrayNodos_Carton[i][e].value = _arrayCarton[e+7];
          else
          {
            arrayNodos_Carton[i][e].value ="";
          }
          nodoBoton_padre_carton.id="contenido_1";
          nodoBoton_padre_carton_1.appendChild(arrayNodos_Carton[i][e]);
      }
  }
  random_Num=Rand_ArrayCarton();
  //añadimos al array los clones de los botones por cada posición en el array un clon
  for (let i=2; i<3; i++)
  {
    for (let e=0; e<9; e++)
      {
          arrayNodos_Carton[i][e] = nodoBoton_plantilla_carton.cloneNode(true);
          arrayNodos_Carton[i][e].id="boton_carton_"+i+"_"+e;
          if(random_Num[e] == 0)
            arrayNodos_Carton[i][e].value = _arrayCarton[e+16];
          else
          {
            arrayNodos_Carton[i][e].value ="";
          }
          nodoBoton_padre_carton.id="contenido_2";
          nodoBoton_padre_carton_2.appendChild(arrayNodos_Carton[i][e]);
      }
  }
}

function Comprobar(_value,_id)
{
  let encontradaBola=false;

  for (let i = 0; i < arrayNodos_BolasBingo.length; i++)
  {
      if(arrayNodos_BolasBingo[i].value == _value)
      {
        encontradaBola = true;
      }
  }
  if(encontradaBola == true)
    {
      OpcionesBuscar(_id);
    }
}

function OpcionesBuscar(_value)
{
  let i=0;
  let j=0;
  let num=false;
  i = _value.charAt(0);
  j = _value.charAt(2);

  arrayNodos_Carton[i][j] =0;

  for (let e = 0; e < arrayNodos_Carton.length; i++)
  {
    if(arrayNodos_Carton[0][e] != 0)
      num = false;
      else {
        num=true;
      }
  }
}

RellenamosArraysBingo();
RellenamosArraysCarton();
InitBolasBingo();
