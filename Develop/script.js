// the current day is displayed at the top of the calendar
function setTime() {
    var currentDay = setInterval(function() {
      var currentDay = moment().format("hh:mm:ss dddd MMM Do, YYYY");
      $("#currentDay").text(currentDay);
  
    }, 1000);
}
setTime();

// each timeblock is color coded to indicate whether it is in the past, present, or future
var currentHour = moment().format("H");

var nineAM = document.getElementById("nineAM");
var tenAM = document.getElementById("tenAM");
var elevenAM = document.getElementById("elevenAM");
var twelvePM = document.getElementById("twelvePM");
var onePM = document.getElementById("onePM");
var twoPM = document.getElementById("twoPM");
var threePM = document.getElementById("threePM");
var fourPM = document.getElementById("fourPM");
var fivePM = document.getElementById("fivePM");

var nineAMTextArea = document.getElementById("nineAMText");
var tenAMTextArea = document.getElementById("tenAMText");
var elevenAMTextArea = document.getElementById("elevenAMText");
var twelvePMTextArea = document.getElementById("twelvePMText");
var onePMTextArea = document.getElementById("onePMText");
var twoPMTextArea = document.getElementById("twoPMText");
var threePMTextArea = document.getElementById("threePMText");
var fourPMTextArea = document.getElementById("fourPMText");
var fivePMTextArea = document.getElementById("fivePMText");

var nineAMButton = document.getElementById("nineAMButton");
var tenAMButton = document.getElementById("tenAMButton");
var elevenAMButton = document.getElementById("elevenAMButton");
var twelvePMButton = document.getElementById("twelvePMButton");
var onePMButton = document.getElementById("onePMButton");
var twoPMButton = document.getElementById("twoPMButton");
var threePMButton = document.getElementById("threePMButton");
var fourPMButton = document.getElementById("fourPMButton");
var fivePMButton = document.getElementById("fivePMButton");

var resetButton = document.getElementById("resetButton");


console.log(currentHour);

// Change text area color respective of current time
if (9 == currentHour) {
    $(nineAMTextArea).addClass("present");
    } else if (9 > currentHour) {
        $(nineAMTextArea).addClass("future");
    } else {
        $(nineAMTextArea).addClass("past");
}

if (10 == currentHour) {
    $(tenAMTextArea).addClass("present");
    } else if (10 > currentHour) {
        $(tenAMTextArea).addClass("future");
    } else {
        $(tenAMTextArea).addClass("past");
}

if (11 == currentHour) {
    $(elevenAMTextArea).addClass("present");
    } else if (11 > currentHour) {
        $(elevenAMTextArea).addClass("future");
    } else {
        $(elevenAMTextArea).addClass("past");
}

if (12 == currentHour) {
    $(twelvePMTextArea).addClass("present");
    } else if (12 > currentHour) {
        $(twelvePMTextArea).addClass("future");
    } else {
        $(twelvePMTextArea).addClass("past");
}

if (13 == currentHour) {
    $(onePMTextArea).addClass("present");
    } else if (13 > currentHour) {
        $(onePMTextArea).addClass("future");
    } else {
        $(onePMTextArea).addClass("past");
}

if (14 == currentHour) {
    $(twoPMTextArea).addClass("present");
    } else if (14 > currentHour) {
        $(twoPMTextArea).addClass("future");
    } else {
        $(twoPMTextArea).addClass("past");
}

if (15 == currentHour) {
    $(threePMTextArea).addClass("present");
    } else if (15 > currentHour) {
        $(threePMTextArea).addClass("future");
    } else {
        $(threePMTextArea).addClass("past");
}

if (16 == currentHour) {
    $(fourPMTextArea).addClass("present");
    } else if (16 > currentHour) {
        $(fourPMTextArea).addClass("future");
    } else {
        $(fourPMTextArea).addClass("past");
}

if (17 == currentHour) {
    $(fivePMTextArea).addClass("present");
    } else if (17 > currentHour) {
        $(fivePMTextArea).addClass("future");
    } else {
        $(fivePMTextArea).addClass("past");
}

// onclicks
nineAMButton.onclick = function(){
    localStorage.setItem('9AMText', nineAMTextArea.value);
};

tenAMButton.onclick = function(){
    localStorage.setItem('10AMText', tenAMTextArea.value);
};

elevenAMButton.onclick = function(){
    localStorage.setItem('11AMText', elevenAMTextArea.value);
};

twelvePMButton.onclick = function(){
    localStorage.setItem('12PMText', twelvePMTextArea.value);
};

onePMButton.onclick = function(){
    localStorage.setItem('1PMText', onePMTextArea.value);
};

twoPMButton.onclick = function(){
    localStorage.setItem('2PMText', twoPMTextArea.value);
};

threePMButton.onclick = function(){
    localStorage.setItem('3PMText', threePMTextArea.value);
};

fourPMButton.onclick = function(){
    localStorage.setItem('4PMText', fourPMTextArea.value);
};

fivePMButton.onclick = function(){
    localStorage.setItem('5PMText', fivePMTextArea.value);
};

// Text append
$(nineAMTextArea).val(localStorage.getItem('9AMText'));

$(tenAMTextArea).val(localStorage.getItem('10AMText'));

$(elevenAMTextArea).val(localStorage.getItem('11AMText'));

$(twelvePMTextArea).val(localStorage.getItem('12PMText'));

$(onePMTextArea).val(localStorage.getItem('1PMText'));

$(twoPMTextArea).val(localStorage.getItem('2PMText'));

$(threePMTextArea).val(localStorage.getItem('3PMText'));

$(fourPMTextArea).val(localStorage.getItem('4PMText'));

$(fivePMTextArea).val(localStorage.getItem('5PMText'));

// RESET
resetButton.onclick = function(){
    confirm("Are you sure you want to clear all text boxes?");
    localStorage.setItem('9AMText', "");
    localStorage.setItem('10AMText', "");
    localStorage.setItem('11AMText', "");
    localStorage.setItem('12PMText', "");
    localStorage.setItem('1PMText', "");
    localStorage.setItem('2PMText', "");
    localStorage.setItem('3PMText', "");
    localStorage.setItem('4PMText', "");
    localStorage.setItem('5PMText', "");
    location.reload();
};