<?php
class Site {
	var $db;

	function Site(&$db) {
		$this->db = &$db;
	}

	public function header($title) {
		include("templates/header.tpl.php");
	}
	
	public function footer() {
		include("templates/footer.tpl.php");
	}

	public function checkLogin() {
		if(!isset($_SESSION['id'])){
			header("Location:http://localhost/Learn_English/Learn_English/admin/login.php");
			die();
		}
	}

	public function getLogin() {
		include("templates/login.tpl.php");
	}

	public function showForm() {
		include("templates/form.tpl.php");
	}
}
?>