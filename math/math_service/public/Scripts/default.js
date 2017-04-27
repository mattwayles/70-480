$(document).ready(function () {
    $('#btnAdd').on('click', addNumbers)
    $('#btnSubtract').on('click', subtractNumbers)
    $('#btnMultiplication').on('click', multiplyNumbers)
    $('#btnDivision').on('click', divideNumbers)
});

function addNumbers() {
    var data = getFormData();
    serverAddition(data).done(displayResult);
}
function getFormDate() {
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": x, "y": y };
}
function serverAddition {
    return $.getJSON('/addition', data);
}
function displayResult(serverData) {
    $('#result').html(serverData.result);
}
function subtractNumbers() {
    var data = getFormData()
    serverSubtration(data).done(displayResult);
}
function serverSubtraction(data) {
    return $.post('/subtraction', data, 'json');
}
function multiplyNumbers() {
    var data = getFormData();
    serverMultiplication(data).done(displayResult);
}
function serverMultiplication(data) {
    $.ajax({
        url: '/multiply',
        data: data,
        type: 'PUT',
        cache: false,
        datatype: 'json',
    });
}
function divideNumbers() {
    var data = getFormData();
    serverDivide(data).done(displayResult).fail(displayError);
}
function serverDivide(data) {
    $.ajax({
        url: '/divide',
        data: data,
        type: 'DELETE',
        cache: false,
        datatype: 'json',
    });
}
function displayError(serverData, error) {
    var value = 'No result';
    if ('result' in serverData) value = serverData.result;
    $('#result').html(value + ' - ' + error);
}

