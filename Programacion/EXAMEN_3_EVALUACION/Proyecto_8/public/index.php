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
        //$usuario->insertUsuario("Regi","Bosch Lozano","regi","Regi175",1987,"1ºDaw",100,"regi.two@gmail.com");
    //Actualizar Usuario
    //  $usuario->updateUsuario("Regi","Regino","Bosch Lozano","regi","Regi175",1987,"1ºDaw",100,"regi.two@gmail.com");
    //Elimnar Usuario
      //$delete=$usuario->deleteUsuario("Regi");
    //Ejemplo de uso de modelos
    //Listado Usuarios
        $resultado=$usuario->findAllUsuario();
        foreach ($resultado as $usuario)
        {
          echo "Nombre: ".$usuario["nombre"]."  ".$usuario["apellidos"]."<br>"." ".$usuario["edad"];
        }

    ?>
  </body>
</html>
