/*
  Autor : Regi
  Proyecto MATH DICE IA
*/

//dado 12 caras
var dado12_caras = 12;
//Un array para los tres dados de 6 caras
var arrayDado_6caras = [0,0,0];
//Un array para los dos dados de 3 caras
var arrayDado_3caras = [0,0];
// Nodos padres para la colocación del hijo
var nodoBoton_padre_1 = document.getElementById("botones_1");
var nodoBoton_padre_2 = document.getElementById("botones_2");
//nodo Plantilla
var nodoBoton_plantilla = document.getElementById("boton_");
//array nodos
var arrayNodos = [0];
//contador botones operaciones
var contador_boton_operacion=0;
//array para añadir la operación
var comprobacionOperacion =[0];
//contador para index del array comprobacionOperacion
var contador_operacion = 0;
//comprobacion ultimo boton pulsado
var comprobacionBoton = 0;
//Nuevo Hilo en Backgroud
var myWorker = new Worker('Worker_IA.js');

//Funcion para darle valor a los arrays de cada dado
function ValoresDados ()
{
  let resultado=0;
  dado12_caras = parseInt (Math.random() * (13 - 1) + 1);
  while (resultado < dado12_caras)
  {
      for(let i = 0; i< 3; i++)
      {
        arrayDado_6caras[i] = parseInt (Math.random() * (7 - 1) + 1);
        resultado +=arrayDado_6caras[i];
      }

      for(let i = 0; i<2; i++)
      {
        arrayDado_3caras[i] = parseInt (Math.random() * (4 - 1) + 1);
        resultado +=arrayDado_3caras[i];
      }
      console.log(resultado);
   }

  //Función para enviar los datos a la IA
       IA(dado12_caras, arrayDado_6caras, arrayDado_3caras)

        MostrarPorPantallaDados();

}

function MostrarPorPantallaDados ()
{
  let elementoDado=document.getElementById("dado1");

  elementoDado.textContent = ("NÚMERO: "+dado12_caras);


    for(let i=0; i<5; i++)
    {
      arrayNodos[i]=nodoBoton_plantilla.cloneNode(true);

      //nodoPlantilla cambio manual
      if(i==0)
      {
       nodoBoton_plantilla.value=arrayDado_6caras[i];
       nodoBoton_plantilla.id ="boton_"+i;
      }
      else
      {
        arrayNodos[i].id = "boton_"+i;

        if(i<3)
        {  //añade los botones en la 1º posc
          arrayNodos[i].value = arrayDado_6caras[i];
          nodoBoton_padre_1.appendChild(arrayNodos[i]);
        }

          if(i>=3)
          {  //añade los botones en la 2º posc
            arrayNodos[i].value = arrayDado_3caras[i-3];
            nodoBoton_padre_2.appendChild(arrayNodos[i]);
          }

        }

    }

}

function insertText(tipo_Dado,nombreDado_HTML)
    {
        var textArea_numero = document.getElementById("text_area_Player");

        comprobacionBoton = nombreDado_HTML;

//condiciones para no poder añadir más + o - a la comprobación
        if(nombreDado_HTML == "boton_resta" || nombreDado_HTML == "boton_suma")
        {
             contador_boton_operacion += 1;
            document.getElementById(nombreDado_HTML).style.backgroundColor= "#FF8000";
        }

        //Button disabled
        if(nombreDado_HTML != "boton_resta" && nombreDado_HTML != "boton_suma" )
        {
          document.getElementById(nombreDado_HTML).disabled = true;
          document.getElementById(nombreDado_HTML).style.backgroundColor= "#FA5858";
          document.getElementById("boton_resta").style.backgroundColor= "#008CBA";
          document.getElementById("boton_suma").style.backgroundColor= "#008CBA";

          contador_boton_operacion = 0;
        }

        if(contador_boton_operacion < 2)
        {
          textArea_numero.textContent += tipo_Dado;
          numeroRecogido = tipo_Dado;
          comprobacionOperacion[contador_operacion]=tipo_Dado;
          contador_operacion++;
        }
    }

    function ComprobaciónOperación(nombre_boton)
    {
      let resultado = comprobacionOperacion.toString();

      if(comprobacionBoton !=  "boton_resta" && comprobacionBoton != "boton_suma" )
      {
          resultado = resultado.replace(/,/gi,'');
          document.getElementById(nombre_boton).style.backgroundColor= "#FA5858";
          document.getElementById(nombre_boton).disabled = true;

          if(eval(resultado)==dado12_caras)
              alert("GANASTE EL JUEGO EL NUMERO DEL DADO ERA: "+dado12_caras+"\n"+" Y TU RESULTADO ES: "+eval(resultado));
            else
            {
              alert("PIERDES !!!"+"\n"+"EL NUMERO DEL DADO ES: "+dado12_caras+"\n"+"Y TU RESULTADO ES: "+eval(resultado) );
            }
        }
    }


    //Worker
    function IA(dado12_caras, arrayDado_6caras, arrayDado_3caras)
    {
      myWorker.postMessage([dado12_caras,arrayDado_6caras,arrayDado_3caras]);

      myWorker.onmessage = function(e)
      {
           e.data;
          console.log('El Resultado es: '+e.data);
      }

  }
ValoresDados ();
