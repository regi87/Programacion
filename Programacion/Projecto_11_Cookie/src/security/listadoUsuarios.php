<?php
require_once __DIR__.'/../../vendor/autoload.php';
use Daw\models\classes\Usuario;
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Pagina listado Usuarios</title>
  </head>
  <body>
    <h1>Listado USUARIOS</h1>
    <?php
        //Creamos el objeto Usuario
        $usuario=new Usuario();

        $resultado=$usuario->findAllUsuario();
    ?>
              <?php //Mostramos Usuarios de la base de datos
                foreach ($resultado as $usuario)
                {
              ?>
                  <p><?php echo $usuario["nombre"]." ".$usuario["apellidos"];?></p>
             <?php
                }
              ?>
      <br>
      <a href="../../public/index.php">
        <input type='submit' value="Volver">
      </a>

  </body>
</html>
