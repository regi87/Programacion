<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Arena</title>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script language="JavaScript" type="text/javascript" src="../Scripts/JS/arena.js"></script>
    <link rel="stylesheet" type="text/css" href="../Recursos/CSS/imagenes.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="../Recursos/CSS/buttons.css" media="screen" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  </head>
  <body>
    <?php $pokemon=$_GET["pokemon"];?>
    <div align="center">
      <h1 id="turnos"></h1>
      <h2 id="cronometro">30</h2>
       <input id="pokemon" hidden value="<?php echo $pokemon;?>"></input>
    </div>
            <div class="img_1" >
              <div class="w3-container">
                <p id="vida_1"   style="color: #FFFF;text-shadow: -1px 0 black,
                 0 1px black, 1px 0 black, 0 -1px black;" align="center"></p>
               <div class="w3-red">
                 <div class="w3-green" id="bar_1_vida" style="height:24px;width:100%"></div>
                 <div class="w3-blue" id="bar_1_defensa" style="height:14px;width:100%"></div>
               </div>
             </div>

              <img id="pokemon_Player" src =""  width="230" height="200" />
              <br><br>
              <div align="center">
                <input class="button2" type="button" id="ataque_Player_1" value="ataque 1"/>
                <br>
                <input class="button2" type="button" id="defensa_Player_1" value="defensa 1"/>
            </div>
            </div>
            <div class="img_2" >
                     <div class="w3-container">
                       <p id="vida_2"  style="color: #FFFF;text-shadow: -1px 0 black,
                        0 1px black, 1px 0 black, 0 -1px black;" align="center"></p>
                      <div class="w3-red">
                        <div class="w3-green" id="bar_2_vida" style="height:24px;width:100%"></div>
                        <div class="w3-blue" id="bar_2_defensa" style="height:14px;width:100%"></div>
                      </div>
                    </div>

                <img id="pokemon_Player_2"  src =""  width="230" height="200" />
                <br><br>
                <div align="center">
                  <input class="button2" type="button" id="ataque_Player_2" value="ataque 1"/>
                  <br>
                  <input class="button2" type="button" id="defensa_Player_2" value="defensa 1"/>
              </div>
            </div>




  </body>
</html>
