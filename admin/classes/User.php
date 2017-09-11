<?php
class User
{
    var $db;

    function User(&$db)
    {
        $this->db = &$db;
    }

    public function Login($info)
    {
        $email = $info["email"];
        $password = $info["password"];
        $query = $this->db->getRow("SELECT id, name FROM users WHERE email = ? AND password = ?", array($email, md5("Jairo" . $password)));
        if ($this->db->getNumRows() == 0) {
            $error = "Login Incorrecto";
            include ("templates/login.tpl.php");
        }
        else {
            $_SESSION['id'] = $query['id'];
            $_SESSION['name'] = $query['name'];
            echo "<script type=\"text/javascript\">window.location.replace(\"http://localhost/Learn_English/Learn_English/admin/form.php\");</script>";
        }
    }
}
?>