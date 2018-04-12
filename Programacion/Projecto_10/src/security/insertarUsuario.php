<?php
require_once __DIR__.'/../../vendor/autoload.php';
use Daw\models\classes\Usuario;
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>USUARIO INSERTADO</title>
  </head>
  <body>


<?php
      $usuario=new Usuario();
      $nombre =$_POST["nombre"];
      $apellidos =$_POST["apellidos"];
      $edad =$_POST["edad"];
      $curso =$_POST["curso"];
      $correo =$_POST["correo"];
      $user_name =$_POST["user_name"];
      $contrasenya =$_POST["contrasenya"];
      $contrasenya=hash('ripemd160', $contrasenya);
      echo $contrasenya;
      $usuario->insertUsuario($nombre, $edad, $apellidos, $curso, 200, $correo, $user_name, $contrasenya);

 ?>

     <a href="../../public/index.php">
       <input type='submit' value="Volver">
     </a>
</body>
</html>
