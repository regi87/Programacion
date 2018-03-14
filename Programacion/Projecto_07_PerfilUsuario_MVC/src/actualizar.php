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
      $insert=$usuario->updateUsuario("Carlos","Carlos","1990-2-12","Ramos Bosch",5,12,"ramos@bosch.com","ramos30","ramos30");
      $resultado=$usuario->findAllUsuario();

     foreach ($resultado as $usuario)
      {
        echo "Nombre: ".$usuario["nombre"]."  ".$usuario["apellidos"]."-".$usuario["correo"]." ".$usuario["user_name"]."<br>";
      }
       ?>

  </body>
</html>
