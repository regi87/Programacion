<?php
namespace Daw\models\classes;
use Daw\models\classes\Table;
/**
 *
 */
class Usuario extends Table
{
  function __construct()
  {
    parent::__construct();
  }
  public function comprobateUser($user_name,$contrasenya)
  {
    return parent::find("SELECT * FROM Usuarios WHERE user_name='$user_name' and contrasenya='$contrasenya'");
  }
  public function comprobate($busqueda)
  {
    return parent::find("SELECT * FROM Usuarios WHERE $busqueda[0] = '$busqueda[1]'");
  }
  public function findAllUsuario()
  {
    return parent::find("SELECT * FROM Usuarios ");
  }

  public function findUsuarioByName($nombre)
  {
    return parent::find("SELECT * FROM Usuarios WHERE Name=$nombre");
  }

  public function insertUsuario($_nombre,$_edad,$_apellidos, $_curso, $_puntuacion, $_correo, $_user_name, $_contrasenya)
  {
    $sql ="INSERT INTO Usuarios (nombre, apellidos, edad,curso,correo,user_name,contrasenya)
      VALUES ('$_nombre','$_apellidos','$_edad','$_curso','$_correo','$_user_name','$_contrasenya')";
     return parent::insert($sql);
  }

  public function updateUsuario($_usuario,$_nombre,$_edad,$_apellidos, $_curso, $_puntuacion, $_correo, $_user_name, $_contrasenya)
  {
    $sql ="UPDATE  Usuarios
        SET nombre='$_nombre',apellidos='$_apellidos',edad='$_edad',curso='$_curso',
          correo='$_correo',user_name='$_user_name',contrasenya='$_contrasenya'
        WHERE nombre='$_usuario'";
     return parent::update($sql);
  }

  public function deleteUsuario($_nombre)
  {
      $sql = "DELETE FROM Usuarios WHERE nombre='$_nombre'";
       return parent::update($sql);
  }

}
 ?>
