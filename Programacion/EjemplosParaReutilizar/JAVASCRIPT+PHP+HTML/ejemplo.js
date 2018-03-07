


$(document).ready(function()
{

  /*
    *Funcion Javascript para enviar formularios sin recargar la página mediante ajax
    */
    /* "escuchamos" el click en el botón con id "submit" solo si ya se ha cargado la página*/
    $(function()
    {

       $('#submit').click(function(e)
      {

          //evitamos la carga de la página
          e.preventDefault();

          //recogemos el id del formulario a enviar
          var form = $(this).attr("form-id");
          //input nombre
          var base = $.trim($('#numero').val());

          let comprobar = false;

          //Comprobamos que los inputs no estén vacios
          $('input').each(function()
          {
            if(!$(this).val())
            {
                alert('Some fields are empty');
                comprobar=false;
                console.log($(this).attr("id"));
                document.getElementById($(this).attr("id")).style.borderColor = "red";

               return false;
            }
            else
            {
              comprobar=true;

            }
          });

          //llamamos a la función que contendrá el llamado ajax dándole como argumento el id del formulario
          if(comprobar == true)
          submitForm(form);

       });
    });

    //fuera de la carga de la página, creamos la función que recibe el id del formulario a enviar.

    function submitForm(form){
       //recogemos el "action" a donde se enviarán los datos mediante "POST"
       var action = $("form#" + form).attr("action");
       //ahora recogemos los datos de los controles que hayamos definido y los serializamos como un formulario con Javascript
       var datos = $('form#' + form).serialize();
       console.log(datos);
       //enviamos los datos mediante Ajax con la función de Jquery que nos facilita esta tarea
       $.ajax({
          //url a enviar
          url: 'ejemplo.php',
          //el tipo GET o POST en nuestro caso POST
          type: 'POST',
          //evitamos el cacheo de los datos
          cache: false,
          //definimos los datos a enviar, nosotros ya los tenemos definidos en la variable "datos"
          data: datos
          //cuando se recibe la respuesta se activa el siguiente trozo de código
          //la r que recibe la funcion de callback es "response" que viene del script PHP
       })
       .done(function(respuesta)
       {
         console.log(respuesta);

          var returnedData = JSON.parse(respuesta);
          console.log(returnedData);
          Respuesta(returnedData);
       });
    }

    function Respuesta(_returnedData)
    {
      document.getElementById("respuesta").innerHTML=_returnedData["numero"];
    }
});
