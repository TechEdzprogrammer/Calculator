let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let six = document.getElementById("6");
let five = document.getElementById("5");
let four = document.getElementById("4");
let three = document.getElementById("3");
let two = document.getElementById("2");
let one = document.getElementById("1");
let zero = document.getElementById("0");
let plus = document.getElementById("+");
let ouputTxt = document.getElementById("output");

seven.addEventListener("click", function(){
    ouputTxt.value += "7";
}); 

eight.addEventListener("click", function(){
    ouputTxt.value += "8";
});

nine.addEventListener("click", function(){
    ouputTxt.value += "9";
});

six.addEventListener("click", function(){
    ouputTxt.value += "6";
});

five.addEventListener("click", function(){
    ouputTxt.value += "5";
});

four.addEventListener("click", function(){
    ouputTxt.value += "4";
});

three.addEventListener("click", function(){
    ouputTxt.value += "3";
});

two.addEventListener("click", function(){
    ouputTxt.value += "2";
});

one.addEventListener("click", function(){
    ouputTxt.value += "1";
});

zero.addEventListener("click", function(){
    ouputTxt.value += "0";
});

document.getElementById("clear").addEventListener('click',function(){
    ouputTxt.value = "";
});

plus.addEventListener('click',function(){
    ouputTxt.value += "+";
});

document.getElementById("x").addEventListener('click',function(){
    ouputTxt.value += "*";
});

document.getElementById("-").addEventListener('click',function(){
    ouputTxt.value += "-";
});

document.getElementById("/").addEventListener('click',function(){
    ouputTxt.value += "/";
});

document.getElementById("erase").addEventListener('click',function(){
    let chars = ouputTxt.value;
    let Erase = chars.replace(chars[0], "");
    ouputTxt.value = Erase;
});

function showResult(){
    ouputTxt.value = eval(ouputTxt.value);
}

