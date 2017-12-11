var botonReseteo = document.getElementById("reseteo");

function MensajeInicial()
{
  let parrafo_1=document.getElementById("parrafo_1");

  parrafo_1.style.font = "italic bold 20px arial,serif";
  parrafo_1.textContent=("SE SOLICITA DOS NÚMEROS PARA LA COMPROBACIÓN");

  botonReseteo.disabled = true;
}

function Comprobacion()
{
  let numeros = [0];
  let contador_pares = 0;
  let botonComprobar = document.getElementById("enviar_num");


    for(let i = 0; i<2; i++)
    {
      numeros[i]=document.getElementById("text_area_"+eval(i+1)).value;
      contador_pares = i+1;
    }

    for(let i = 0; i<numeros.length; i++)
    {
      if(isNaN(numeros[i])==true)
          alert(numeros[i]+" --> LETRAS NO PERMITIDAS!!");

      else if(numeros[i]==0 )
      {
          alert(numeros[i]+" NÚMERO NO VALIDO!!");
      }

      else if(numeros[i]% 2 != 0 )
      {
            alert(numeros[i]+" NO ES UN NÚMERO PAR !!");
      }
      else
        {
            alert(numeros[i]+" ES NÚMERO PAR");
            contador_pares -=1;
            console.log("HOLA");
        }
        console.log(contador_pares);
    }
    if(contador_pares == 0)
    {
      alert("FIN LOS DOS NÚMEROS SON PARES"+" VOlVER A PROBAR DANDOLE AL BOTON OTRA VEZ");
      botonComprobar.disabled = true;
      botonReseteo.disabled = false;


    }

}

MensajeInicial();
