<?php
  /**
   * CLASE TRIANGULO
   */
  class Triangulo
  {
      //Atributos
      private $base;
      private $altura;
      private $lado_1;
      private $lado_2;
      private $lado_3;



        //Constuctor
        function __construct()
        {
          //Inicializamos los atributos a 0
          $this->base=0;
          $this->altura=0;
          $this->lado_1=0;
          $this->lado_2=0;
          $this->lado_3=0;

        }

        public function SetBase($_base)
        {
          $this->base=$_base;
        }
        public function GetBase()
        {
          return $this->base;
        }

        public function SetAltura($_altura)
        {
          $this->altura=$_altura;
        }

        public function GetAltura()
        {
          return $this->altura;
        }

        public function CalculoArea()
        {
          return ($this->base*$this->altura)/2;
        }

        public function SetPerimetro($_lado1,$_lado2,$_lado3)
        {
          $this->lado_1=$_lado1;
          $this->lado_2=$_lado2;
          $this->lado_3=$_lado3;

        }
        public function GetPerimetro()
        {
          return ($this->lado_1+$this->lado_2+$this->lado_3);
        }

  }






 ?>
