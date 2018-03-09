<?php
require_once "/Applications/XAMPP/xamppfiles/htdocs/1daw/Programacion/Programacion/Actividad_09_PokemonDaw/Model/Clases/Pokemon.php";

  /**
   * clase joskachu
   */
  class Bulbasur extends Pokemon
  {
    private $arrayBulbasur;

    function __construct()
    {
      parent::__construct(100,12,2,40);
      $this->arrayBulbasur=parent::GetAttributePokemon();
    }

    function GetPokemon()
    {
      return $this->arrayBulbasur;
    }

  }




 ?>
