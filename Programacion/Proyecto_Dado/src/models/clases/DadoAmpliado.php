<?php

namespace Daw\models\clases;
use Daw\models\clases\Dado;

/**
 *
 */
class DadoAmpliado extends Dado
{ //tipos de dados
  const TEXTO = 1;
  const KAMASUTRA = 2;
  const NUMERICO = 3;
  //dadoPorDefectoKamaSutra
  private $dadoKamaSutra = ["MISIONERO","69","DOGGYSTYLE","DRAGONFURIOSO","DRAGONFUEGO","COLUMPIO"];
  //propiedades
  private $tipoDado;
  //solo para el tipo TEXTO
  private $arrayTiradasDado=[];
  private $lados;

  function __construct($_tipoDado)
  {
    if($_tipoDado==self::TEXTO)
    {
      $this->tipoDado=self::NUMERICO;
    }
    else if ($_tipoDado == self::KAMASUTRA)
    {
      $this->tipoDado=self::KAMASUTRA;
      $this->ladosDado=$dadoKamaSutra;
    }
    else
    {
      $this->tipoDado=self::NUMERICO;
    }
  }

function setLado($_lados)
{
  $this->lados=parent::setLado($_lados);
}

function getAleatorio($_tipo)
{
  return parent::getAleatorio($_tipo);
}

function getAleatorioArray()
{
  $this->arrayTiradasDado=parent::getaleAtorioArray();
  return $this->arrayTiradasDado;
}

function getKamasutra()
{
  $posicion=parent::getAleatorio(2);
  if ($posicion>-1 && $posicion < 6)
  {
    return $this->dadoKamaSutra[$posicion];
  }
  else
  {
    return $this->dadoKamaSutra[rand(0,5)];
  }
}

}
 ?>
