
<?php
require "../model/Usuario.php";
//Creamos conexion
$usuario=new Usuario();
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <?php

      $insert=$usuario->insertUsuario("Carlos","1985-2-12","Ramos Bosch",4,10,"ramos@ramos.com","ramos","ramos10");
      $resultado=$usuario->findAllUsuario();

     foreach ($resultado as $usuario)
      {
        echo "Nombre: ".$usuario["nombre"]."  ".$usuario["apellidos"]."<br>";
      }
       ?>

  </body>
</html>
