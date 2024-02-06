/**
 * Comp 2680 - Final Project
 * Floosh Streaming service
 * Author: Muhammad Danish Bhombal
 * 
 * Script to update the footer at the bottom of every page,
 * will display the last time the website was updated
 */

var p = document.getElementById('lastUpdate');
var today = new Date(document.lastModified);
var lastUpdateDay = today.getDate(); //Insert current date every time the program is updated \ not yet implemented
var lastUpdateMonth = today.getMonth();
var lastUpdateYear = today.getFullYear();

p.innerText = "Last Update: " + today;