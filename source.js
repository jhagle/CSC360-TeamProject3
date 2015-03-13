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

function slideRating(val){
    if(val == 0) {
        document.getElementById('slideRat').innerHTML = "Very Dirty";
    }
    if(val == 25) {
        document.getElementById('slideRat').innerHTML = "Pretty Dirty";
    }
    if(val == 50) {
        document.getElementById('slideRat').innerHTML = "Average";
    }
    if(val == 75) {
        document.getElementById('slideRat').innerHTML = "Pretty Clean";
    }
    if(val == 100) {
        document.getElementById('slideRat').innerHTML = "Very Clean";
    }
}

function completeSurvey(){
    alert("Thank you for completing the survey!");
    window.location = "index.html";
}

function starRating(rat){
    var img1 = document.getElementById('1');
    var img2 = document.getElementById('2');
    var img3 = document.getElementById('3');
    var img4 = document.getElementById('4');
    var img5 = document.getElementById('5');

    if(rat==1){
        img2.style.visibility = 'hidden';
        img3.style.visibility = 'hidden';
        img4.style.visibility = 'hidden';
        img5.style.visibility = 'hidden';
    }
    if(rat==2){
        img3.style.visibility = 'hidden';
        img4.style.visibility = 'hidden';
        img5.style.visibility = 'hidden';
    }
    if(rat==3){
        img4.style.visibility = 'hidden';
        img5.style.visibility = 'hidden';
    }
    if(rat==4){
        img5.style.visibility = 'hidden';
    }
    if(rat==5){

    }
}
function resetStar() {
    document.getElementById('2').style.visibility = 'visible';
    document.getElementById('3').style.visibility = 'visible';
    document.getElementById('4').style.visibility = 'visible';
    document.getElementById('5').style.visibility = 'visible';
}