<?php
  use Lib\Universidad\Alumno as A;
  include "lib/Alumno.php";
 ?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Probando namespace</title>
  </head>
  <body>
      <?php
        //objeto nuevo Alumno
        $alumno1= new A();
        $alumno1->setNombre("Salva");
        $alumno1->setApodo("El Mohicano");
      ?>
      <h1>Alumno de DAW</h1>
      <p>El nombre del alumno es : <b><?=$alumno1->getNombre()?></b></p>
      <p>El apodo del alumno es : <b><?=$alumno1->getApodo()?></b></p>

  </body>
</html>
