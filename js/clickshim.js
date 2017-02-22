var input = document.getElementById('linkshim').textContent;
var allowed = new Array("a");

window.onclick = function (e) {

  var name = e.target.localName;
  var pub_id = window.pub_id;

  if (window.allowed.indexOf(name) != -1) {

    var data = {};
    data['text'] = e.srcElement.textContent;
    data['target'] = e.srcElement.hasAttribute("href") ? e.srcElement.attributes.href.nodeValue : null;
    data['type'] = name;
    data['id'] = e.srcElement.hasAttribute("id") ? e.srcElement.attributes.id.nodeValue : null;
    data['class'] = e.srcElement.hasAttribute("class") ? e.srcElement.attributes.class.nodeValue : null;
    data['href'] = window.location.href;
    data['protocol'] = window.location.protocol;
    data['host'] = window.location.host;
    data['hostname'] = window.location.hostname;
    data['port'] = window.location.port;
    data['origin'] = window.location.origin;
    data['timestamp'] = Date.now();
    data['input'] = input;

    //console.log( json );

    logData( JSON.stringify(data) );
  }
}

function logData(data) {
    
  var url = "http://clickshim.virt/i.php";
  var request = new XMLHttpRequest();
  var async = true;

  var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

  if (isSafari) {

    var async = false;
  };

  request.open("POST", url, async);
  request.onreadystatechange = function(object) {

    if(request.readyState === 3) {

    }
  };

  request.onload = function () {};

  request.ontimeout = function (e) {};
  
  request.setRequestHeader("Content-Type","application/json")
  request.send(data);
}
