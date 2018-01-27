
<?php
    /**
     * mostrar Usuario
     */
    class Mostrar
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
          $this->MostrarDatos();
        }
      }

      function MostrarDatos()
      {

         $consulta = "Select * from Usuarios";

        $resultado = $this->conector->query($consulta);


          $arrayUsuarios = array(); //creamos un array


            while($row = mysqli_fetch_array($resultado))
            {
                $nombre=$row['nombre'];
                $apellidos = $row['apellidos'];
                $edad = $row['edad'];
                $curso = $row['curso'];

                echo "NOMBRE: ".$nombre." <br> "."APELLIDOS: ".$apellidos. "<br>"."EDAD: ".$edad."<br>"."CURSO: ".$curso." "."<br>"."<br>";

            }
            //Creamos el JSON

      }



    }
    //Creamos el objeto para acceder a los metodos
    $classObject = new Mostrar;
    $classObject->ComprobarConexion();


?>
