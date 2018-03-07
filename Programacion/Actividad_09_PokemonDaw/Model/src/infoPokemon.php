<?php
require_once "/Applications/XAMPP/xamppfiles/htdocs/1daw/Programacion/Programacion/Actividad_09_PokemonDaw/Model/Clases/Pikachu/Pikachu.php";
require_once "/Applications/XAMPP/xamppfiles/htdocs/1daw/Programacion/Programacion/Actividad_09_PokemonDaw/Model/Clases/Bulbasur/Bulbasur.php";

function PokemonSeleccionado()
{
  $pokemon_selected=$_POST["pokemon_selected"];
  CrearObjetoPokemon($pokemon_selected);
}

function CrearObjetoPokemon($_pokemon_selected)
{
  $pokemon_1="";
  $pokemon_2="";
  $array=array("");
  $array2=array("");
  $_pokemon_selected_2="";

  if($_pokemon_selected == "pikachu")
  {
      $pokemon_1= new Pikachu();
      $pokemon_2= new Bulbasur();
      $_pokemon_selected_2 = "bulbasur";

  }
    else if ("bulbasur")
    {
      $pokemon_1= new Bulbasur();
      $pokemon_2= new Pikachu();
      $_pokemon_selected_2 = "picachu";

    }
  $array=$pokemon_1->GetPokemon();
  $array2=$pokemon_2->GetPokemon();

  EnvioInfo($array,$_pokemon_selected,$_pokemon_selected_2,$array2);
}

function EnvioInfo($_array,$_pokemon_selected,$_pokemon_selected_2,$_array2)
{
  $arrayJson= array("pokemon_selected" => $_pokemon_selected, "salud" =>$_array["salud"],
  "ataque" =>$_array["ataque"],"defensa" =>$_array["defensa"],"stamina" =>$_array["stamina"]);

  $arrayJson2= array("pokemon_selected" => $_pokemon_selected_2, "salud" =>$_array2["salud"],
  "ataque" =>$_array2["ataque"],"defensa" =>$_array2["defensa"],"stamina" =>$_array2["stamina"]);

  $json_string = json_encode(array($arrayJson,$arrayJson2));
  echo $json_string;
}

PokemonSeleccionado();

 ?>
