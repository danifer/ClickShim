window.onclick = function (e) {
    
    var allowed = new Array("a");
    var name = e.target.localName;
    if (allowed.indexOf(name) != -1) {

        var data = {};
        data['text'] = e.srcElement.textContent;
        data['target'] = e.srcElement.hasAttribute("href") ? e.srcElement.attributes.href.nodeValue : null;
        data['type'] = name;
        data['id'] = e.srcElement.hasAttribute("id") ? e.srcElement.attributes.id.nodeValue : null;
        data['class'] = e.srcElement.hasAttribute("class") ? e.srcElement.attributes.class.nodeValue : null;


        console.log( JSON.stringify(data) );

        //post data to API
    }
}
