<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Pagina home del proyecto</title>
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <link rel="stylesheet" type="text/css" href="css/main.css" media="screen" />
  </head>
  <body>

    <div class="login-form">
      <h1>LOGIN</h1>
      <form method="post" action="comprobarContrasenya.php">

          <div class="form-group ">
            <input id="user_name" name="user_name" class="form-control" placeholder="Nombre Usuario" type="text" value="<?php if(!empty($_COOKIE['nom_user']))echo $_COOKIE['nom_user']; ?>" required="" />
          </div>
          <div class="form-group ">
            <input id="contrasenya" name="contrasenya" class="form-control" placeholder="Contraseña" type="password" value="<?php if(!empty($_COOKIE['contrasenya_user']))echo $_COOKIE['contrasenya_user']; ?>" required="" />
          </div>
            <a class="link" href="Register/Register.php">Register</a>

              <div class="checkbox">
                <label class="text" ><input id="checkbox" name="checkbox" type="checkbox" value="" <?php if (!empty($_COOKIE['nom_user']) && !empty($_COOKIE['contrasenya_user'])) { echo "checked='checked'"; } ?>>Recuerdame</label>
              </div>

           <button name="login" id="login" type="submit" class="log-btn"> Login</button>
         </form>
       </div>
  </body>

</html>
