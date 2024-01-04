
const ul = document.querySelector("ul")
let pantalla = document.getElementById("pantalla");
pantalla.textContent = "0"

function entradaDatos (e){

    if(e.target.classList.contains("number")){
        const currentButton = e.target.textContent;

        if(e.target.textContent === "DEL"){

            if(pantalla.textContent === "0" || pantalla.textContent === "Math Error"){
                pantalla.textContent = "0 "
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1);
            }
        }else if (e.target.id == "equal"){
            try{  
                pantalla.textContent = eval(pantalla.textContent)
            }catch(error){
                console.log("Math Error")
                pantalla.textContent = "Math Error"
            }
        }else{
            if(pantalla.textContent === "0" || pantalla.textContent == "Math Error"){
                pantalla.textContent = currentButton
            }else{
                pantalla.textContent += currentButton
            }
        }
        if(pantalla.textContent.length === 0){
            pantalla.textContent = "0"
        }
    }
}

ul.addEventListener("click",entradaDatos)

ul.addEventListener("keydown",entradaDatos)


    
    
