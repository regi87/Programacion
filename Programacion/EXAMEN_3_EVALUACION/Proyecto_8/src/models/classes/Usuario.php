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
  public function findAllUsuario()
  {
    return parent::find("SELECT * FROM Usuarios ");
  }

  public function findUsuarioByName($nombre)
  {
    return parent::find("SELECT * FROM Usuarios WHERE Name=$nombre");
  }

  public function insertUsuario($_nombre,$_apellidos, $_user_name, $_contrasenya,$_edad, $_curso, $_puntuacion, $_correo)
  {
    $sql ="INSERT INTO Usuarios (nombre, apellidos,usuario, contrasenya,edad,curso,puntuacion,correo)
      VALUES ('$_nombre','$_apellidos','$_user_name','$_contrasenya','$_edad','$_curso','$_puntuacion','$_correo')";
     return parent::insert($sql);
  }

  public function updateUsuario($_usuario,$_nombre,$_apellidos, $_user_name, $_contrasenya,$_edad, $_curso, $_puntuacion, $_correo)
  {
    $sql ="UPDATE  Usuarios
        SET nombre='$_nombre',apellidos='$_apellidos',usuario='$_user_name',contrasenya='$_contrasenya',edad='$_edad',curso='$_curso',
          puntuacion='$_puntuacion',correo='$_correo'
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
