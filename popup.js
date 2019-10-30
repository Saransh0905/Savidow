
document.addEventListener('DOMContentLoaded',function(){
    
    var MemoriseButton = document.getElementById('memorise_button');
    var RetrieveButton = document.getElementById('retrieve_button');
    
    MemoriseButton.addEventListener('click',function(){
        var sessionName = document.getElementById('sessionName').value;
        alert("You have saved all tabs");
        var urlArray = [];
        chrome.tabs.getAllInWindow(null,function(tabs)
        {
        tabs.forEach(element => 
            {
            urlArray.push(element.url)
        })
        alert(urlArray);
        localStorage.setItem(sessionName,urlArray);
        console.log(localStorage.getItem("hello"));


    }); 
    },false);
    
    RetrieveButton.addEventListener('click',function(){
        var existingName = document.getElementById('existingName').value;
        console.log(localStorage.getItem(existingName));
    },false);
},false);