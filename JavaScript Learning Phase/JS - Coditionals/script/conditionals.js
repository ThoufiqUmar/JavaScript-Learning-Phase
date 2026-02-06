/*var rain = false

if(rain){
    console.log("Take an umbrella")
}
else{
    console.log("Enjoy the Sunshine")
}
 */

function trafficlight(){

    console.log("Function running");

let isvalid = "";

let color = document.getElementById("color").value.trim().toLowerCase();

    console.log("User input:", color);

if(color == "red"){
    isvalid = "Stop";
}

else if(color == "green"){
    isvalid = "Go";
}
else if(color == "yellow"){
    isvalid = "Wait";
}
else{
    isvalid = "Invalid Color";
}

console.log("Output:",isvalid);

document.getElementById("instruction").innerHTML = isvalid;

}

/*
function trafficlight(){
    document.getElementById("instruction").innerHTML = "HELLO";
}
    */