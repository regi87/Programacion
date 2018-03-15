<?php
require_once __DIR__.'/../vendor/autoload.php';
use Daw\models\classes\Usuario;
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Pagina home del proyecto</title>
  </head>
  <body>
    <?php
    //Creamos el objeto Usuario
    $usuario=new Usuario();
    //Para insetar/actualizar/eliminar usuario se deben descomentar !!
    //Insertar Usuario
        //$usuario->insertUsuario("Carlos","1985-2-12","Ramos Bosch",4,10,"ramos@ramos.com","ramos","ramos10");
    //Actualizar Usuario
      //$usuario->updateUsuario("Carlos","Carlos","1990-2-12","Bosch",5,12,"ramos@bosch.com","ramos30","ramos30");
    //Elimnar Usuario
      //$delete=$usuario->deleteUsuario("Carlos");
    //Ejemplo de uso de modelos
    //Listado Usuarios
        $resultado=$usuario->findAllUsuario();

        foreach ($resultado as $usuario)
        {
          echo "Nombre: ".$usuario["nombre"]."  ".$usuario["apellidos"]."<br>";
        }

    ?>
  </body>
</html>
