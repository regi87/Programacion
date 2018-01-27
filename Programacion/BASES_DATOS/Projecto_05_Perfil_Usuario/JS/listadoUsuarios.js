
var arrayForm=[];

$.ajax({
  type: "GET",
  datatype: 'json',
  url: '../PHP/listadoUsuarios.php',
  success: function(data)
  {
    console.log(data);
     arrayForm = jQuery.parseJSON(data);
     Funcion();
  }
});



function Funcion()
{
  var arr=[];
console.log(arrayForm.nomre);
  var resultado = document.getElementById("resultado");


    for (let i = 0; i < arrayForm.length; i++)
    {
            resultado.innerHTML= [arrayForm[i].nombre+"  "+arrayForm[i].apellidos+"<br>"];
            console.log(arrayForm[i]);
    }
    resultado.innerHTML = arr;
}
