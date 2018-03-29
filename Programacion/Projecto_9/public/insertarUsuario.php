<?php
require_once __DIR__.'/../vendor/autoload.php';
use Daw\models\classes\Usuario;
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Pagina Insertar Usuario</title>
  </head>
  <body>
    <h1>Insertar USUARIOS</h1>
    <?php
        //Creamos el objeto Usuario
        $usuario=new Usuario();

    ?>
              <?php //Llamamos a la función para actualizar el usuario

              //Función para actualizar Usuario dependiendo del nombre de usuario primer campo
              //le añadiremos todos los campos para la actualización
              $usuario->insertUsuario("Ricardo","1990-02-12" , "Garcia Campestre", 6, 120, "ricardo@bosch.com", "ricardo45", "ricardo45");
              ?>
      <br>
      <a href="../../public/index.php">
        <input type='submit' value="Volver">
      </a>

  </body>
</html>
