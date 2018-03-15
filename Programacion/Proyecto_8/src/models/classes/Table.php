<?php
namespace Daw\models\classes;
use Daw\models\classes\Db;

/**
 *
 */
class Table extends Db
{
  //Generar el conector a la base de datos
  private $db;
  private $conector;
  private $consulta;

  function __construct()
  {
    $this->db=new Db();
    $this->db->conectar();
    $this->conector=$this->db->getConector();
  }
  //mostrar todo el contenido de la tabla
  public function findAll($tabla)
  {
    $this->consulta="SELECT * FROM $tabla";
    $resultado=$this->conector->query( $this->consulta);
    return $resultado;
  }
  //mostrar todo el contenido de la tabla por nombre
  public function find($query)
  {
    $this->consulta=$query;
    $resultado=$this->conector->query($this->consulta);
    return $resultado;
  }
  //insertar Usuario
  public function insert($query)
  {
    $this->consulta=$query;
    $resultado=$this->conector->query($this->consulta);
    return $resultado;
  }
  //actualizar usuario
  public function update($query)
  {
    $this->consulta=$query;
    $resultado=$this->conector->query($this->consulta);
    return $resultado;
  }
  //eliminar usuario
  public function delete($query)
  {
    $this->consulta=$query;
    $resultado=$this->conector->query($this->consulta);
    return $resultado;
  }
}
 ?>
