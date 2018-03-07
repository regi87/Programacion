<?php
  require "../clases/db/Db.php";

  //Creamos connexion

  $primeraConexion=new Db("localhost","root","","world");
  $primeraConexion->conectar();


 ?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Prueba de la clase DB</title>
  </head>
  <body>
      <?php var_dump($primeraConexion->getConector()); ?>

  </body>
</html>
