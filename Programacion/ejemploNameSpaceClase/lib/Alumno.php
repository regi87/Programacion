<?php
  namespace Lib\Universidad;
  /**
   * Class Alumno
   */
  class Alumno
  {

    private $nombre="";
    private $apodo="";

    function __construct()
    {
      # code...
    }

    /**
     * Get the value of Class Alumno
     *
     * @return mixed
     */
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Set the value of Class Alumno
     *
     * @param mixed nombre
     *
     * @return self
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }

    /**
     * Get the value of Apodo
     *
     * @return mixed
     */
    public function getApodo()
    {
        return $this->apodo;
    }

    /**
     * Set the value of Apodo
     *
     * @param mixed apodo
     *
     * @return self
     */
    public function setApodo($apodo)
    {
        $this->apodo = $apodo;

        return $this;
    }

}






 ?>
