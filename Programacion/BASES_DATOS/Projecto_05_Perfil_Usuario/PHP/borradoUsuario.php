
<?php
    /**
     * insertarUsuario
     */
    class Delete
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
        $busqueda = $_GET['busqueda'];

        $sql = "DELETE FROM Usuarios WHERE correo='$busqueda'";
        $resultado = $this->conector->query($sql);

        $this->DatoBorradoMostramos();
      }


      function DatoBorradoMostramos()
      {
        //Abrimos la pagina para mostrar el listado de Usuarios
        header ("Location: ../HTML/listado_Usuarios_delete.html");
      }
    }
    //Creamos el objeto para acceder a los metodos
    $classObject = new Delete;
    $classObject->ComprobarConexion();


?>
