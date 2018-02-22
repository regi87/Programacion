<?php
  /**
   * CLASE Circulo
   */
  class Circulo
  {
      //Atributos
      private $radio;
      const M_PI  = 3.14159265358979323846;

        //Constuctor
        function __construct()
        {
          //Inicializamos los atributos a 0
          $this->radio=0;
        }

        public function SetRadio($_radio)
        {
          $this->radio=$_radio;
        }
        public function GetRadio()
        {
          return $this->radio;
        }

        public function CalculoArea()
        {
          return ($this->radio*$this->radio)*M_PI;
        }

        public function GetPerimetro()
        {
          return ($this->radio*2*M_PI);
        }
  }


 ?>
