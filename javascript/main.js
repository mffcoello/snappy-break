window.setInterval(function() {
  $( "#clock" ).effect( "shake" );
}, 600);


/**
   * Print the summary and start datetime/date of the next ten events in
   * the authorized user's calendar. If no events are found an
   * appropriate message is printed.
   */

   function clickButton(){
       var acc = document.getElementsByClassName("accordion");
       var i;
   for (i = 0; i < acc.length; i++) {
       acc[i].onclick = function(){
           this.classList.toggle("active");
           var panel = this.nextElementSibling;
           if (panel.style.display === "block") {
               panel.style.display = "none";
           } else {
               panel.style.display = "block";
           }
       }
   }
   }
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

   $(document).ready(clickButton);
   $(document).ready(drawChart);
