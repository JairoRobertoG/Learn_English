<?php
session_start();
//Load all the classes
spl_autoload_register(function ($class) {
    include 'classes/' . $class . '.php';
});
$db = new DB();
$site = new Site($db, "Formulario Verbos");
$site->checkLogin();
$site->header("Formulario de Verbos");
$site->showForm();
$site->footer();
?>
<!--<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Learn English Application</title>
        <link href="images/icon/learn-english-application-icon.ico" rel="shortcut icon" type="image/x-icon">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="user-scalable=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta name="description" content="Learn english easy" />
        <meta name="author" content="Jairo Gomez" />

        <link href="../css/bootstrap.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
        <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>
    </head>
    <body>
        <nav class="navbar navbar-default" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse"
                        data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Desplegar navegación</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">Learn English</a>
            </div>
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav">
                    <li><a href="table-verbs.html"><i class="glyphicon glyphicon-book"></i> Table Verbs</a></li>
                    <li><a href="alphabet.html"><i class="glyphicon glyphicon-list-alt"></i> Alphabet</a></li>
                    <li><a href="spelling.html"><i class="glyphicon glyphicon-bullhorn"></i> Spelling</a></li>
                </ul>
            </div>
        </nav>

        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title" align="center">Save Verbs</h3>
                    </div>
                    <div class="panel-body">
                        <form action="welcome.php" method="post">
                            base_form: <input type="text" name="base_form"><br>
                            simple_past: <input type="text" name="simple_past"><br>
                            past_participle: <input type="text" name="past_participle"><br>
                            spanish: <input type="text" name="spanish"><br>

                            <input type="submit">
                        </form>   
                    </div>
                </div>
            </div>    
            
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="../js/bootstrap.min.js"></script>
    </body>
    </html>-->