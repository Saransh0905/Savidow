document.addEventListener("DOMContentLoaded",()=>{
    var addEvent = document.getElementById("addEvent");
    var openEvent = document.getElementById("open");
    var arr;
    addEvent.onclick = ()=>{
        arr = [];
        var title = document.getElementById("title").value;
        chrome.tabs.getAllInWindow(null,(tabs)=>{
            tabs.forEach((element)=>{
                arr.push(element.url);
            });
            localStorage.setItem(title, arr);
        });
    }    
})