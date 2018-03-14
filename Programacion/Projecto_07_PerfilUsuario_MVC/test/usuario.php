
<?php
  require "../model/Usuario.php";
  //Creamos conexion
  $usuario=new Usuario();
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>
    </title>
  </head>
  <body>
    <?php
        $resultado=$usuario->findAllUsuario();

        foreach ($resultado as $usuario)
        {
          echo "Nombre: ".$usuario["nombre"]."  ".$usuario["apellidos"]."<br>";
        }

    ?>
  </body>
</html>
