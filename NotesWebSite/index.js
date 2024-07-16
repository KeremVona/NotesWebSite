var inputText = document.getElementById("input");

function takenotefunction() {
    var inputTextValue = inputText.value;
    var paragraph = document.createElement("p");
    var node =  document.createTextNode(inputTextValue);
    paragraph.appendChild(node);
    var element = document.getElementById("main");
    element.appendChild(paragraph);
}

function deletefunction() {
    location.reload();
}