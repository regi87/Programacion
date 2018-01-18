<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Pagina_2</title>

    <link rel="stylesheet" href="actividad.css">
  </head>
  <body>
    <?php
        /**
         *Pagina 2
         */
        class Pagina_2
        {
              private $conector;
              function ComprobarConexion()
              {
                $this->conector = new mysqli("localhost","root","","world");


                if($this->conector ->connect_errno)
                {
                  echo "Fallo al conectar a MySQL: ".$this->conector->connect_error;
                }
                else
                {
                  $this->OperacionConexion();
                }
              }

              function OperacionConexion()
              {
                //interactuar con la base de datos
                echo "<h1>Paises del mundo</h1>";
                $resultado = $this->conector->query("select country.Name, country.Continent FROM country group by country.Name order by country.Name asc, country.Continent asc");
                echo "El numero de paises es: ".$resultado->num_rows."<br><br>";

                foreach ($resultado as $fila)
                {
      ?>
                        <div class="row">
                            <div class="column left">
                            <?=$fila["Name"]              ?>
                            </div>
                            <div class="column right">
                              <?=$fila["Continent"]         ?>
                            </div>
                        </div>
    <?php
                }
              }
        }

        //Creamos el objeto para acceder a los metodos
        $classObject = new Pagina_2;
        $classObject->ComprobarConexion();

     ?>
     <?php
          echo "<button class='button' type='button' onclick=window.location.href='Actividad_7_Main.php'> MAIN</button>";
      ?>
  </body>
</html>
