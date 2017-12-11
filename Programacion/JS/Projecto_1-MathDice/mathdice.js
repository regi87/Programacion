/*
  Autor : Regi
  Proyecto MATH DICE

*/

//Declaración Variables
var numero_1 = 0;
var numero_2 = 0;
var array_tipo_operacion = ["SUMA","RESTA"];
var tipo_operacion = "tipo";
var contador = 0;
var resultado = 0;

RecogidaNum();


//Funciones mensajes por pantalla

function Avisos (tipo)
{

  if(tipo == 1)
  {
    alert("Numero Correcto");
    contador = 0;
  }
  else if(tipo == 2)
  {
    alert("Operación Valida");
    contador = 0;
  }
    else if (tipo == 3)
    {
      alert("Numero Incorrecto o Mal definido");
    }

    else if (tipo == 4)
    {
      alert("Operación NO Valida");
    }

}
//Función Validaciones
function RecogidaNum()
{

    while ( numero_1  < 1 || numero_1  > 12 || isNaN(numero_1)==true)
    {
      if(contador > 0)
        Avisos(3);

        numero_1 = parseInt(prompt("NÚMERO 1 SOLICITADO: "));
        contador = contador +1;

    }
    Avisos(1);

     while ( numero_2  < 1 || numero_2  > 12 || isNaN(numero_2)==true)
     {
       if(contador > 0)
         Avisos(3);
       numero_2 = parseInt(prompt("NÚMERO 2 SOLICITADO: "));
       contador = contador +1;


     }
       Avisos(1);

     while (tipo_operacion!= "SUMA" && tipo_operacion!= "RESTA")
     {

       if(contador > 0)
         Avisos(4);
      tipo_operacion=prompt("TIPO DE OPERACIÓN: ");
      tipo_operacion= tipo_operacion.toUpperCase();
      contador = contador +1;

     }

     Avisos(2);

     alert("DATOS VALIDADOS CON ÉXITO");
     Calculo ();
}
//Función para hacer el calculo y sacar por pantalla el resultado
function Calculo ()
{
  if(tipo_operacion == "SUMA")
    {
      resultado = numero_1 + numero_2;
      tipo_operacion = "+";
    }
    else
    {
      resultado = numero_1 - numero_2;
      tipo_operacion = "-";

    }
  document.write("LA OPERACIÓN A REALIZAR ES : "+numero_1+tipo_operacion+numero_2+ " = " +resultado);

}
