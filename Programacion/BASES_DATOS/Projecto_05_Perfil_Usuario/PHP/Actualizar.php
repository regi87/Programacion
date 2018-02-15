
<?php
    /**
     * insertarUsuario
     */
    class Actualizar
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
          $this->ActualizarDatos();
        }
      }

      function ActualizarDatos()
      {
         $nombre =$_POST["nombre"];
         $apellidos =$_POST["apellidos"];
         $edad =$_POST["edad"];
         $curso =$_POST["curso"];
         $correo =$_POST["correo"];
         $user_name =$_POST["user_name"];
         $contrasenya =$_POST["contrasenya"];
         //input hidden nombre usuario a modificar
         $usuario =$_POST["usuario"];
         $contador =1;
         $arrayConsulta =  array('id','nombre','apellidos','edad','curso','correo','user_name','contrasenya');
         $arrayDatos =  array("id",$nombre,$apellidos,$edad,$curso,$correo,$user_name,$contrasenya);

         $sql = "Select * from Usuarios";
         $resultado= $this->conector->query($sql);
         $row = $resultado->fetch_row();

         $sql ="UPDATE  Usuarios
         SET nombre='$nombre',apellidos='$apellidos',edad='$edad',curso='$curso',
         correo='$correo',user_name='$user_name',contrasenya='$contrasenya'
         WHERE nombre='$usuario'";
         $resultado = $this->conector->query($sql);

         /*
         while ($contador <= 2)
         {
           if($row[$contador]!=$arrayDatos[$contador])
               {
                 echo "Contador: ".$contador."--"."Campo:".$arrayConsulta[$contador]."--"."Valor Nuevo:".$arrayDatos[$contador]."--"."Campo Base Datos:".$row[$contador]."<br>";
                 $sql ="UPDATE  Usuarios
                 SET $arrayConsulta[$contador]='$arrayDatos[$contador]'
                 WHERE nombre='$usuario'";
                 $resultado = $this->conector->query($sql);
               }
           $contador++;
         }
         */

         $this->Envio_Datos();
      }


      function Envio_Datos()
      {
        //Abrimos la pagina para mostrar el listado de Usuarios
        header ("Location: ../HTML/listado_Usuarios_delete.html");

      }

    }
    //Creamos el objeto para acceder a los metodos
    $classObject = new Actualizar;
    $classObject->ComprobarConexion();


?>
