function sum(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var results = parseFloat(num1) + parseFloat(num2);
    document.getElementById("results").innerHTML = results;
}
function sub(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var results = parseFloat(num1) - parseFloat(num2);
    document.getElementById("results").innerHTML = results;
}
function mul(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var results = parseFloat(num1) * parseFloat(num2);
    document.getElementById("results").innerHTML = results;
}
function div(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var results = parseFloat(num1) / parseFloat(num2);
    document.getElementById("results").innerHTML = results;
}