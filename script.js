const clicker = document.getElementById("clicker");


function clickTheSquare() { 

    console.log("click was called");

    if (clicker.className === "blackColor") 
    {
        clicker.className = "blueColor";
    } else {
        clicker.className = "blackColor";
    }
}

console.log("click was called");
clicker.addEventListener("click", clickTheSquare);









/*
function alertButton() {
    alert("hello");
}
clicker.addEventListener("click", alertButton);

const firstColor = "blackColor";
    const secondColor = "blueColor";
*/