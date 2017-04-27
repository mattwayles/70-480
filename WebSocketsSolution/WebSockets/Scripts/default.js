﻿/// <reference path="_references.js" />


var wsUri = 'ws://echo.websocket.org/';
var webSocket;
var timerId = 0;

$(document).ready(function () {
    if (checkSupported()) {
        connect();
        $('#btnSend').click(doSend);
    }
});

function writeOutput(message) {
    var output = $('#divOutput');
    output.html(output.html() + '<br />' + message);
}
function checkSupported() {
    if (window.WebSocket) {
        writeOutput('WebSockets supported!');
        return true;
    }
    else {
        writeOutput('Websockets NOT supported!');
        $('#btnSend').attr('disabled', 'disabled');
        return false;
    }
}
function connect() {
    webSocket = new WebSocket(wsUri);
    webSocket.onopen = function (evt) { onOpen(evt) };
    webSocket.onclose = function (evt) { onClose(evt) };
    webSocket.onmessage = function (evt) { onMessage(evt) };
    webSocket.onerror = function (evt) { onError(evt) };
}
function keepAlive() {
    var timeout = 15000;
    if (webSocket.readyState == webSocket.OPEN) {
        webSocket.send('');
    }
    timerId = setTimeout(keepAlive, timeout);
}
function cancelKeepAlive() {
    if (timerId) {
        cancelTimeout(timerId);
    }
}
function doSend() {
    if (webSocket.readyState != webSocket.OPEN) {
        writeOutput("NOT OPEN: " + $('#txtMessage').val());
        return;
    }
    writeOutput("SENT: " + $('#txtMessage').val());
}
function onOpen(evt) {
    writeOutput("CONNECTED");
    keepAlive();
}
function onClose(evt) {
    writeOutput("DISCONNECTED");
}
function onMessage(evt) {
    cancelKeepAlive();
    writeOutput("RESPONSE: " + evt.data);
}
function onError(evt) {
    writeOutput("ERROR: " + evt.data);
}
