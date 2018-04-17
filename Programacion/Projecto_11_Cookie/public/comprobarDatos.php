<?php
require_once __DIR__.'/../vendor/autoload.php';
use Daw\models\classes\Usuario;
?>

<?php
    /**
     * Comprobar Datos
     */
      function ComprobarDatos()
      {
        $recibido =$_POST["busqueda"];
        $busqueda = explode("-", $recibido);
        $usuario= new Usuario();

        $resultado=$usuario->comprobate($busqueda);
        //$resultado = $this->conector->query("Select * from Usuarios where $busqueda[0] = '$busqueda[1]'");
        $contar = mysqli_num_rows($resultado);
        $json_string = json_encode($contar);

        echo $json_string;
      }

    //Creamos el objeto para acceder a los metodos
    ComprobarDatos();
?>
