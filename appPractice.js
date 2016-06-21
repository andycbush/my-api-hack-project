/*
$(function () {

    var data = $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json');

    $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function () {

        console.log(data);
    });

    $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function (data) {
        var myData = data.Search;
        $.each(myData, function (index, value) {
            console.log(value.Title);
        });
    });
});
*/
/*
function showResults(results) {
    var html = "";
    $.each(results, function (index, value) {
        html += '<p>' + value.Title + '</p>';
        console.log(value.Title);
    });
    $('#search-results').html(html);
}

$(function () {

    var data = $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json');

    $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function (data) {

        showResults(data.Search);
    });

});
*/
/*
function showResults(results) {
    var html = "";
    $.each(results, function (index, value) {
        html += '<p>' + value.Title + '</p>';
        console.log(value.Title);
    });
    $('#search-results').html(html);
}

$(function () {

    $('#search-term').submit(function (event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        $.getJSON('http://www.omdbapi.com/?s=' + searchTerm + '&r=json', function (data) {
            showResults(data.Search);
        });
    });
})
*/
/*
function getRequest(searchTerm) {
    $.getJSON('http://www.omdbapi.com/?s=' + searchTerm + '&r=json', function (data) {
        showResults(data.Search);
    });
}

function showResults(results) {
    var html = "";
    $.each(results, function (index, value) {
        html += '<p>' + value.Title + '</p>';
        console.log(value.Title);
    });
    $('#search-results').html(html);
}
$(function () {
    $('#search-term').submit(function (event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm);
    });
});
*/
function getRequest(searchTerm) {
    var params = {
        s: searchTerm,
        r: 'json'
    };
    url = 'http://www.omdbapi.com';
    $.getJSON(url, params, function (data) {
        showResults(data.Search);
    });
}

function showResults(results) {
    var html = "";
    $.each(results, function (index, value) {
        html += '<p>' + value.Title + '</p>';
        console.log(value.Title);
    });
    $('#search-results').html(html);
}
$(function () {
    $('#search-term').submit(function (event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm);
    });
});
