<div class="row">
            <div class="col-lg-12">

<?php if($error) { ?>
  ERROR <?php echo $error; ?>
<?php
}
?>
<form action="login.php?accion=login" method="POST">
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" name="email" class="form-control" id="email">
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" name="password" class="form-control" id="pwd">
  </div>
  <button type="submit" class="btn btn-default">Iniciar sesion</button>
</form>

</div>
</div>