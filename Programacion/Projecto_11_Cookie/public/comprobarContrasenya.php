<?php
require_once __DIR__.'/../vendor/autoload.php';
use Daw\models\classes\Usuario;
use Daw\security\Session;
use Daw\security\Cookie;


  $user_name=$_POST["user_name"];
  $contrasenya=$_POST["contrasenya"];

  $usuario=new Usuario();

  $resultado=0;
  $contar=0;
  $resultado=$usuario->comprobateUser($user_name,$contrasenya);
  $contar = mysqli_num_rows($resultado);

  if (isset($_POST["checkbox"]))
  {
    //echo "CHECKEADO";
    //Guardamos las Cookies
    $cookie=new Cookie($user_name,$contrasenya);
  }
 else
 {
   //echo "NO CHECKEADO";
 }

  if ($contar == 0)
  {
     header("Location: index.php");
  }
  else
   {
     header("Location: juego.php?user_name=".$user_name);
   }

 ?>
