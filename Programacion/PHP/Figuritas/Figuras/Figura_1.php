<?php

  class Figuras
  {

       function Ejercicio_1()
        {
          $i=0;

            while($i<5)
              {
                echo "*";
                echo "<br>";
                $i++;
              }
        }

       function Ejercicio_2()
        {
            for ($i = 0; $i < 5; $i++)
             {
                echo "<br>";
                for ($j = 0; $j < 5; $j++)
                {
                    echo "*";
                }
             }
        }

       function Ejercicio_3()
        {
          echo "<br>";
          echo "<br>";
            for ($j = 0; $j < 10; $j++)
            {
                echo "*";
            }
        }

         function Ejercicio_4()
        {
          echo "<br>";

            for ($i = 1; $i < 7; $i++)
             {
                for ($j = 1; $j < 7; $j++)
                {
                  if($j<=$i)
                    echo "*";
                }
                  echo "<br>";
             }
        }

         function Ejercicio_5()
        {
          echo "<br>";

            for ($i = 0; $i < 6; $i++)
             {

                for ($j = 0; $j < 6; $j++)
                {
                    if($i%2 == 0 && $i>=$j)
                      echo "*";
                }
                  echo "<br>";
             }
               for ($i = 3; $i < 6; $i++)
                {

                   for ($j = 0; $j < 6; $j++)
                   {
                       if($i%2 != 0 && $i<=$j)
                         echo "*";
                   }
                     echo "<br>";
                }
        }

         function Ejercicio_6()
        {
          $altura=7;

          for ($i = 1; $i < $altura; $i++)
           {
             for ($k = 1; $k <=$altura-$i; $k++)
             {
                echo "-";
              }
             for ($j = 1; $j <=2*$i-1; $j++)
             {
                echo "*";
              }
              echo "<br>";
           }
        }

  }

    $objeto_figuras = new Figuras();

    $objeto_figuras->Ejercicio_1();
    $objeto_figuras->Ejercicio_2();
    $objeto_figuras->Ejercicio_3();
    $objeto_figuras->Ejercicio_4();
    $objeto_figuras->Ejercicio_5();
    $objeto_figuras->Ejercicio_6();

 ?>
