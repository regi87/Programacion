<?php

    /**
     * Clase conexión base de datos
     */
    class Db
    {
      //Propiedades de connexion
      private $server="";
      private $user="";
      private $pass="";
      private $db="";

      //Propiedad Conector
      private $conector;

      function __construct($_server,$_user,$_pass,$_db)
      {
        $this->server=$_server;
        $this->user=$_user;
        $this->pass=$_pass;
        $this->db=$_db;
      }

      function conectar()
      {
        $conectorTemp=new mysqli($this->server,$this->user,$this->pass,$this->db);

        if($conectorTemp->connect_errno)
        {
          $this->conector=false;
        }
        else
        {
          $this->conector=$conectorTemp;
        }
      }

      function getConector()
      {
        return $this->conector;
      }


}





?>
