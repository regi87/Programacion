
<?php
    /**
     * insertarUsuario
     */
    class Insert
    {
      private $conector;
      function ComprobarConexion()
      {
        $this->conector = new mysqli("localhost","root","","juegos");

        if($this->conector->connect_errno)
        {
          echo "Fallo al conectar a MySQL: ".$this->conector->connect_error;
        }
        else
        {
          $this->InsertarDatos();
        }
      }

      function InsertarDatos()
      {
         $nombre =$_POST["nombre"];
         $apellidos =$_POST["apellidos"];
         $edad =$_POST["edad"];
         $curso =$_POST["curso"];
         $correo =$_POST["correo"];
         $user_name =$_POST["user_name"];
         $contrasenya =$_POST["contrasenya"];

         $sql ="INSERT INTO Usuarios (nombre, apellidos, edad,curso,correo,user_name,contrasenya)
                       VALUES ('$nombre','$apellidos','$edad','$curso','$correo','$user_name','$contrasenya')";
        $resultado = $this->conector->query($sql);

      

        $this->Envio_Datos();
      }


      function Envio_Datos()
      {
        //Abrimos la pagina para mostrar el listado de Usuarios
        header ("Location: ../HTML/listado_Usuarios_delete.html");

      }
    }
    //Creamos el objeto para acceder a los metodos
    $classObject = new Insert;
    $classObject->ComprobarConexion();


?>
