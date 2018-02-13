
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
        $consulta = "Select nombre,apellidos,edad,curso,correo,user_name,contrasenya from Usuarios";

        $resultado = $this->conector->query($consulta);
        $arrayUsuarios = array(); //creamos un array

            while($row = mysqli_fetch_array($resultado))
            {
                $nombre=$row['nombre'];
                $apellidos = $row['apellidos'];
                $edad = $row['edad'];
                $curso = $row['curso'];
                $correo = $row['correo'];
                $user_name = $row['user_name'];
                $contrasenya= $row['contrasenya'];

                $arrayUsuarios[] = array('nombre'=> $nombre,
                                    'apellidos'=> $apellidos,'edad'=>$edad, 'curso'=>$curso,
                                  'correo'=>$correo,'user_name'=>$user_name,'contrasenya'=>$contrasenya);
              //  echo "NOMBRE: ".$nombre." <br> "."APELLIDOS: ".$apellidos. "<br>"."EDAD: ".$edad.
                //"<br>"."CURSO: ".$curso." <br>"."CORREO: ".$correo. "<br>". "NOMBRE USUARIO:  ".$user_name. "<br>"."CONTRASEÑA:  ".$contrasenya." "."<br>"."<br>";
            }
            //Creamos el JSON
            $json_string = json_encode($arrayUsuarios);
            echo $json_string;
      }

    }
    //Creamos el objeto para acceder a los metodos
    $classObject = new Mostrar;
    $classObject->ComprobarConexion();

?>
