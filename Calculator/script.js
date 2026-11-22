const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", function(event){
    if(event.target.tagName !== "BUTTON"){
        return;
    }
    const value = event.target.textContent;

    if(value === "AC"){
        display.value="";
    }

    else if(value === "DEL"){
        display.value = display.value.slice(0,-1);
    }

    else if(value === "="){
        try{
            display.value = eval(display.value);
        }catch{
            display.value = "Error";
        }

    }
    else{
        if(display.value === "Error"){
            display.value = "";
        } 

         display.value += value;
    }
    }
);


