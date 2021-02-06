function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText=num;
}

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    if(num == "") {
        document.getElementById("output-value").innerText=num;
    } else {
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }

}

function getFormattedNumber(num) {
    if (num == "") {
        return "";
    }
    let number = Number(num);
    var value = number.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}

let operator = document.getElementsByClassName("operator");
for (var i = 0; i<operator.length; i++) {
    operator[i].addEventListener('click', function(){
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        }
        if(this.id == "backspace") {
            let output = reverseNumberFormat(getOutput()).toString();
            if(output) { //se output tem valor
                output = output.substr(0, output.length-1);
                printOutput(output);
            }
        }
        else {
            let output = getOutput();
            let history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length-1])) {
                    history = history.substr(0, history.length-1);
                }
            }
            if (output!="" || history!="") {
                // condição?true: false
                output = output==""? output: reverseNumberFormat(output);
                history = history+output;
                if(this.id == "=") {
                    let result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else {
                    history = history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })
}

let number = document.getElementsByClassName("number");
for (var i = 0; i<number.length; i++) {
        number[i].addEventListener('click', function(){
            let output = reverseNumberFormat(getOutput());
            if (output!=NaN) {
                output = output+this.id;
                printOutput(output);
            }
    })
}
