
onmessage = function(e) {
 console.log('Message received from main script');

console.log(e);
 var workerResultado = e.data[0];
 var workerArray_2 = e.data[1];
 var workerArray_3 = e.data[2];
 //numero del array para comprobar
 var numeroAleComprobar = 0;
 //numero aleatorio = posicon !
 var num_Ale_PosArray = 0;
//variable para coger el numero de la posicion != de 0
var cambioPosc = 0;
var max = 0;
var min = 0;

//array numero comprobados
var arrayNum_Comprobados =[0];
//numero Operaciones
var numeroOperaciones = 0;
//diferencia encontrada
var diferencia_min_suma = false;
//diferencia encontrada
var diferencia_min_resta = false;
//resultado ENCONTRAD
var encontrado = false;
//resultado NOENCONTRAD
var NoOencontrado = false;
//array de posciones i
var arrayI_Posc=[0];

while(encontrado == false && numeroOperaciones < 20 )
{
  NumeroAleatorio(numeroOperaciones);
  numeroOperaciones++;
}

function NumeroAleatorio(_numeroOperaciones)
{
      arrayNum_Comprobados[_numeroOperaciones]=_numeroOperaciones;
      JuntamosArray_Y_CambioPosciones(arrayNum_Comprobados[_numeroOperaciones]);
}

function JuntamosArray_Y_CambioPosciones(_num_Ale_PosArray)
{
  let arrayComprobacion=[0];
  let arrayDefinitivo=[0];

  for (let i = 0; i < 3; i++)
   {
     arrayComprobacion[i] = workerArray_2[i];
   }

  for (let i = 3; i < 5; i++)
  {
    arrayComprobacion[i]=workerArray_3[i-3];
  }
  //Cambiamos los valores por distintas posiciones así podemos empezar en el for
  //por la posicion 1 y no tener valores indefinidos
  if(num_Ale_PosArray != 0)
  {
    cambioPosc = arrayComprobacion[0];
    //console.log("Numero de la posicion 0 del array:: "+cambioPosc);
    arrayComprobacion[0] = arrayComprobacion[_num_Ale_PosArray];
    //console.log("Numero Nuevo de la posicon 0 "+ workerArray_2[0]);
    arrayComprobacion[_num_Ale_PosArray]= cambioPosc;
    numeroAleComprobar = arrayComprobacion[0];
  }
  else
  {
    numeroAleComprobar = arrayComprobacion[_num_Ale_PosArray];
  }
  for (let i = 1; i < arrayComprobacion.length; i++)
  {
    arrayDefinitivo[i-1] =arrayComprobacion[i];
  }
  for (let i = 0; i < arrayDefinitivo.length; i++)
  {
    arrayI_Posc[i]="null";
  }
  Operaciones(arrayDefinitivo, numeroAleComprobar);
}

function Operaciones(_arrayDefinitivo, _numeroAleComprobar)
{
  let listaOperacionArraysSumas=[0];
  let listaOperacionArraysRestas=[0];

  console.log("NUMERO COMPRBAR:: "+_numeroAleComprobar);
  console.log("ARRAY :: "+_arrayDefinitivo);

  for (let i = 0; i < _arrayDefinitivo.length; i++)
  {
      listaOperacionArraysSumas[i] = _numeroAleComprobar+"+"+_arrayDefinitivo[i];
      listaOperacionArraysRestas[i] = _numeroAleComprobar+"-"+_arrayDefinitivo[i];
  }
  Comprobamos(listaOperacionArraysSumas,listaOperacionArraysRestas,_arrayDefinitivo,_numeroAleComprobar);

}

function Operaciones2(_arrayDefinitivo,listaOperacionArrays,_i,_signo)
{
      arrayI_Posc[_i]=_i;

console.log("POSICIONES: "+arrayI_Posc);
console.log("ARRAY DEFINITVO: "+_arrayDefinitivo);

        for (let i = 0; i < _arrayDefinitivo.length; i++)
        {
          if(arrayI_Posc[i]!=i)
          {
            listaOperacionArrays[i]=listaOperacionArrays[_i]+_signo+_arrayDefinitivo[i];
          }
        }
      Comprobamos(listaOperacionArrays,0,_arrayDefinitivo);
}


function Comprobamos(_listaOperacionArraysSumas,_listaOperacionArraysRestas,_arrayDefinitivo,_numeroAleComprobar)
{
  let _i = 0;

      for (let i = 0; i < _arrayDefinitivo.length; i++)
      {
            if(workerResultado - eval(_listaOperacionArraysSumas[i]) == 0)
            {
              diferencia_min_suma =true;
              Econtrado (_listaOperacionArraysSumas[i]);
            }
            else if(workerResultado - eval(_listaOperacionArraysRestas[i]) == 0)
            {
              diferencia_min_resta =true;
              Econtrado (_listaOperacionArraysRestas[i]);
            }
        }

      if( diferencia_min_suma == false && encontrado == false)
      {
              for (let i = 0; i < _arrayDefinitivo.length; i++)
              {
                 if(eval(_listaOperacionArraysSumas[i]) > max && eval(_listaOperacionArraysSumas[i]) < workerResultado)
                  {
                      _i =i;
                        max = eval(_listaOperacionArraysSumas[i]);
                      if(max<workerResultado)
                      {
                          if(encontrado==false)
                          NoEncontrado(_listaOperacionArraysSumas,_arrayDefinitivo,_i,"+");
                      }
                  }

                  if(eval(_listaOperacionArraysRestas[i]) > min && eval(_listaOperacionArraysRestas[i]) > workerResultado)
                   {
                       _i =i;
                         min = eval(_listaOperacionArraysRestas[i]);
                       if(min>workerResultado)
                       {
                           if(encontrado==false)
                           NoEncontrado(_listaOperacionArraysRestas,_arrayDefinitivo,_i,"-");
                       }
                   }
              }
          }
}


function NoEncontrado(_listaOperacionArrays,_arrayDefinitivo,_i,_signo)
{
  console.log("OPERACION:  "+_listaOperacionArrays[_i]);
  Operaciones2(_arrayDefinitivo, _listaOperacionArrays,_i,_signo);
}

function Econtrado (_listaOperacionArrays)
{
  encontrado=true;
  console.log("ENCONTRADO::  "+_listaOperacionArrays);
}

 postMessage([workerResultado,workerArray_2]);
}
