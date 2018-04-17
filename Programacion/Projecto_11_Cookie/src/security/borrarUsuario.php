<?php
require_once __DIR__.'/../../vendor/autoload.php';
use Daw\models\classes\Usuario;
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Pagina borrar Usuario</title>
  </head>
  <body>
    <h1>Borarr USUARIOS</h1>
    <?php
        //Creamos el objeto Usuario
        $usuario=new Usuario();

    ?>
              <?php //Llamamos a la función para actualizar el usuario

              //Función para borrar Usuario dependiendo del nombre
              $usuario->deleteUsuario("Carlos");
              ?>
      <br>
      <a href="../../public/index.php">
        <input type='submit' value="Volver">
      </a>

  </body>
</html>
