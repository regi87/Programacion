
<?php
    /**
     * Comprobar Datos
     */
    class Comprobar
    {
      private $conector;
      function ComprobarConexion()
      {
        $this->conector = new mysqli("localhost","root","","juegos");

        if($this->conector ->connect_errno)
        {
          echo "Fallo al conectar a MySQL: ".$this->conector->connect_error;
        }
        else
        {
          $this->ComprobarDatos();
        }
      }

      function ComprobarDatos()
      {
        $nombre =$_POST["nombre"];

        $resultado = $this->conector->query("Select * from Usuarios where nombre = '$nombre'");
        $contar = mysqli_num_rows($resultado);
        $json_string = json_encode($contar);


        if($contar>0)
            printf( $contar);
            else
            {
              printf( $contar);

            }

      }



    }
    //Creamos el objeto para acceder a los metodos
    $classObject = new Comprobar;
    $classObject->ComprobarConexion();


?>
