<?php
class DB {
	 private $host     = "localhost";
	 private $database = "learnenglish";
	 private $user     = "root";
	 private $password = "jairogomez";
	 protected $connection;
	 private $STH ;
	function __construct(){
		try {
	    $this->connection = new PDO("mysql:host=".$this->host.";dbname=".$this->database."", $this->user, $this->password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
		} catch (PDOException $e) {
			echo "<div class=\"col-md-12\">
                    <div class=\"panel panel-danger\">
                        <div class=\"panel-heading\">
                            Error Conectando a la base de datos
                        </div>
                        <div class=\"panel-body\">
                            <p>".$e->getMessage() ."</p>
                        </div>
                        <div class=\"panel-footer\">
                            Ayuda: webmaster@k-pop.com.mx
                        </div>
                    </div>
                    </div>";
		    die();
		}
	}
	function disconnect() {
		$this->connection = null;
	}

	function starTransaction() {
		try {	
			$this->connection->beginTransaction();
		}
		catch (Exception $e) {
  			echo "<div class=\"col-md-12\">
                    <div class=\"panel panel-danger\">
                        <div class=\"panel-heading\">
                            Fallo inicio transaccion
                        </div>
                        <div class=\"panel-body\">
                            <p>".$e->getMessage() ."</p>
                        </div>
                        <div class=\"panel-footer\">
                            Ayuda: webmaster@k-pop.com.mx
                        </div>
                    </div>
                    </div>";
		}
	}

	function endTransaction() {
		try {
			$this->connection->commit();
		}
		catch (Exception $e) {
			$this->connection->rollBack();
  			echo "<div class=\"col-md-12\">
                    <div class=\"panel panel-danger\">
                        <div class=\"panel-heading\">
                            Error Transaccion
                        </div>
                        <div class=\"panel-body\">
                            <p>".$e->getMessage() ."</p>
                        </div>
                        <div class=\"panel-footer\">
                            Ayuda: webmaster@k-pop.com.mx
                        </div>
                    </div>
                    </div>";
					die();
		}
	}

	function getRow($query, $params=array()) {
		try
		{ 
			$this->STH = $this->connection->prepare($query);
			$this->STH->execute($params);
			return $this->STH->fetch(); 
		}catch(PDOException $e){
               echo "<div class=\"col-md-12\">
                    <div class=\"panel panel-danger\">
                        <div class=\"panel-heading\">
                            Error obteniendo fila
                        </div>
                        <div class=\"panel-body\">
                            <p>".$e->getMessage() ."</p>
                        </div>
                        <div class=\"panel-footer\">
                            Ayuda: webmaster@k-pop.com.mx
                        </div>
                    </div>
                    </div>";
		    	die();
         }
	}

	function getRows($query, $params=array()) {
		try
		{ 
			$this->STH = $this->connection->prepare($query);
			$this->STH->execute($params);
			return $this->STH->fetchAll(); 
		}catch(PDOException $e){
                echo "<div class=\"col-md-12\">
                    <div class=\"panel panel-danger\">
                        <div class=\"panel-heading\">
                            Error obteniendo filas
                        </div>
                        <div class=\"panel-body\">
                            <p>".$e->getMessage() ."</p>
                        </div>
                        <div class=\"panel-footer\">
                            Ayuda: webmaster@k-pop.com.mx
                        </div>
                    </div>
                    </div>";
		    	die();
         }
	}

	function insertRow($query, $params=array()) {
		try
		{ 
			$this->STH = $this->connection->prepare($query);
			$this->STH->execute($params);
		}catch(PDOException $e){
                echo "<div class=\"col-md-12\">
                    <div class=\"panel panel-danger\">
                        <div class=\"panel-heading\">
                            Error procesando query.
                        </div>
                        <div class=\"panel-body\">
                            <p>".$e->getMessage() ."</p>
                        </div>
                        <div class=\"panel-footer\">
                            Ayuda: webmaster@k-pop.com.mx
                        </div>
                    </div>
                    </div>";
		    	die();
         }
	}

	function updateRow($query, $params=array()) {
		$this->insertRow($query, $params);
	}

	function deleteRow($query, $params=array()) {
		$this->insertRow($query, $params);
	}
	function getLastInsertedId() {
		return $this->connection->lastInsertId();
	}
	function getNumRows() {
		return $this->STH->rowCount();
	}
}
?>