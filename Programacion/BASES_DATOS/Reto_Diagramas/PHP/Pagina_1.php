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

            $resultado = $this->conector->query("SELECT Name,SurfaceArea FROM country order by SurfaceArea asc");


            $clientes = array(); //creamos un array


              while($row = mysqli_fetch_array($resultado))
              {
                  $nombre=$row['Name'];
                  $surfaceArea = $row['SurfaceArea'];
                  $clientes[] = array('Name'=> $nombre,
                                      'SurfaceArea'=> $surfaceArea."km^2");
              }
              //Creamos el JSON
              $json_string = json_encode($clientes);
              echo $json_string;
          }
    }

    //Creamos el objeto para acceder a los metodos
    $classObject = new Pagina_1;
    $classObject->ComprobarConexion();

 ?>
