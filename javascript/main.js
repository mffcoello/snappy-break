window.setInterval(function() {
  $( "#clock" ).effect( "shake" );
}, 600);

function clickAction(){
$('.panel').toggle(100)


}

function setup(){
    $('.aboutus').on('click' , clickAction);
    $('.panel').hide()
}

function clickAction2(){
$('.stats').toggle(100)
}

function setup2(){
    $('.statsbutton').on('click' , clickAction2);
    $('.stats').hide()
}


$(document).ready(setup);
$(document).ready(setup2);



   google.charts.load('current', {'packages':['corechart']});
   google.charts.setOnLoadCallback(drawChart);

   function drawChart() {

     var data = google.visualization.arrayToDataTable([
       ['Task', 'Hours per Day'],
       ['Work',     11],
       ['Eat',      2],
       ['Commute',  2],
       ['Watch TV', 2],
       ['Sleep',    7]
     ]);

     var options = {
       title: 'My Daily Activities'
     };

     var chart = new google.visualization.PieChart(document.getElementById('piechart'));

     chart.draw(data, options);
   }
