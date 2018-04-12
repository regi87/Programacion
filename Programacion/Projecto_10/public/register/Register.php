<?php
  require_once __DIR__.'/../../vendor/autoload.php';
  use Daw\models\classes\Usuario;
 ?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Pagina Registro</title>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="../js/listadoUsuarios.js"></script>
    <link rel="stylesheet" type="text/css" href="../css/main.css" media="screen" />
  </head>
  <body>

      <div class="login-form">
        <h1>Register</h1>
        <form  action="../../src/security/insertarUsuario.php" method="post" >
              <div class="form-group ">
                <input id="nombre" class="form-control" placeholder="Nombre" name="nombre" type="text"  value="" required="" />
            </div>
            <div class="form-group ">
              <input id="apellidos" class="form-control" placeholder="Apellidos" name="apellidos" type="text" value="" required="" />
             </div>
            <div class="form-group ">
              <input id="edad" name="edad" class="form-control" placeholder="Edad" type="date" value="" required="" />
           </div>
            <div class="form-group ">
              <input id="curso" name="curso" class="form-control" placeholder="Curso" type="number" value="" required="" />
            </div>
            <div class="form-group ">
              <input id="correo" name="correo" class="form-control" placeholder="Correo" type="email" value="" required="" />
            </div>

            <div class="form-group ">
              <input id="user_name" name="user_name" class="form-control" placeholder="Nombre Usuario" type="text" value="" required="" />
            </div>
            <div class="form-group ">
              <input id="contrasenya" name="contrasenya" class="form-control" placeholder="Contraseña" type="password" value="" required="" />
            </div>
            <div class="form-group ">
              <input id="re_contrasenya" name="re_contrasenya" class="form-control" placeholder="Rescriba Contraseña" type="password" value="" required="" />
            </div>


          <!--   <a class="link" href="../HTML/Inicio_Sesion.html">Login?</a> -->

             <button name="registro" id="registro" type="submit" class="log-btn"> Register</button>
           </form>
         </div>

  </body>
</html>
