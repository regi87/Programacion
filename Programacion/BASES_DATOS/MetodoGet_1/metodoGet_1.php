<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Prueba URL GET</title>
  </head>
  <body>

<?php
          $conector = new mysqli("localhost","root","","world");
            if($conector ->connect_errno)
            {
              echo "Fallo al conectar a MySQL: ".$conector->connect_error;
            }
            else
            {
              echo "Conectado a la DB";
            $busqueda = $_GET["code"];
            $consulta="SELECT * FROM country where code='".$busqueda."'";
            echo "<br><br>";
              $resultado = $conector->query($consulta);

             foreach ($resultado as $fila)
             {
               echo $fila["Name"];
             }

            }
       ?>

  </body>
</html>
