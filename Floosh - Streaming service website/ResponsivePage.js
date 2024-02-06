/**
 * Comp 2680 Final Project
 * Floosh Streaming service
 * 
 * Script to make the nav-bar responsive to screen size changes
 */

function navbar() 
{
    var x = document.getElementById("navbar");
    
    if (x.className === "topnav") 
    {
    x.className += " responsive";
    } 
    else 
    {
    x.className = "topnav";
    }
}