
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Editar Usuario</title>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
        <script src="../JS/listadoUsuarios.js"></script>
        <link rel="stylesheet" type="text/css" href="../CSS/main.css" media="screen" />

      </head>
      <body>
        <body>
          <div class="login-form">
            <h1>Editar Usuario</h1>
                <?php

                   $usuario = json_decode($_GET["usuario"]);

                ?>

                <form action="../PHP/Actualizar.php" method="post">
                  <div class="form-group ">
                    <input id="nombre" class="form-control"  name="nombre" type="text" value="<?php  echo $usuario->{'nombre'}; ?>" required="" />
                </div>

                <div class="form-group ">
                  <input id="apellidos" class="form-control"  name="apellidos" type="text" value="<?php  echo $usuario->{'apellidos'}; ?>" required="" />
                 </div>
                <div class="form-group ">
                  <input id="edad" name="edad" class="form-control"  type="date" value="<?php  echo $usuario->{'edad'}; ?>" required="" />
               </div>
                <div class="form-group ">
                  <input id="curso" name="curso" class="form-control"  type="number" value="<?php  echo $usuario->{'curso'}; ?>" required="" />
                </div>
                <div class="form-group ">
                  <input id="correo" name="correo" class="form-control" type="email" value="<?php  echo $usuario->{'correo'}; ?>" required="" />
                </div>

                <div class="form-group ">
                  <input id="user_name" name="user_name" class="form-control"  type="text" value="<?php  echo $usuario->{'user_name'}; ?>" required="" />
                </div>
                <div class="form-group ">
                  <input id="contrasenya" name="contrasenya" class="form-control"  type="" value="<?php  echo $usuario->{'contrasenya'}; ?>" required="" />
                </div>
                <input id="usuario" name="usuario" class="form-control"  type="" value="<?php  echo $usuario->{'nombre'}; ?>" hidden />

                 <a class="link" href="../HTML/listado_Usuarios_delete.html">Atras?</a>

                 <button id="registro" type="submit" class="log-btn">Actualizar</button>

               </form>
             </div>

        </body>
      </body>
    </html>
