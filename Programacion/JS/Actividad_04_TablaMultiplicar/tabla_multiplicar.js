/*
Autor : Regino Bosch Lozano
Actividad 04 Tabla Multiplicar
*/

var numero_player = 0;

alert('TABLA DE MULTIPLICAR');

while(numero_player <1 || numero_player >100 || isNaN(numero_player) == true)
    numero_player =parseInt( window.prompt("NÚMERO SOLICITADA: "));

for(i =0; i<=10; i++)
{
  console.log(numero_player+"*"+i+"="+ i*numero_player);
    document.write(numero_player+"*"+i+"="+ i*numero_player+ "<br>");
}
