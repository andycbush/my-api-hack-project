//define global variables
//var num; //variable to hold user entered number

//define functions

//call functions

//Step 1 - get user input


$(document).ready(function () {





    $('#myButton').click(function (event) {
        event.preventDefault();
        var num = $('#myNum').val();
        getAPIResults(num);
    });

    function showNumber(str) {
        document.getElementById('number-fact').innerText = str;
    }

    function getAPIResults(num) {

        $.get('http://numbersapi.com/' + num + '/trivia?notfound=floor&fragment', function (data) {
            $('#number').text(data);
        });
    };

    function showAPIResults() {

    }
});
