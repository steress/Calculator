const buttons = document.querySelectorAll('.buttons');
const buttonAdd = document.querySelector('#add');
const buttonSubtract = document.querySelector('#subtract');
const buttonMultiply = document.querySelector('#multiply');
const buttonDivide = document.querySelector('#divide');
const buttonEqual = document.querySelector('#equal');
const clearBtn = document.querySelector(".clear");
const backspaceBtn = document.querySelector(".delete");
const decimal = document.querySelector("#decimal");
const span = document.querySelector('.new')
const spanOld = document.querySelector('.old');



const chars = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "F5"
];

const operators = [
    "-",
    "=",
    "+",
    "/",
    "*",
    "Enter",
    "Delete",
    "Backspace",
    "F5"
];
let d = "";
let c = "";
let clicked = false;
let newString = "";
let answer = "";
let a = "";
let b = "";
let operation = "";

function Display(){
    newSpan = document.createElement("span");
    newSpan.classList.add("new");
    oldSpan = document.createElement("span");
    oldSpan.classList.add("old");
    if (b === "" && operation === ""){
        while (span.firstChild) {
            span.removeChild(span.firstChild);
          }
            newSpan.appendChild(document.createTextNode(`${a}`));
            if (operation === "/"){
                oldSpan.appendChild(document.createTextNode(`${"\u00F7"}`));
            } else {
                oldSpan.appendChild(document.createTextNode(`${operation}`));
            }
            span.appendChild(newSpan);
    } else if (clicked == true && c !== ""){
         console.log("asd")
        while (spanOld.firstChild){
            spanOld.removeChild(spanOld.firstChild)
        }
        oldSpan.appendChild(document.createTextNode(`${d} `));
            if (operation === "/"){
                oldSpan.appendChild(document.createTextNode(`${"\u00F7"} `));
            } else {
                oldSpan.appendChild(document.createTextNode(`${operation} `));
            }
        oldSpan.appendChild(document.createTextNode(`${c} `));
        oldSpan.appendChild(document.createTextNode(`${"="} `));
        spanOld.appendChild(oldSpan);
        while (span.firstChild) {
            span.removeChild(span.firstChild);
          }
        newSpan.appendChild(document.createTextNode(`${a} `));
            span.appendChild(newSpan)
        clicked = false;
    } else {
        while (spanOld.firstChild){
            spanOld.removeChild(spanOld.firstChild)
        }
        oldSpan.appendChild(document.createTextNode(`${a} `));
        if (operation === "/"){
            oldSpan.appendChild(document.createTextNode(`${"\u00F7"} `));
        } else {
            oldSpan.appendChild(document.createTextNode(`${operation} `));
        }
        spanOld.appendChild(oldSpan);
        while (span.firstChild) {
            span.removeChild(span.firstChild);
          }
            newSpan.appendChild(document.createTextNode(`${b} `));
            span.appendChild(newSpan);
    }
}
buttons.forEach(buttons => {
    buttons.addEventListener("click", function(e){
        if (operation === ""){
            a += e.target.innerText;
            Display();
            console.log(`a is ${a}`);
        } else {
            b += e.target.innerText;
            Display();
            console.log(`b is ${b}`);
        }
    })
})

buttonSubtract.addEventListener('click', function() {
    Subtract();
    Display();
});
buttonAdd.addEventListener('click', function() {
    Add();
    Display();
});
buttonMultiply.addEventListener('click', function() {
   Multiply();
   Display();
});
buttonDivide.addEventListener('click', function() {
    Divide();
    Display();
});
buttonEqual.addEventListener('click', function (){
    Equal();
    Display();
});
clearBtn.addEventListener('click', function() {
    Clear();
});
backspaceBtn.addEventListener('click', function() {
    backSpace();

});
decimal.addEventListener('click', function() {
    Decimal();
    Display();
});

window.addEventListener("keydown", function (e) {
    if (chars.includes(e.key)) {
        if(operation === "" && e.key !== "F5"){
            a += e.key;
            Display();
        } else if (e.key !== "F5"){
            b += e.key;
            Display();
        }  
    } else e.preventDefault();
});

window.addEventListener("keydown", function(e) {
if (operators.includes(e.key)){
    if(e.key === "-") {
        operation = e.key;
        Subtract();
        Display();
    } else if (e.key === "+"){
        operation = e.key;
        Add();
        Display();
    } else if (e.key === "/"){
        operation = e.key;
        Divide();
        Display();
    } else if (e.key === "*"){
        operation = e.key;
        Multiply();
        Display();
    } else if (e.key === "Enter" || e.key === "="){
        Equal();
        Display();
    } else if (e.key === "Delete"){
        Clear();
        Display();
    } else if (e.key === "Backspace"){
        backSpace();
        Display();
    }
} else e.preventDefault();
});

function Subtract() {
    if (operation !== "" && a !== "" && b !== ""){
        operation = "-"
        operate();
        a = answer;
        b = "";
    }
    operation = "-";
    if (a === ""){
        a += "-";
        operation = "";
    } else if (a === "-"){
        a = "";
        operation = "";
    } else if (a !== "" && b !== ""){
        operate();
        a = answer;
        b = "";
    }
};

function Add() {
    if (operation !== "" && a !== "" && b !== ""){
        operation = "+"
        operate();
        a = answer;
        b = "";
    }
    operation = "+"
    if (a === "") {
        operation = "";
    } else if (a === "-"){
        a = "";
        operation = "";
    } else if (a !== "" && b !== ""){
        operate();
        a = answer;
        b = "";
    }
};

function Multiply() {
    if (operation !== "" && a !== "" && b !== ""){
        if (b === "0"){
        b = "";
        } else {
            operate();
            a = answer;
            b = "";
        } 
    };
    operation = "*";
    if (a === "") {
        operation = "";
    } else if (a === "-"){
        a = "";
        operation = "";
    } else if (a !== "" && b !== ""){
        operate();
        a = answer;
        b = "";
    }
};

function Divide() {
    if (operation !== "" && a !== "" && b !== ""){
        if (b === "0"){
        b = "";
        alert("Cant Divide by 0!")
        } else {
            operate();
            a = answer;
            b = "";
        } 
    };
    operation = "/";  
    if (a === "") {
        operation = "";
    } else if (a === "-"){
        a = "";
        operation = "";
    } else if (a !== "" && b !== ""){
        operate();
        a = answer;
        b = "";
    }
};

function Equal() {
    clicked = true;
    c = b;
    d = a;
    if (operation !== "" && a === "" && b === ""){
        operation = "";
    }
    if (operation === "/" && a !== "" && b !== ""){
        if (b === "0"){
        b = "";
        c = "";
        alert("Cant Divide by 0!");
        } else {
            operate();
            a = answer;
            b = "";
        } 
    };
    if (a !== "" && b === ""){
        return;
    } else {
        operate();
        a = answer;
        b = "";
    }
};

function backSpace(){
    if (b === "") { 
        newString = a.toString().slice(0, -1);
            a = newString;
            while (newSpan.firstChild) {
                newSpan.removeChild(newSpan.firstChild);
              }
            newSpan.appendChild(document.createTextNode(`${a}`));
    } else if (b !== ""){
        newString = b.toString().slice(0, -1);
            b = newString;
            while (newSpan.firstChild) {
                newSpan.removeChild(newSpan.firstChild);
            }
            newSpan.appendChild(document.createTextNode(`${b}`));
};
};

function Clear() {
    a = "";
    b = "";
    operation = "";
    while (newSpan.firstChild) {
        newSpan.removeChild(newSpan.firstChild);
      }
    while (oldSpan.firstChild) {
        oldSpan.removeChild(oldSpan.firstChild);
      }
};

function Decimal() {
    if (operation === ""){
        if(a.includes(".")){
            return a;
        } else {
            a += ".";
        }
        console.log(`a is ${a}`);
    } else {
        if(b.includes(".")){
            return b;
        } else {
            b += ".";
        }
        console.log(`a is ${b}`);
    }
};

function operate(){ 
    if (operation == "+") return answer = add();
    if (operation == "-") return answer = subtract();
    if (operation == "*") return answer = multiply();
    if (operation == "/") return answer = divide();
    
}
function add () {
return (parseFloat(a) + parseFloat(b)).toFixed(5).replace(/(\.0+|0+)$/, '');
};

function subtract () {
return (parseFloat(a) - parseFloat(b)).toFixed(5).replace(/(\.0+|0+)$/, '');
};

function multiply () {
return (parseFloat(a) * parseFloat(b)).toFixed(5).replace(/(\.0+|0+)$/, '');
};

function divide () {
return  (parseFloat(a) / parseFloat(b)).toFixed(5).replace(/(\.0+|0+)$/, '');
};