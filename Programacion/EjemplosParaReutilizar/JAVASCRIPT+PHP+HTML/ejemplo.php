<?php

  $valor_recibido=$_POST["numero"];
  $valor_recibido=$valor_recibido*2;
  //array creado para envio por json
  $arraJson= array("numero" =>  $valor_recibido);
  $json_string = json_encode($arraJson);
  echo $json_string;

 ?>
