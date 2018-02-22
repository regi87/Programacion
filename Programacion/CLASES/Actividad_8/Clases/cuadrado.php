<?php
  /**
   * CLASE Cuadrado
   */
  class Cuadrado
  {
      //Atributos
      private $longitud;
      private $lado;


        //Constuctor
        function __construct()
        {
          //Inicializamos los atributos a 0
          $this->lado=0;
          $this->longitud=0;
        }

        public function SetLado($_lado)
        {
          $this->lado=$_lado;
        }
        public function GetLado()
        {
          return $this->lado;
        }

        public function SetLongitud($_longitud)
        {
          $this->longitud=$_longitud;
        }
        public function GetLongitud()
        {
          return $this->longitud;
        }

        public function CalculoArea()
        {
          return $this->lado*$this->lado;
        }

        public function SetPerimetro($_longitud)
        {
          $this->longitud=$_longitud;

        }
        public function GetPerimetro()
        {
          return ($this->longitud*4);
        }

  }






 ?>
