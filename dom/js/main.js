
console.log("hello java script!")

let pageTitle = document.querySelector("#page-title");

// timout <h1> change color 3 seconds
setTimeout(function(){
    pageTitle.style.color = "pink";
    console.log("timout worked!")
}   ,3000)


// click event on header changes background color
document.querySelector("header").onclick = function() {
    console.log("clicked header!")
    document.querySelector("body").style.backgroundColor = "black";
}