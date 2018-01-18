<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Pagina_1</title>

    <link rel="stylesheet" href="actividad.css">

  </head>
  <body>
    <?php
        /**
         *Pagina 1
         */
        class Pagina_1
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
                $resultado = $this->conector->query("SELECT Name,SurfaceArea FROM country order by SurfaceArea asc");
                echo "El numero de paises es: ".$resultado->num_rows."<br>";

                foreach ($resultado as $fila)
                {
                  ?>
                    <div class="row">
                        <div class="column left">
                            <?=$fila["Name"]              ?>
                          </div>
                        <div class="column right">
                            <?=$fila["SurfaceArea"]?><?php echo " km'2"; ?>
                        </div>
                    </div>
                    <?php
                }
              }
        }

        //Creamos el objeto para acceder a los metodos
        $classObject = new Pagina_1;
        $classObject->ComprobarConexion();

     ?>
     <?php
          echo "<button class='button' type='button' onclick=window.location.href='Actividad_7_Main.php'> MAIN</button>";
      ?>
  </body>
</html>
