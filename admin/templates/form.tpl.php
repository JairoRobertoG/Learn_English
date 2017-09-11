<div class="row">
        <div class="col-lg-12">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title" align="center">Save Verbs</h3>
                    </div>
                    <div class="panel-body">
                        <form action="welcome.php" method="post">
                            base_form: <input type="text" name="base_form" value="<?php echo $_SESSION['name']; ?>"><br>
                            simple_past: <input type="text" name="simple_past"><br>
                            past_participle: <input type="text" name="past_participle"><br>
                            spanish: <input type="text" name="spanish"><br>

                            <input type="submit">
                        </form>   
                    </div>
                </div>
            </div>    
            
        </div>