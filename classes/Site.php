<?php
class Site {
	var $db;

	function Site(&$db) {
		$this->db = &$db;
	}

	public function header($title) {
		include("../templates/header.tpl.php");
	}
	
	public function footer() {
		include("../templates/footer.tpl.php");
	}
}
?>