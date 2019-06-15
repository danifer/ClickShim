var input = document.getElementById('linkshim').textContent;
var link = document.querySelectorAll('a,p');
var pub_id = window.pub_id;
var url = "http://e.clickshim.com/i.php";
var request = new XMLHttpRequest();

function logData(data) {
  var async = true;
  var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

  if (isSafari) {
    var async = false;
  };

  request.open("POST", url, async);
  request.setRequestHeader("Content-Type","application/json")
  request.send(data);

  return;
}

function registerClick(event) {
    var data = {};
    data['text'] = event.srcElement.textContent;
    data['target'] = event.srcElement.hasAttribute("href") ? event.srcElement.attributes.href.nodeValue : null;
    data['type'] = event.target.localName;
    data['id'] = event.srcElement.hasAttribute("id") ? event.srcElement.attributes.id.nodeValue : null;
    data['class'] = event.srcElement.hasAttribute("class") ? event.srcElement.attributes.class.nodeValue : null;
    data['segment'] = event.srcElement.hasAttribute("segment") ? event.srcElement.getAttribute('segment') : null;
    data['href'] = window.location.href;
    data['protocol'] = window.location.protocol;
    data['host'] = window.location.host;
    data['hostname'] = window.location.hostname;
    data['port'] = window.location.port;
    data['origin'] = window.location.origin;
    data['timestamp'] = Date.now();
    data['input'] = input;

    console.log( JSON.stringify(data) );

    logData( JSON.stringify(data) );

    return;
}

function init() {
    for (var i = 0; i < link.length; i++) {
        if (window.addEventListener) {
            link[i].addEventListener('mousedown', registerClick, true);
        } else if (window.attachEvent) { 
            link[i].attachEvent('onmousedown', registerClick);
        }
    }

    return;
}

if (window.addEventListener) { //when document is loaded initiate init
    document.addEventListener("DOMContentLoaded", init, false);
} else if (window.attachEvent) {
    document.attachEvent("onDOMContentLoaded", init);
}

