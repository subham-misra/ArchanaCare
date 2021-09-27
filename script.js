/*$("#example").typer({
    strings: [
   "Providing you with the best doctors for the best care"
    ],
    typeSpeed: 200,
    backspaceSpeed: 20,
    backspaceDelay: 800,
    repeatDelay: 1000,
    repeat: true,
    autoStart: true,
    startDelay: 100,
    });
    */
    
    //line
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: ["January", "February", "March", "April", "May", "June", "July","August"],
datasets: [{
label: "Covid Infected",
data: [65, 59, 80, 81, 56, 55, 40,42],
backgroundColor: [
'rgba(105, 0, 132, .2)',
],
borderColor: [
'rgba(200, 99, 132, .7)',
],
borderWidth: 2
},
{
label: "Vaccinated",
data: [28, 48, 40, 19, 86, 27, 90,98],
backgroundColor: [
'rgba(0, 137, 132, .2)',
],
borderColor: [
'rgba(0, 10, 130, .7)',
],
borderWidth: 2
}
]
},
options: {
responsive: true
}
});