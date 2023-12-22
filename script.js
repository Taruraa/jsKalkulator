const display = document.querySelector('#currentOperand');
const buttons = document.querySelectorAll('button');
const chars = ["x", "+", "-", "/", "=", "."];
let output = "";


//fungsi kalkulasi pada tombol
function kalkulasi(btnValue){
    if(btnValue === "=" && output !== ""){
        //
        output = eval(output.replace("%", "/100"));
    }else if(btnValue === "AC"){
        output = "";
    }else if(btnValue === "DEL"){
        output = output.toString().slice(0, -1);
    }else{
        if(output === "" && chars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

// listener button
buttons.forEach(function(button){
    button.addEventListener('click', function(e){ 
        kalkulasi(e.target.dataset.value);
    });
});