<?php
  /**
   * Clase Padre para los Pokemons
   */
  class Pokemon
  {
    private $salud;
    private $ataque;
    private $defensa;
    private $stamina;

    function __construct($_salud,$_ataque,$_defensa,$_stamina)
    {
      $this->salud=$_salud;
      $this->ataque=$_ataque;
      $this->defensa=$_defensa;
      $this->stamina=$_stamina;
    }

    protected function GetAttributePokemon()
    {
      return $array= array('salud' => $this->salud, 'ataque' => $this->ataque,
     'defensa' => $this->defensa, 'stamina' => $this->stamina);
    }

    

    /**
     * Get the value of Clase Padre para los Pokemons
     *
     * @return mixed
     */
    public function getSalud()
    {
        return $this->salud;
    }

    /**
     * Set the value of Clase Padre para los Pokemons
     *
     * @param mixed salud
     *
     * @return self
     */
    public function setSalud($salud)
    {
        $this->salud = $salud;

        return $this;
    }

    /**
     * Get the value of Ataque
     *
     * @return mixed
     */
    public function getAtaque()
    {
        return $this->ataque;
    }

    /**
     * Set the value of Ataque
     *
     * @param mixed ataque
     *
     * @return self
     */
    public function setAtaque($ataque)
    {
        $this->ataque = $ataque;

        return $this;
    }

    /**
     * Get the value of Defensa
     *
     * @return mixed
     */
    public function getDefensa()
    {
        return $this->defensa;
    }

    /**
     * Set the value of Defensa
     *
     * @param mixed defensa
     *
     * @return self
     */
    public function setDefensa($defensa)
    {
        $this->defensa = $defensa;

        return $this;
    }

    /**
     * Get the value of Stamina
     *
     * @return mixed
     */
    public function getStamina()
    {
        return $this->stamina;
    }

    /**
     * Set the value of Stamina
     *
     * @param mixed stamina
     *
     * @return self
     */
    public function setStamina($stamina)
    {
        $this->stamina = $stamina;

        return $this;
    }

}





 ?>
