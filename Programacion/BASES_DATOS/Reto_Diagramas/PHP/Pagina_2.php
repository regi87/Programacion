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
            $busqueda='JPN';

            $resultado = $this->conector->query("SELECT city.Name,city.Population FROM city inner join country on city.CountryCode = country.Code where code='".$busqueda."'");



            $clientes = array(); //creamos un array


              while($row = mysqli_fetch_array($resultado))
              {
                  $nombre=$row['Name'];
                  $population = $row['Population'];
                  $clientes[] = array('Name'=> $nombre,
                                      'Population'=> $population);
              }
              //Creamos el JSON
              $json_string = json_encode($clientes);
              echo $json_string;
          }
    }

    //Creamos el objeto para acceder a los metodos
    $classObject = new Pagina_2;
    $classObject->ComprobarConexion();

 ?>
