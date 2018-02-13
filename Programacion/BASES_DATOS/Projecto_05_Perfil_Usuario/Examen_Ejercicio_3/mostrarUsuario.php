
<?php
    /**
     * Muestra Usuario
     */
    class MuestraUsuario
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
        $usuario = $_GET["id"];

        $sql ="Select * from Usuarios where id = '$usuario'";

        $resultado = $this->conector->query($sql);
        $arrayUsuario = array(); //creamos un array


        while($row = mysqli_fetch_array($resultado))
        {
            $nombre=$row['nombre'];
            $apellidos = $row['apellidos'];
            $edad = $row['edad'];
            $curso = $row['curso'];
            $correo = $row['correo'];
            $user_name = $row['user_name'];
            $contrasenya= $row['contrasenya'];

            $arrayUsuario[] = array('nombre'=> $nombre,
                                'apellidos'=> $apellidos,'edad'=>$edad, 'curso'=>$curso,
                              'correo'=>$correo,'user_name'=>$user_name,'contrasenya'=>$contrasenya);
            echo "NOMBRE: ".$nombre." <br> "."APELLIDOS: ".$apellidos. "<br>"."EDAD: ".$edad.
            "<br>"."CURSO: ".$curso." <br>"."CORREO: ".$correo. "<br>". "NOMBRE USUARIO:  ".$user_name. "<br>"."CONTRASEÑA:  ".$contrasenya." "."<br>"."<br>";
        }
        $json_string = json_encode($resultado);
      }
    }
    //Creamos el objeto para acceder a los metodos
    $classObject = new MuestraUsuario;
    $classObject->ComprobarConexion();
?>
