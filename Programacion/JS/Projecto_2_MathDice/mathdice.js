/*
  Autor : Regi
  Proyecto MATH DICE

*/

var dado12_caras = 12;
var dado6_caras = [0,0,0];
var dado3_caras = [0,0];
//array para añadir la operación
var comprobacionOperacion =[0];
//contador para index del array comprobacionOperacion
var contador_operacion = 0;
//contador botones operaciones
var contador_boton_operacion=0;

//comprobacion ultimo boton pulsado
var comprobacionBoton = 0;

//Funcion para darle valor a los arrays de cada dado
function ValoresDados ()
{
  dado12_caras = parseInt (Math.random() * (13 - 1) + 1);

    for(let i = 0; i< 3; i++)
      dado6_caras[i] = parseInt (Math.random() * (7 - 1) + 1);

    for(let i = 0; i<2; i++)
      dado3_caras[i] = parseInt (Math.random() * (4 - 1) + 1);

      MostrarPorPantallaDados();
}
//Función para recogida de id de HTML y incilizalición de las variables de la función
//document.getElementById("dado1"); dado1 = id de HTML
function MostrarPorPantallaDados ()
{
  let elementoDado=document.getElementById("dado1");

//array para añadir los ids de HTML para los 3 dados de 6 caras
  let elementoDado_6caras =[0,0,0]

  //array para añadir los ids de HTML para los 2 dados de 3 caras
  let elementoDado_3caras =[0,0];

  //array para añadir los ids de HTML para los dados para añadir el número
  let bot_dado6_1 = [0,0,0];
  //array para añadir los ids de HTML para los dados para añadir el número
  let bot_dado3_1 = [0,0];

  //SUMA Y RESTA
  let boton_suma = document.getElementById("boton_suma");
  let boton_resta = document.getElementById("boton_resta");


//For para los ids de los 3 dado de 6 caras
  for (let i=2; i <5; i++)
  {
    elementoDado_6caras[i] = document.getElementById("dado"+i);
  }
  //For para los ids de los 2 dado de 3 caras

  for (let i=5; i <7; i++)
  {
    elementoDado_3caras[i] = document.getElementById("dado"+i);
  }

//Mostramos el contenido enviandolo al HTML
  elementoDado.textContent=("El número del dado de 12 caras es : "+dado12_caras);

    for(let i = 0; i<dado6_caras.length; i++)
    {
      elementoDado_6caras[i+2].textContent=("Los números del dado de 6 caras són el número:"+eval(i+1)+"º"+ "----"+dado6_caras[i]);
      bot_dado6_1[i]= document.getElementById("bot_dado6_"+eval(i+1));
      bot_dado6_1[i].value=dado6_caras[i];
    }

    for(let i = 0; i<dado3_caras.length; i++)
    {
      elementoDado_3caras[i+5].textContent=("Los números del dado de 6 caras són el número:"+eval(i+1)+"º"+"----"+dado3_caras[i]);
      bot_dado3_1[i]= document.getElementById("bot_dado3_"+eval(i+1));
      bot_dado3_1[i].value=dado3_caras[i];
    }

      boton_suma.value = "+";
      boton_resta.value = "-";
}

function insertText(tipo_Dado,nombreDado_HTML)
    {
        var textArea_numero = document.getElementById("text_area");

        comprobacionBoton = nombreDado_HTML;

//condiciones para no poder añadir más + o - a la comprobación
        if(nombreDado_HTML == "boton_resta" || nombreDado_HTML == "boton_suma")
        {
            contador_boton_operacion += 1;
        }
        //Button disabled
        if(nombreDado_HTML != "boton_resta" && nombreDado_HTML != "boton_suma" )
        {
          document.getElementById(nombreDado_HTML).disabled = true;
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

  if(comprobacionBoton != "boton_resta" && comprobacionBoton != "boton_suma" )
  {
      resultado = resultado.replace(/,/gi,'');
      document.getElementById(nombre_boton).disabled = true;

      if(eval(resultado)==dado12_caras)
          alert("GANASTE EL JUEGO EL NUMERO DEL DADO ERA: "+dado12_caras+"\n"+" Y TU RESULTADO ES: "+eval(resultado));
        else
        {
          alert("PIERDES !!!"+"\n"+"EL NUMERO DEL DADO ES: "+dado12_caras+"\n"+"Y TU RESULTADO ES: "+eval(resultado) );
        }
    }
}

ValoresDados();
