<?php
  //Creación de objetos
  include("../Clases/triangulo.php");
  include("../Clases/cuadrado.php");
  include("../Clases/circulo.php");
  function GetTriangulo()
  {
        //Objetos acceso clases
          $obj_triangulo = new Triangulo();

          $obj_triangulo->SetBase($_POST["base"]);
          $_base=$obj_triangulo->GetBase();
          $_altura=$obj_triangulo->SetAltura($_POST["altura"]);
          $_altura=$obj_triangulo->GetAltura();
          $area = $obj_triangulo->CalculoArea();
          $obj_triangulo->SetPerimetro($_POST["lado_1"],$_POST["lado_1"],$_POST["lado_1"]);
          $perimetro = $obj_triangulo->GetPerimetro();

          $arraTri= array("base" =>  $_base, "altura" =>$_altura, "area"=>$area, "perimetro"=>$perimetro,"form"=>"form_trian");

          $json_string = json_encode($arraTri);
          echo $json_string;
  }

  function GetCuadrado()
  {
        $obj_cuadrado = new Cuadrado();
        $obj_cuadrado->SetLado($_POST["lado"]);
        $_lado=$obj_cuadrado->GetLado();

        $obj_cuadrado->SetLongitud($_POST["longitud"]);
        $_longitud=$obj_cuadrado->GetLongitud();

        $_area=$obj_cuadrado->CalculoArea();


        $obj_cuadrado->SetPerimetro($_POST["longitud"]);
        $_perimetro=$obj_cuadrado->GetPerimetro();

        $arraCuadrado= array("lado" =>  $_lado, "longitud" =>$_longitud,"area"=>$_area,"perimetro"=>$_perimetro,"form"=>"form_cuad");

        $json_string = json_encode($arraCuadrado);
        echo $json_string;

  }

  function GetCirculo()
  {
        $obj_circulo = new Circulo();
        $obj_circulo->SetRadio($_POST["radio"]);
        $_radio=$obj_circulo->GetRadio();

        $_longitud=$_radio;

        $_area=$obj_circulo->CalculoArea();


        $_perimetro=$obj_circulo->GetPerimetro();

        $arrayCirculo= array("radio" =>$_radio, "longitud" =>$_longitud,"area"=>$_area,"perimetro"=>$_perimetro,"form"=>"form_circ");

        $json_string = json_encode($arrayCirculo);
        echo $json_string;

  }

  if($_POST["form"]=="form_trian")
    GetTriangulo();
    else if ($_POST["form"]=="form_cuad")
    {
      GetCuadrado();
    }
    else
    {
      GetCirculo();
    }

 ?>
