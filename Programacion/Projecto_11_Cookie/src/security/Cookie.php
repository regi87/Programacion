<?php
namespace Daw\security;

/**
 * Clase para el uso de Cookies
 */
class Cookie
{
  private $user;
  private $login;

  function __construct($_user,$_login)
  {
    $this->user=$_user;
    $this->login=$_login;

     $hour = time() + 3600 * 24 * 30;
    setcookie("nom_user",$this->user,time()+$hour);
    setcookie("contrasenya_user",$this->login,time()+$hour);
  }

  public function EliminarCookie()
  {
    unset($_COOKIE["nom_user"]);
    unset($_COOKIE["contrasenya_user"]);

  }


}





 ?>
