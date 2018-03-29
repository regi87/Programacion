<?php
    namespace Daw\config;
/**
 *Clase Config
 */

class Config
{
  private $host="";
  private $user="";
  private $pass="";
  private $db="";


  function __construct($_localhost,$_user,$_pass,$_db)
  {
     $this->host=$_localhost;
     $this->user=$_user;
     $this->pass=$_pass;
     $this->db=$_db;
  }
    /**
     * Get the value of Clase Config
     *
     * @return mixed
     */
    public function getHost()
    {
        return $this->host;
    }
    /**
     * Set the value of Clase Config
     *
     * @param mixed host
     *
     * @return self
     */
    public function setHost($host)
    {
        $this->host = $host;

        return $this;
    }
    /**
     * Get the value of User
     *
     * @return mixed
     */
    public function getUser()
    {
        return $this->user;
    }
    /**
     * Set the value of User
     *
     * @param mixed user
     *
     * @return self
     */
    public function setUser($user)
    {
        $this->user = $user;

        return $this;
    }
    /**
     * Get the value of Pass
     *
     * @return mixed
     */
    public function getPass()
    {
        return $this->pass;
    }

    /**
     * Set the value of Pass
     *
     * @param mixed pass
     *
     * @return self
     */
    public function setPass($pass)
    {
        $this->pass = $pass;

        return $this;
    }
    /**
     * Get the value of Db
     *
     * @return mixed
     */
    public function getDb()
    {
        return $this->db;
    }
    /**
     * Set the value of Db
     *
     * @param mixed db
     *
     * @return self
     */
    public function setDb($db)
    {
        $this->db = $db;

        return $this;
    }
}

 ?>
