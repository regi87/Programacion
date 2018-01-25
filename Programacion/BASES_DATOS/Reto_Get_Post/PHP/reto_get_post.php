<?php
    /**
     *Metodo_Post_Get
     */
    class Metodo_Post_Get
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


            $resultado = $this->conector->query("SELECT Continent,Name,SurfaceArea FROM country");

            $objeto = array(); //creamos un array

            while($row = mysqli_fetch_array($resultado))
              {
                  $continent = $row['Continent'];
                  $name = $row['Name'];
                  $surfaceArea = $row['SurfaceArea'];

                  $objeto[] = array('Continent'=>$continent,
                                    'Name'=> $name,
                                    'SurfaceArea'=>$surfaceArea);
              }
              //Creamos el JSON
              $json_string = json_encode($objeto);
              echo $json_string;
          }
    }

    //Creamos el objeto para acceder a los metodos
    $classObject = new Metodo_Post_Get;
    $classObject->ComprobarConexion();

 ?>
