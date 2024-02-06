/**
 * Comp 2680 - Final Project
 * Streaming service: Floosh
 * 
 * Muhammad Danish Bhombal
 * T00662679
 * 
 * Script to display sheduled releases
 * 
 * Functions:
 * 
 * scheduleCreate(thisDay)
 *      Creates the Schedule
 * scheduleCaption(DayOfWeek)
 *      Sets the day of the week + "Releases" as the Table Caption
 * schedulePopulate(DayOfWeek)
 *      Fills the table with the shows from the array
 * nextDay(DayOfWeek)
 *      Creates and displays the schedule for The next days releases
 */

var thisDate = new Date();
var thisDay = thisDate.getDay();

var div = document.getElementById("Schedule");
var upNext = document.getElementById("nextDay");

//Display Todays Releases
div.insertAdjacentHTML("afterbegin", sheduleCreate(thisDay));

//Display Tomorrows Releases
upNext.insertAdjacentHTML("beforeend", nextDay(thisDay));

//Display The Day after Tomorrows Releases
upNext.insertAdjacentHTML("beforeend", nextDay(thisDay + 1));

function sheduleCreate(thisDay)
{
    var scheduleHTML = "<table id='scheduleTable'>";

    scheduleHTML += scheduleCaption(thisDay);
    scheduleHTML += schedulePopulate(thisDay);
    scheduleHTML += "</table>"

    return scheduleHTML;
}

function scheduleCaption(DayOfWeek)
{
    //Array containing the days of the week
    var dayOfWeek = ["Sunday", "Monday", "Tuesday",
                    "Wednesday", "Thursday", "Friday", "Saturday"];

    return "<caption>" + dayOfWeek[DayOfWeek] + " Releases</caption>";
}

function schedulePopulate(DayOfWeek)
{
    var scheduleInfo = "";

    /**
     * Each Day has 3 events, hence Index DayOfWeek * 3
     * E.g. Thursday = 4
     * 4*3 = 12
     * Thus indexes 12 13 and 14 will be displayed
     */
    
    scheduleInfo += "<tr> \
                        <td id='time'>4:30 - 5:00PM</td> \
                        <td id='show'>" + showtimes[(DayOfWeek * 3)] + "</td> \
                    </tr>"

    scheduleInfo += "<tr> \
                        <td id='time'>5:00 - 5:30PM</td> \
                        <td id='show'>" + showtimes[(DayOfWeek * 3) + 1] + "</td> \
                    </tr>"

    scheduleInfo += "<tr> \
                        <td id='time'>5:30 - 6:00PM</td> \
                        <td id='show'>" + showtimes[(DayOfWeek * 3) + 2] + "</td> \
                    </tr>"
    
    return scheduleInfo;
}


function nextDay(DayOfWeek)
{
    var comingUpHTML = "<table id='scheduleTable'>";
    var newDay;

    //Increment to the Next Day
    DayOfWeek++;
    if (DayOfWeek == 7) //Resets counter on Sunday
        newDay = 0; 
    else if (DayOfWeek == 8)
        newDay = 1;
    else
        newDay = DayOfWeek; 
        
        comingUpHTML += scheduleCaption(newDay);
        comingUpHTML += schedulePopulate(newDay);
        comingUpHTML += "</table>";
        comingUpHTML += "<br>";
    
    return comingUpHTML;
}


