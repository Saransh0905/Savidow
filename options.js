document.addEventListener("DOMContentLoaded",()=>{
  var div = document.getElementById("main");
  setCB = (bttn)=>{
    bttn.onclick = ()=>{
      var links = localStorage.getItem(bttn.name).split(",");
      console.log(links);
      chrome.windows.create({url: links});
    }
  }
  for (let index = 0; index < localStorage.length; index++) {
    var node = document.createTextNode(localStorage.key(index));
    var bttnObj = document.createElement("button");
    bttnObj.name = node.textContent;
    bttnObj.appendChild(node);
    setCB(bttnObj)
    /*bttnObj.onclick = (obj)=>{
      console.log(obj.name);
    }
    */

    div.appendChild(bttnObj);
    console.log(localStorage.key(index));
  }
  var openEvent = document.getElementById("open");
  openEvent.onclick = ()=>{
    var title = document.getElementById("openTitle").value;
    console.log(localStorage.getItem(title));
  }
  
})