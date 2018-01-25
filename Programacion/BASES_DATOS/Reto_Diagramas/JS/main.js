

$.ajax({
  type: "GET",
  datatype: 'json',
  url: '../PHP/Pagina_1.php',
  success: function(data) {
    var arrayNombres_Superficie = jQuery.parseJSON(data);
    Init(arrayNombres_Superficie);
  }
});


$.ajax({
  type: "GET",
  datatype: 'json',
  url: '../PHP/Pagina_2.php',
  success: function(data) {
    var arrayJapon_Poblacion = jQuery.parseJSON(data);
    Init_Pagina_2(arrayJapon_Poblacion);
  }
});

function Init(arrayNombres_Superficie) {
  console.log(arrayNombres_Superficie);
  new Morris.Bar({
    barGap: 40,
    barSizeRatio: 0.55,
    // ID of the element in which to draw the chart.
    element: document.getElementById('myfirstchart'),
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: arrayNombres_Superficie,
    // The name of the data record attribute that contains x-values.
    xkey: 'Name',
  ymax: 50,
    // A list of names of data record attributes that contain y-values.
    ykeys: ['SurfaceArea'],

    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['SurfaceArea'],
    resize: true,
    hideHover: 'auto'
  });
}


//PAGINA 2 Japon y Población

function Init_Pagina_2(arrayJapon_Poblacion) {
  console.log(arrayJapon_Poblacion);
  new Morris.Bar({
    barGap: 40,
    barSizeRatio: 0.55,
    // ID of the element in which to draw the chart.
    element: document.getElementById('myfirstchart_2'),
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: arrayJapon_Poblacion,
    // The name of the data record attribute that contains x-values.
    xkey: 'Name',
    ymax: 50,
    // A list of names of data record attributes that contain y-values.
    ykeys: ['Population'],

    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Population'],
    resize: true,
    hideHover: 'auto'
  });
}
