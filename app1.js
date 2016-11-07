//define global variables
//var num; //variable to hold user entered number

//define functions

//start first api call
function showNumber(str) {
    str = document.getElementById('number-fact').innerText;
}

function getAPIResults(num) {

    $.get('https://crossorigin.me/http://numbersapi.com/' + num + '/trivia?notfound=floor&fragment', function (data) {
        $('#number').text(data);
    });
};

function showAPIResults() {

}
//end first api call

//start 2nd api call
function showRandomNumber(strRandom) {
    strRandom = document.getElementById('number-fact').innerText;
}

function getRandomAPIResults(randomNum) {

    $.get('https://crossorigin.me/http://numbersapi.com/random/trivia', function (data) {
        $('#theRandom').text(data);
    });
};

function showRandomAPIResults() {

}
//end 2nd api call

//start 3rd api call
function showDate(strDate) {
    strDate = document.getElementById('number-fact').innerText;
}

function getDate(theDate) {

    $.get('https://crossorigin.me/http://numbersapi.com/' + theDate + '/date?notfound=floor&fragment', function (data) {
        $('#theDate').text(data);
    });
};

function showDateResults() {

}
//end 3rd api cll

//call functions

//Step 1 - get user input


$(document).ready(function () {


    $('#hack').hide();
    $('#hackRandom').hide();
    $('#hackDate').hide();

    $('#myButton').click(function (event) {
        event.preventDefault();
        var num = $('#myNum').val();
        getAPIResults(num);
        $('#hack').show();
    });

    $('#myRandomButton').click(function (event) {
        event.preventDefault();
        var randomNum = $('#myRandom').val();
        getRandomAPIResults(randomNum);
        $('#hackRandom').show();
    });

    $('#myDateButton').click(function (event) {
        event.preventDefault();
        var theDate = $('#myDate').val();
        getDate(theDate);
        $('#hackDate').show();
    });

    showNumber(str);
    showRandomNumber(strRandom);
    showDate(strDate);

    getAPIResults(num);
    getRandomAPIResults(randomNum);
    getDate(theDate);

    showAPIResults();
    showRandomAPIResults();
    showDateResults();


});

//define global variables
//var num; //variable to hold user entered number



//define functions
function showNumber(str) {
    str = document.getElementById('number-fact').innerText;
}

function getAPIResults(num) {

    $.get('https://crossorigin.me/http://numbersapi.com/' + num + '/trivia?notfound=floor&fragment', function (data) {
        $('#number').text(data);
    });
};

function showAPIResults() {

}

//call functions

//Step 1 - get user input


$(document).ready(function () {


    $('#hack').hide();


    $('#myButton').click(function (event) {
        event.preventDefault();
        var num = $('#myNum').val();
        getAPIResults(num);
        $('#hack').show();
    });

    showNumber(str);

    getAPIResults(num);

    showAPIResults();



});
