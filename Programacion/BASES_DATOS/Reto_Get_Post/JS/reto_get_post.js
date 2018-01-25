
var arrayForm=[];
$.ajax({
  type: "GET",
  datatype: 'json',
  url: '../PHP/reto_get_post.php',
  success: function(data) {
     arrayForm = jQuery.parseJSON(data);
  }
});


function Funcion()
{
  var form = document.getElementById("myDatalist").value;
  var superficie = document.getElementById("superficie").value;
  var resultado = document.getElementById("resultado");
  var arr=[];

  console.log(form);
  console.log(superficie);
  console.log(arrayForm);
    for (let i = 0; i < arrayForm.length; i++)
    {
      if(arrayForm[i].Continent == form && arrayForm[i].SurfaceArea > superficie)
          {
            arr[i]= arrayForm[i].Name+"<br>";
            console.log(arrayForm[i].Name);
          }

    //  console.log(arrayForm[i].SurfaceArea+" -- "+arrayForm[i].Name);
    }
    resultado.innerHTML = arr;
}
