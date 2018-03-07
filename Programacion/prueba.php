<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
  <?php

        /*
        $fraseTemp=" ";
        $fraseCodificada=" ";
        $frase="Los catalanes hacen cosas.";
*/
          $fraseTemp_=" ";
        $frase_="s.sacon cehas nelatacas Lo";
          $fraseCodificada_=" ";



        for ($i=0; $i < strlen($frase_); $i++)
        {
          if ($i==strlen($frase_)-1)
          {
           $fraseTemp_=$fraseTemp_.substr($frase_,$i,1);
           echo $fraseTemp_."-----PRIMER ECHO"."<br>";
          }
          else
          {
            $fraseTemp_=$fraseTemp_.substr($frase_, $i+1,1).substr($frase_, $i, 1);
            echo $fraseTemp_."-----SEGUNDO ECHO"."<br>";
          }
          $i++;
        }


        for ($i=strlen($fraseTemp_)-1; $i >-1; $i--)
        {
          if ($i>-1)
          {
            $fraseCodificada_ =$fraseCodificada_.substr($fraseTemp_,$i, 1);
            //echo $fraseCodificada."-----TERCER ECHO";

          }
        }

          echo  $fraseCodificada_;



/*
        for ($i=0; $i < strlen($frase); $i++)
        {
          if ($i==strlen($frase)-1)
          {
           $fraseTemp=$fraseTemp.substr($frase,$i,1);
           echo $fraseTemp."-----PRIMER ECHO"."<br>";
          }
          else
          {
            $fraseTemp=$fraseTemp.substr($frase, $i+1,1).substr($frase, $i, 1);
            echo $fraseTemp."-----SEGUNDO ECHO"."<br>";
          }
          $i++;
        }


        for ($i=strlen($fraseTemp)-1; $i >-1; $i--)
        {
          if ($i>-1)
          {
            $fraseCodificada =$fraseCodificada.substr($fraseTemp,$i, 1);
            //echo $fraseCodificada."-----TERCER ECHO";

          }

        }


        echo  $fraseCodificada;
        */

   ?>
  </body>
</html>
