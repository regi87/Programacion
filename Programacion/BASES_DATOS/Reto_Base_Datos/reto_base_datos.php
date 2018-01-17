<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Reto</title>
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
            //interactuar con la base de datos
            echo "<h1>Paises del mundo</h1>";
            $resultado = $conector->query("SELECT Name,SurfaceArea FROM country where Continent='South America' order by SurfaceArea desc");
            echo "El numero de paises es: ".$resultado->num_rows."<br>";

            foreach ($resultado as $fila)
            {
              echo "Pais: ".$fila['Name']." ".$fila['SurfaceArea']." km'2"."<br>";
            }
        }
     ?>

  </body>
</html>
