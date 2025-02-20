
document.querySelector("#image-01").addEventListener("click", function(){
    document.querySelector("#image-02").style.visibility = "visible";
    document.querySelector("body").style.backgroundColor = "blue";
})
document.querySelector("#image-02").addEventListener("click", function(){
    document.querySelector("#image-03").style.visibility = "visible";
    document.querySelector("body").style.backgroundColor = "black";
})
document.querySelector("#image-03").addEventListener("click", function(){
    document.querySelector("#image-01").style.visibility = "hidden";
    document.querySelector("body").style.backgroundColor = "purple";
    
})


//document.querySelector("#image-02").style.visibility = "hidden"