<?php
require_once "/Applications/XAMPP/xamppfiles/htdocs/1daw/Programacion/Programacion/Actividad_09_PokemonDaw/Model/Clases/Pokemon.php";

  /**
   * clase joskachu
   */
  class Pikachu extends Pokemon
  {
    private $arrayPikachu;

    function __construct()
    {
      parent::__construct(100,10,1,40);
      $this->arrayPikachu=parent::GetAttributePokemon();
    }

    function GetPokemon()
    {
      return $this->arrayPikachu;
    }

  }




 ?>
