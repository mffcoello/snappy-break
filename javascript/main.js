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
       ['Reason of Stress', 'Percentage'],
       ['Lack of Job Security',  6],
       ['Workload', 46],
       ['People Issues', 28],
       ['Juggling Work/Personal Life', 20],
     ]);

     var options = {
       title: 'Reasons for Stress at the Workplace'
     };

     var chart = new google.visualization.PieChart(document.getElementById('piechart'));

     chart.draw(data, options);
   }
