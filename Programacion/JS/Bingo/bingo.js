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
//contador para los intervalos y posciones array de las bolas
var contador_bolas_bingo=0;
//boton pause
var boton_pause = document.getElementById("boton_pausa");
var pause = false;
//boton REINICIAR
var boton_reinicar = document.getElementById("boton_reiniciar");

function SetTimeOut(msg,_i)
{
  var t=setTimeout("alertMsg('"+msg+"','"+_i+"')",1000);
}



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
      for (let i = 0; i <91; i++)
      {
        arrayNodos_BolasBingo[i]=nodoBoton_plantilla.cloneNode(true);
        arrayNodos_BolasBingo[i].id="boton_"+i;
       nodoBoton_padre.appendChild(arrayNodos_BolasBingo[i]);
      }
      //FUNCIÓN PARA LOS INTERVALOS DE TIEMPO EN SALIR LAS BOLAS
        Interval();
}
function Interval()
{
    var interval = setInterval(
      function()
      {
            if(contador_bolas_bingo<arrayNodos_BolasBingo.length && pause == false && bingo == false)
            {
               arrayNodos_BolasBingo[contador_bolas_bingo].value = array_num_bingo[contador_bolas_bingo];
               contador_bolas_bingo++;
             }
             else
             {
                 clearInterval(interval);
                 MostramosBotonReiniciio();
             }
        }
        ,2000,"JavaScript"); //intervalo de tiempo entre bola y bola
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
            arrayNodos_Carton[i][e].disabled = "disabled";
          }
          nodoBoton_padre_carton.id="contenido_0";
          arrayNodos_Carton[i][e].addEventListener("click",function(){Comprobar(arrayNodos_Carton[i][e].value,arrayNodos_Carton[i][e].id,i,e)});
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
          arrayNodos_Carton[i][e].id=i+"_"+e;
          if(random_Num[e] == 0)
              arrayNodos_Carton[i][e].value = _arrayCarton[e+7];
          else
          {
            arrayNodos_Carton[i][e].value ="";
            arrayNodos_Carton[i][e].disabled = "disabled";

          }
          nodoBoton_padre_carton.id="contenido_1";
          arrayNodos_Carton[i][e].addEventListener("click",function(){Comprobar(arrayNodos_Carton[i][e].value,arrayNodos_Carton[i][e].id,i,e)});
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
          arrayNodos_Carton[i][e].id=i+"_"+e;
          if(random_Num[e] == 0)
            arrayNodos_Carton[i][e].value = _arrayCarton[e+16];
          else
          {
            arrayNodos_Carton[i][e].value ="";
            arrayNodos_Carton[i][e].disabled = "disabled";
          }
          nodoBoton_padre_carton.id="contenido_2";
          arrayNodos_Carton[i][e].addEventListener("click",function(){Comprobar(arrayNodos_Carton[i][e].value,arrayNodos_Carton[i][e].id,i,e)});
          nodoBoton_padre_carton_2.appendChild(arrayNodos_Carton[i][e]);
      }
  }
}

function Comprobar(_value,_id,_i,_e)
{
  let encontradaBola=false;

  for (let i = 0; i < arrayNodos_BolasBingo.length; i++)
  {
      if(arrayNodos_BolasBingo[i].value == _value)
      {
        encontradaBola = true;
        arrayNodos_Carton[_i][_e].style.backgroundColor="#FE2E2E";
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
  let contador_1_linea=0;
  let contador_2_linea=0;
  let contador_3_linea=0;

  i = _value.charAt(0);
  j = _value.charAt(2);

  //cambiamos color boton_

  arrayNodos_Carton[i][j] =0;

      for (let e = 0; e <= arrayNodos_Carton.length; e++)
      {
        if(arrayNodos_Carton[0][e]== 0)
        {
            contador_1_linea++;
        }
          if (arrayNodos_Carton[1][e]== 0)
        {
            contador_2_linea++;
        }
         if (arrayNodos_Carton[2][e]== 0)
        {
            contador_3_linea++;
        }
      }

      if(linea == false)
      {
            if(contador_1_linea == 5)
            {
              linea = true;
              console.log("LINEA - 1");
            }
               if(contador_2_linea == 5)
               {
                 linea = true;
                 console.log("LINEA - 2");
               }
                 if(contador_3_linea == 5)
                 {
                   linea = true;
                   console.log("LINEA - 3");
                 }
        }

    else
    {
      if(contador_1_linea == 5 && contador_2_linea==5 && contador_3_linea == 5)
      {
        console.log("BINGO");
        bingo = true;
        MostramosBotonReiniciio();
      }
    }
}

function InitBotonesFunciones(_value)
{
  if (_value=="PAUSA")
    {
      pause = true;
      boton_pause.value = "REANUDAR";
    }
    else
    {
      pause = false;
      boton_pause.value = "PAUSA";
      Interval();
    }
}

function MostramosBotonReiniciio()
{
  boton_reiniciar.style.visibility="visible";
}

function Reiniciar ()
{
  location.reload(true);
}

function load()
{
  boton_pause.addEventListener("click",function(){InitBotonesFunciones(boton_pause.value)});
  boton_reinicar.addEventListener("click",function(){Reiniciar()});
  boton_reiniciar.style.visibility="hidden";


  console.log("WINDOW CARGADA");
  RellenamosArraysBingo();
  RellenamosArraysCarton();
  InitBolasBingo();
}

window.onload=load;
