
document.addEventListener('DOMContentLoaded',function(){
    var sel = document.getElementById('listOfKeys');
    for (let i = 0; i < localStorage.length; i++) {
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(localStorage.key(i)));
        opt.value = localStorage.key(i) ; 
        sel.appendChild(opt); 
        
    }
    
    var MemoriseButton = document.getElementById('memorise_button');
    var RetrieveButton = document.getElementById('retrieve_button');
    
    MemoriseButton.addEventListener('click',function(){
        var sessionName = document.getElementById('sessionName').value;
        alert("You have saved all tabs");
        var urlArray = [];
        chrome.tabs.getAllInWindow(null,function(tabs){
        tabs.forEach(element =>{
            urlArray.push(element.url)
        })
        localStorage.setItem(sessionName,urlArray);
        console.log(localStorage.getItem("hello"));
    });

    },false);
    
    RetrieveButton.addEventListener('click',function(){
        var toOpen = document.getElementById("listOfKeys").value;
        var urlArray = localStorage.getItem(toOpen).split(",");
        //console.log(localStorage.getItem(toOpen));
        chrome.windows.create({url: urlArray});
    },false);
},false);