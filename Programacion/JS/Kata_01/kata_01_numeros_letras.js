/*
  Autor : Regi
  Proyecto Numeros - Letras
*/

//DECLARACIÓN DE VARIABLES
var array_unidades= [["uno", "dos","tres", "cuatro","cinco","seis","siete","ocho","nueve","diez"],
                      ["one","two","three","fourth","five","six","seven","eight","nine","ten"]];
var array_decenas= [["onze","doce","trece","catorce","quince","dieci"],
                    ["eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eigthteen","nineteen"]];
var array_decenas_2=[["veinte","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"],
                      ["twenty", "thirty","fourty","fifty","sixty","seventy","eighty","ninety"]];
var array_centenas =[["cien","doscientos","tescientos","cuatrocientos","quinientos","sescientos","setecientos","ochocientos","nuevecientos",],
                      ["hundred"]];
var array_milesimas = [["mil"],
                      ["thousand"]];
var idioma = "A";
var saltoAviso = 0;

//FUNCION MENSAJES DE AVISO DE FALLOS COGIDA DE DATOS
function AvisoFallo (aviso)
{
  if(aviso == "letra")
      alert("JUGADOR PATOSO SOLO SE TE PERMITE LA E O LA I !!!");

      else if (aviso == "numero" && idioma == "E")
        alert("JUGADOR PATOSO SOLO SE TE PERMITE PONER NÚMEROS Y MENORES DE 10000 !!!");

      else if (aviso == "numero" && idioma == "I")
        alert("DIRTY PLAYER ONLY ALLOWED TO PUT NUMBERS AND LESS THAN 10000!!!");

}
//RECOGIDA DE DATOS DEL USUARIO POR PANTALLA
function RecogidaDatos()
{
  var numero_player =0;


    while (idioma != "E" && idioma != "I")
    {
      if(saltoAviso > 0)
        AvisoFallo("letra");

      idioma = prompt("SELECCIONE EL IDIOMA : ESPAÑOL PULSE E O INGLES PULSE I ");
      idioma=idioma.toUpperCase();
      saltoAviso = saltoAviso +1;

    }
    saltoAviso = 0;

    while (numero_player == 0 || numero_player >9999 ||isNaN(numero_player)==true)
    {
      if(saltoAviso > 0)
        AvisoFallo("numero");

      if(idioma == "E")
      {
        numero_player = parseInt(prompt("NÚMERO  SOLICITADO: "));
      }
      else
       {
         numero_player = parseInt(prompt("REQUEST NUMBER: "));

       }
         saltoAviso = saltoAviso +1;
    }
    Seperacion(numero_player);
}
//FUNCIÓN PRIMER ANALISIS DE LOS DATOS RECOGIDOS Y ENVIO A SUS RESPECTIVAS FUNCIONES PARA EL TRATAMIENTO DE ESTOS
function Seperacion (numero_player)
{
  var numero_desc_1 = 0;
  var numero_desc_2 = 0;
  var string_numero_desc_2 = "";


    if(numero_player <11)
    {
      numero_desc_1 = numero_player%10;

        if(numero_player == 10)
          numero_desc_1 = 10;

        Busqueda_Unidades_Decenas(numero_desc_1,"tipo_1");
    }
    else if(numero_player >10 && numero_player <16)
    {
      numero_desc_2 = numero_player%100/10;
      string_numero_desc_2 = numero_desc_2.toString();
      numero_desc_2=string_numero_desc_2[2].split(".");

      Busqueda_Unidades_Decenas(numero_desc_2,"tipo_2");
    }
    else if(numero_player > 15 && numero_player < 20)
    {
      numero_desc_2 = numero_player%100/10;
      string_numero_desc_2 = numero_desc_2.toString();
      numero_desc_2=string_numero_desc_2[2].split(".");

      Busqueda_Unidades_Decenas(numero_desc_2,"tipo_3");
    }

    else if (numero_player > 19 && numero_player <100)
    {
      string_numero_desc_2 = numero_player.toString();
      string_numero_desc_2 =string_numero_desc_2.split("",2);

      Busqueda_Decenas(string_numero_desc_2[0], string_numero_desc_2[1]);
    }
    else if (numero_player > 99 && numero_player <1000)
    {
      string_numero_desc_2 = numero_player.toString();
      Busqueda_Centenas(string_numero_desc_2[0], string_numero_desc_2[1],string_numero_desc_2[2]);
    }
    else if (numero_player > 999 && numero_player < 10000)
    {
      string_numero_desc_2 = numero_player.toString();
      Busqueda_Milesimas(string_numero_desc_2[0], string_numero_desc_2[1],string_numero_desc_2[2],string_numero_desc_2[3]);
    }
}
//FUNCIÓN BUSQUEDA POR UNIDADES Y DECENAS 1º PARTE
function Busqueda_Unidades_Decenas(numero_string, tipo)
{
  if(tipo == "tipo_1")
  {
    if(idioma == "I")
    {
      console.log(array_unidades[1][numero_string-1]);
    }
    else
      {
        console.log(array_unidades[0][numero_string-1]);
      }
  }
  else if (tipo == "tipo_2")
  {
    if(idioma == "I")
    {
      console.log(array_decenas[1][numero_string-1]);
    }
    else
      {
        console.log(array_decenas[0][numero_string-1]);

      }
  }
  else if (tipo == "tipo_3")
  {
    if(idioma == "I")
    {
      console.log(array_decenas[1][numero_string-1]);
    }
    else
      {
        console.log(array_decenas[0][5]+array_unidades[0][numero_string-1]);
      }
  }
}
//FUNCIÓN PARA LAS DECENAS 2º PARTE
function Busqueda_Decenas(numero_string_1,numero_string_2)
{
  if(numero_string_2 == 0)
  {
      if(idioma == "I")
      {
        console.log(array_decenas_2[1][numero_string_1-2]);

      }
      else
      {
        console.log(array_decenas_2[0][numero_string_1-2]);

      }
  }
  else if(numero_string_2 > 0)
  {
    if(idioma == "I")
    {
      console.log(array_decenas_2[1][numero_string_1-2]+" "+array_unidades[1][numero_string_2-1]);

    }
    else
    {
      console.log(array_decenas_2[0][numero_string_1-2]+" y "+array_unidades[0][numero_string_2-1]);

    }
  }
}
//FUNCION PARA LAS DECENAS
function Busqueda_Centenas(numero_string_1,numero_string_2,numero_string_3)
{
  if(numero_string_2==0 && numero_string_3==0)
    {
      if(idioma == "I")
      {
          console.log(array_unidades[1][numero_string_1-1] +" "+array_centenas[1][0]);
      }
      else
       {
         console.log(array_centenas[0][numero_string_1-1]);

      }
    }
    else if (numero_string_2!=0 && numero_string_3==0)
    {
      if(idioma == "I")
      {
        console.log(array_unidades[1][numero_string_1-1] +" "+array_centenas[1][0]+" "+array_decenas_2[1][numero_string_2-2]);

      }
      else
      {
        console.log(array_centenas[0][numero_string_1-1]+" "+array_decenas_2[0][numero_string_2-2]);
      }

    }
    else if (numero_string_2!=0 && numero_string_3!=0)
    {
      if(idioma == "I")
      {
        console.log(array_unidades[1][numero_string_1-1]+ " "+ array_centenas[1][0]+" "+array_decenas_2[1][numero_string_2-2]+" "+array_unidades[1][numero_string_3-1]);
      }
      else
      {
        console.log(array_centenas[0][numero_string_1-1]+" "+array_decenas_2[0][numero_string_2-2]+" y "+array_unidades[0][numero_string_3-1]);
      }
    }
    else if (numero_string_2==0 && numero_string_3!=0)
    {
      if(idioma == "I")
      {
        console.log(array_unidades[1][numero_string_1-1] + " "+array_centenas[1][0]+"  "+array_unidades[1][numero_string_3-1]);
      }
      else
      {
        console.log(array_centenas[0][numero_string_1-1]+" y "+array_unidades[0][numero_string_3-1]);

      }
    }
}
//FUNCION PARA LAS MILÉSIMAS
function Busqueda_Milesimas (numero_string_1,numero_string_2,numero_string_3,numero_string_4)
{
  console.log(numero_string_1+numero_string_2+numero_string_3+numero_string_4);
  if(numero_string_1 == 1 && idioma == "E")
  {
      if(numero_string_2==0 && numero_string_3==0 && numero_string_4 == 0)
      {
        console.log(array_milesimas[0][numero_string_1-1]);
      }
      else if(numero_string_3==0 && numero_string_4 == 0)
      {
        console.log(array_milesimas[0][numero_string_1-1]+" "+array_centenas[0][numero_string_2-1]);
      }
      else if(numero_string_4 == 0)
      {
        console.log(array_milesimas[0][numero_string_1-1]+" "+array_centenas[0][numero_string_2-1]+" "+array_decenas_2[0][numero_string_3-2]);
      }
      else
      {
        console.log(array_milesimas[0][numero_string_1-1]+" "+array_centenas[0][numero_string_2-1]+" "+array_decenas_2[0][numero_string_3-2]+" y "+array_unidades[0][numero_string_4-1]);
      }
  }

  else
  {
    if(numero_string_2 == 0 && numero_string_3 ==0 && numero_string_4==0)
    {
      if(idioma == "I")
      {
        console.log(array_unidades[1][numero_string_1-1]+" "+array_milesimas[1][0]);
      }
      else
       {
         console.log(array_unidades[0][numero_string_1-1]+" "+array_milesimas[0][0]);
      }
    }
      else if(numero_string_3 ==0 && numero_string_4==0)
      {
        if(idioma == "I")
        {
          console.log(array_unidades[1][numero_string_1-1]+" "+array_milesimas[1][0]+" "+array_unidades[1][numero_string_2-1]+" "+array_centenas[1][0]);
        }
        else
        {
          console.log(array_unidades[0][numero_string_1-1]+" "+array_milesimas[0][0]+" "+array_centenas[0][numero_string_2-1]);
        }
      }
      else if(numero_string_4==0)
      {
        if(idioma == "I")
        {
          console.log(array_unidades[1][numero_string_1-1]+" "+array_milesimas[1][0]+" "+array_unidades[1][numero_string_2-1]+" "+array_centenas[1][0]+" "+array_decenas_2[1][numero_string_3-2]);
        }
        else
         {
           console.log(array_unidades[0][numero_string_1-1]+" "+array_milesimas[0][0]+" "+array_centenas[0][numero_string_2-1]+" "+array_decenas_2[0][numero_string_3-2]);
        }
      }
      else
      {
        if(idioma == "I")
        {
          console.log(array_unidades[1][numero_string_1-1]+" "+array_milesimas[1][0]+" "+array_unidades[1][numero_string_2-1]+" "+array_centenas[1][0]+" "+array_decenas_2[1][numero_string_3-2]+"  "+array_unidades[1][numero_string_4-1]);
        }
        else
        {
          console.log(array_unidades[0][numero_string_1-1]+" "+array_milesimas[0][0]+" "+array_centenas[0][numero_string_2-1]+" "+array_decenas_2[0][numero_string_3-2]+" y "+array_unidades[0][numero_string_4-1]);
        }
      }
  }

}
//ENTRADA PROGRAMA (MAIN)
RecogidaDatos();
