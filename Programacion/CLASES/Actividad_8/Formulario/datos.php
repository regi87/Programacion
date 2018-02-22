<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Formulario Datos</title>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script language="JavaScript" type="text/javascript" src="../JS/comprobar.js"></script>
    <link rel="stylesheet" type="text/css" href="../CSS/css.css">
  </head>

    <body>
    <div class="row">

        <div class="column left">
            <form id="form_trian" action="../Calculo/calculo.php" method="post" >
                <h2>TRIÁNGULO</h2>
                  Base:<br>
                  <input class="inputsNum" id="base" type="number" name="base" value="" placeholder="0" />
                  <br>
                  Altura:<br>
                  <input class="inputsNum" id="altura" type="number" name="altura" value="" placeholder="0" />
                  <br>
                  Lado 1:<br>
                  <input class="inputsNum" id="lado_1" type="number" name="lado_1" value="" placeholder="0" />
                  <br>
                  Lado 2:<br>
                  <input class="inputsNum" id="lado_2" type="number" name="lado_2" value="" placeholder="0" />
                  <br>
                  Lado 3:<br>
                  <input class="inputsNum" id="lado_3" type="number" name="lado_3" value="" placeholder="0" />
                  <br>
                  <input class="button" type="submit" value="Calcular" id="submit_1" form-id="form_trian" />
                  <input hidden name="form" value="form_trian" />

            </form >
          </div>
          <div class="column center">
              <form id="form_cuad" action="../Calculo/calculo.php" method="post" >
                  <h2>CUADRADO</h2>
                    Lado:<br>
                    <input class="inputsNum" id="lado" type="number" name="lado" value="" placeholder="0" />
                    <br>
                    Longitud:<br>
                    <input class="inputsNum" id="longitud" type="number" name="longitud" value="" placeholder="0" />
                    <br>
                    <input class="button" type="submit" value="Calcular" id="submit_2" form-id="form_cuad" />
                    <input hidden name="form" value="form_cuad" />
              </form >
            </div>

            <div class="column right">
                <form id="form_circ" action="../Calculo/calculo.php" method="post" >
                    <h2>CÍRCULO</h2>
                      Radio:<br>
                      <input class="inputsNum" id="radio" type="number" name="radio" value="" placeholder="0" />
                      <br>
                      <input class="button" type="submit" value="Calcular" id="submit_3" form-id="form_circ" />
                      <input hidden name="form" value="form_circ" />
                </form >
              </div>
        </div>

            <table class="right_table">
              <tr>
              	<th>Figura</th>
                <th>Altura</th>
                <th>Base</th>
                <th>Area</th>
                <th>Perimetro</th>
              </tr>
              <tr>
              <td>Triangulo</td>
                <td id="alturaTria"></td>
                <td id="baseTria">  </td>
                <td id="areaTria"></td>
                <td id="perimetroTria"></td>
              </tr>

              <tr>
              	<th>Figura</th>
                <th>Lado</th>
                <th>Longitud</th>
                <th>Area</th>
                <th>Perimetro</th>

              </tr>
              <tr>
              <td>Cuadrado</td>
                <td id="ladoCuad"></td>
                <td id="longitudCuad">  </td>
                <td id="areaCuad"></td>
                <td id="perimetroCuad"></td>
              </tr>
              <tr>
              	<th>Figura</th>
                <th>Lado</th>
                <th>Longitud</th>
                <th>Area</th>
                <th>Perimetro</th>

              </tr>
              <tr>
              <td>Círculo</td>
                <td id="radioCirc"></td>
                <td id="longitudCircu">  </td>
                <td id="areaCirc"></td>
                <td id="perimetroCirc"></td>
              </tr>
            </table>

    </body>
  </html>
