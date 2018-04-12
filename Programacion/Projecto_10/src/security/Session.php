<?php

  namespace Daw\security;
    /**
     *
     */
    class Session
    {
      private $usuario;

      function __construct($_usuario)
      {
        if($_usuario != $this->usuario)
          $this->usuario=$_usuario;
          else
          $this->usuario=$this->usuario;

        session_start();
        if (!isset($_SESSION[$this->usuario]))
        {
            $_SESSION[$this->usuario] = 0;
        }
        else
        {
          $_SESSION[$this->usuario]++;
        }
        //echo "El número de veces visitado es: " .$_SESSION['daw'];
      }

      function __construct_return()
      {
        return $this->getUsuario();
      }

      /**
       * Get the value of Usuario
       *
       * @return mixed
       */
      public function getUsuario()
      {
          return $this->usuario;
      }
      public function Logout()
      {
        //session_start();
        $_SESSION=[];
        session_destroy();
      }

  }

?>
