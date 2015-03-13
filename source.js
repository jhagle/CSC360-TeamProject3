/**
 * Created by hagle on 3/13/2015.
 */


var scanned = 0;

function showResults() {
    document.getElementById('results').innerHTML = 'Store:<br>I Dream of Falafel<br>60 E Jackson Blvd Chicago, IL' +
        '<br><br>Reward Points Gained:<br>+26 From Items Ordered<br>+5 from Chicking In<br>+3 from Today\'s Bonus!';
    document.getElementById('receipt').value = "12464312818123495198";
        scanned++;
}

function checkSurvey(){
    if (scanned == 0){
        alert("Please scan a receipt!");
    }
    else{
        window.location = "survey.html";
    }
}