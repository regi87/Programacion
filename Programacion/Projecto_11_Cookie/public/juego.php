<?php
require_once __DIR__.'/../vendor/autoload.php';
use Daw\security\Session;
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>JUEGO</h1>
    <?php
      $user_name=$_GET["user_name"];
      $session= new Session($user_name);

     ?>
     <!-- Bienvenida al Usuario Logueado-->
     <div align="right">
       <p>Bienvenido <?php echo $session->getUsuario()?></p>
     </div>
     <!-- NOMBRE USUARIO Y SU PUNTUACIÓN -->
     <h2> El Usuario <?php echo  $session->getUsuario()?></h2>
     <br><br><br>
     <a href="index.php">
       <input type="button" name="" value="LOGOUT" onclick= <?php $session->Logout();?> />
     </a>
  </body>
</html>
