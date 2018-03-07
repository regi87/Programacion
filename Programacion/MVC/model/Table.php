<?php

require_once "/model/Db.php";
  /**
   *
   */
  class Table
  {

    private $db;
    private $conector;

    function __construct()
    {
      $this->db =new Db($server,$user,$pass,$db);
      $this->conector=$this->db->conectar();
    }

    public function findAll($tabla)
    {
      $consulta="SELECT * FROm $tabla";
      $resultado=$this->conector->query($consulta);
      return $resultado;
    }

  }





 ?>
