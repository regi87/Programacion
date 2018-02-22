
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Resultado</title>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>

  </head>
    <body>

      <?php
     $respuesta_tria = $_GET['respuesta'];
      ?>


    <ul style="list-style-type:square">
      <h2>Triangulo</h2>
      <li><?php echo $respuesta_tria; ?></li>
      <h2>Cuadrado</h2>
      <li></li>
      <h2>Círculo</h2>
      <li></li>
    </ul>

    </body>
</html>
