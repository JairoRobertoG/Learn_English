<?php
session_start();
//Load all the classes
spl_autoload_register(function ($class) {
    include 'classes/' . $class . '.php';
});
$db = new DB();
$site = new Site($db, "Formulario Verbos");
$user = new User($db);
$accion = $_GET['accion'];
$site->header("Formulario de Verbos");
if($accion == "login") {
	$user->Login($_POST);
} else {
	$site->getLogin();
}
$site->footer();
?>