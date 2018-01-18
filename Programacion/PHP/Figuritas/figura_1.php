<?php
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
Ejercicio_1();
Ejercicio_2();
Ejercicio_3();
Ejercicio_4();
Ejercicio_5();
Ejercicio_6();
 ?>
