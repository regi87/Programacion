<?php
require_once "/Applications/XAMPP/xamppfiles/htdocs/1daw/Programacion/Programacion/Actividad_09_PokemonDaw/Model/Clases/Pokemon.php";

  /**
   * clase pikachu
   */
  class Pikachu extends Pokemon
  {
    private $arrayPikachu;

    function __construct()
    {
      parent::__construct(120,5,10,50);
      $this->arrayPikachu=parent::GetAttributePokemon();
    }

    function GetPokemon()
    {
      return $this->arrayPikachu;
    }

  }




 ?>
