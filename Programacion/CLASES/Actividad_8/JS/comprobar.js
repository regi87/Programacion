


$(document).ready(function()
{    /*
    *Funcion Javascript para enviar formularios sin recargar la página mediante ajax
    */
    /* "escuchamos" el click en el botón con id "submit" solo si ya se ha cargado la página*/

    $(function()
    {
       $('#submit_1').click(function(e)
      {
          //evitamos la carga de la página
          e.preventDefault();
          //recogemos el id del formulario a enviar
          var form = $(this).attr("form-id");

          // Get the Login Inputs value and trim it
            var base = $.trim($('#base').val());
            var altura = $.trim($('#altura').val());
            var lado_1 = $.trim($('#lado_1').val());
            var lado_2 = $.trim($('#lado_2').val());
            var lado_3 = $.trim($('#lado_3').val());

            // Check if empty of not
            if (base  === '' || altura  === '' ||  lado_1  === '' || lado_2  === '' || lado_3  === '' )
            {
                alert('Campos Obligatorios');
                return false;
            }
            else
             {
               //llamamos a la función que contendrá el llamado ajax dándole como argumento el id del formulario
                 submitForm(form);
             }

       });
    });

    $(function()
    {
       $('#submit_2').click(function(e)
      {
          //evitamos la carga de la página
          e.preventDefault();
          //recogemos el id del formulario a enviar
          var form = $(this).attr("form-id");

          // Get the Login Inputs value and trim it
            var lado = $.trim($('#lado').val());
            var longitud = $.trim($('#longitud').val());


            // Check if empty of not
            if (lado  === '' || longitud  === '' )
            {
                alert('Campos Obligatorios');
                return false;
            }
            else
             {
               //llamamos a la función que contendrá el llamado ajax dándole como argumento el id del formulario
                 submitForm(form);
             }
       });
    });


        $(function()
        {
           $('#submit_3').click(function(e)
          {
              //evitamos la carga de la página
              e.preventDefault();
              //recogemos el id del formulario a enviar
              var form = $(this).attr("form-id");

              // Get the Login Inputs value and trim it
                var radio = $.trim($('#radio').val());


                // Check if empty of not
                if (radio  === '')
                {
                    alert('Campos Obligatorios');
                    return false;
                }
                else
                 {
                   //llamamos a la función que contendrá el llamado ajax dándole como argumento el id del formulario
                     submitForm(form);
                 }
           });
        });

    //fuera de la carga de la página, creamos la función que recibe el id del formulario a enviar.

    function submitForm(form){
       //recogemos el "action" a donde se enviarán los datos mediante "POST"
       var action = $("form#" + form).attr("action");
       //ahora recogemos los datos de los controles que hayamos definido y los serializamos como un formulario con Javascript
       var datos = $('form#' + form).serialize();

       //enviamos los datos mediante Ajax con la función de Jquery que nos facilita esta tarea
       $.ajax({
          //url a enviar
          url: '../Calculo/calculo.php',
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
          var returnedData = JSON.parse(respuesta);

          if(returnedData["form"]=="form_trian")
            MostramosInformacionTriangulo(returnedData["altura"],returnedData["base"],returnedData["area"],returnedData["perimetro"]);

            else if(returnedData["form"]=="form_cuad")
              MostramosInformacionCuadrado(returnedData["lado"],returnedData["longitud"],returnedData["area"],returnedData["perimetro"]);
              else
                MostramosInformacionCirculo(returnedData["radio"],returnedData["longitud"],returnedData["area"],returnedData["perimetro"]);



         /*
         var returnedData = JSON.parse(respuesta);
         console.log(returnedData["base"]);
         window.location='../PHP_Resultado/resultado.php?respuesta='+solucionTria;
         */

       });
    }

    function MostramosInformacionTriangulo(_altura,_base,_area,_perimetro)
    {
        document.getElementById("alturaTria").innerHTML=_altura;
        document.getElementById("baseTria").innerHTML=_base;
        document.getElementById("areaTria").innerHTML=_area;
        document.getElementById("perimetroTria").innerHTML=_perimetro;

    }

    function MostramosInformacionCuadrado(_altura,_base,_area,_perimetro)
    {
        document.getElementById("ladoCuad").innerHTML=_altura;
        document.getElementById("longitudCuad").innerHTML=_base;
        document.getElementById("areaCuad").innerHTML=_area;
        document.getElementById("perimetroCuad").innerHTML=_perimetro;

    }

    function MostramosInformacionCirculo(_radio,_base,_area,_perimetro)
    {
        document.getElementById("radioCirc").innerHTML=_radio;
        document.getElementById("longitudCircu").innerHTML=_base;
        document.getElementById("areaCirc").innerHTML=_area;
        document.getElementById("perimetroCirc").innerHTML=_perimetro;

    }
});
