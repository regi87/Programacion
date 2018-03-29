<?php
namespace Daw\models\clases;

/**
 * Clase Padre DADO
 */
class Dado
{
  //lados del dado
  private $lado;
  //num aleatorio tirada
  private $aleatorio;
  //numero tiradas para el array
  private $aleatorioNumber;
  //array de tiradas
  private $aleatorioArray=array();


  function __construct()
  {
    $this->lado=0;
    $this->aleatorio=0;
    $this->aleatorioNumber=0;
    $this->aleatorioArray=[];
  }

    /**
     * Get the value of Clase Padre DADO
     *
     * @return mixed
     */
    public function getLado()
    {
        return $this->lado;
    }

    /**
     * Set the value of Clase Padre DADO
     *
     * @param mixed lado
     *
     * @return self
     */
    public function setLado($lado)
    {
      if($lado>=2 && ($lado%2)==0)
      {
        $this->lado = $lado;
        return $this;
      }
      else
      {
        return 0;
      }
    }
    /**
     * Get the value of aleatorio
     *
     * @return mixed
     */
    public function getAleatorio($_tipo)
    {
      if($this->lado>2 && $_tipo==1)
      {
        $this->aleatorio=rand(1,$this->lado);
        return $this->aleatorio;
      }
      else
      {
        $this->aleatorio=rand(0,$this->lado);
        return $this->aleatorio;
      }
    }

    /**
     * Set the value of Clase Padre DADO
     *
     * @param mixed lado
     *
     * @return self
     */
    public function setTirada($number)
    {
      if ($number >0)
      {
        $this->aleatorioNumber= $number;
        return $this;
      }
      else
      {
          return 0;
      }

    }

    /**
     * Get the value of aleatorio Array
     *
     * @return mixed
     */
    public function getaleAtorioArray()
    {
      if ($this->aleatorioNumber!=0)
      {
        for ($i=0; $i < $this->aleatorioNumber; $i++)
        {
          $this->aleatorioArray[$i]=rand(1,$this->lado);
        }
          return $this->aleatorioArray;
      }
      else
       {
         return 0;
       }

    }

}





 ?>
