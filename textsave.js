const fs = require('fs') 
function saveTextAsFile() {
  var textToWrite = document.getElementById('textArea').innerHTML;
  var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
  let path = "Other Stuff/info.txt"; 
  let data = "Learning how to write in a file."
  fs.writeFile('Output.txt', data, (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
  }) 
// Write data in 'Output.txt' . 

/*
  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
  */

var button = document.getElementById('submit');
button.addEventListener('click', saveTextAsFile);

function destroyClickedElement(event) {
  
  document.body.removeChild(event.target);
}