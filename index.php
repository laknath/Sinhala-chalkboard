<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script type="text/javascript" src="assets/js/jquery.js"></script>
        <!--[if IE]><script type="text/javascript" src="assets/js/excanvas.js"></script><![endif]-->
        <script type="text/javascript" src="assets/js/chalkboard.js"></script>
        <title></title>
    </head>
    <body>
        <form>
            <fieldset>
                <legend>Application mode</legend>
                <input type="radio" name="mode" value="train" id="mode_train" checked="true" /><label for="mode_train">Train</label>
                <input type="radio" name="mode" value="predict" id="mode_predict" /><label for="mode_predict">Predict</label>                
            </fieldset>
        </form>
                
        <div id="canvasDiv" style="border: 1px solid #000; width: 420px; height: 300px; margin: auto"></div>
        
        <fieldset>
            <div  style="width: 300px; margin: auto">
                <input type="button" name="clear_board" id="clear_board" value="Clear Board" />
                <input type="button" name="identify_char" id="identify_char" value="Identify character" />
                <input type="text" name="char_text" id="char_text" value="" max="1" size="1" />
                <input type="button" name="add_char" id="add_char" value="Add character" />                                                      
            </div>           
        </fieldset>                    
    </body>
</html>
