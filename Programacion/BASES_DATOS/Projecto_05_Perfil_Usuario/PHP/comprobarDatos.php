
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
        $recibido =$_POST["busqueda"];
        $busqueda = explode("-", $recibido);

        $resultado = $this->conector->query("Select * from Usuarios where $busqueda[0] = '$busqueda[1]'");
        $contar = mysqli_num_rows($resultado);
        $json_string = json_encode($contar);

        echo $json_string;
      }
    }
    //Creamos el objeto para acceder a los metodos
    $classObject = new Comprobar;
    $classObject->ComprobarConexion();
?>
