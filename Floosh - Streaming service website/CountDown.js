/**
 * Comp 2680 - Final Project
 * Business: Floosh
 * Author: Muhammad Danish Bhombal
 * T00662679
 * 
 * SCRIPT TO TRACK THE COUNTDOWN UNTIL THE WEBSITE HITS LIVE
 * 
 * Live Date: Feb 24th 2023
 * 
 */

//Loops every second
var COUNTDOWN = setInterval(function()
{
    //Date the website is expected to go live 
    var liveDate = new Date("Febuary 23, 2023").getTime();
    var now = new Date().getTime();
    var timeleft = liveDate - now;
    
    //Calculating the amount of time left into a readable output
    var months = Math.floor(timeleft / (1000 * 60 * 60 * 24 * 30));
    var days = Math.floor(timeleft % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    //This should change the text on the h3 which has the id "CountDown" every second
    document.getElementById("CountDown").innerHTML = months + " Months<br>" + days + " Days<br>" + hours + " Hours<br>" + minutes + " Mins<br>" + seconds + " Secs"
}, 1000)




