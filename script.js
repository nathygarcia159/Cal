//" const"
//este docuemento captura el id llamado display  con # en todo el html.
const display = document.querySelector('#display');
// captura las clases botones el queryselectorAll busca a todos lo que se llamamn button
const button =document.querySelectorAll("button");

// recorre los botones  de botones // funciones de fecha  "item guarda los argumentos" 
//display.innerText nos lleva a html  de la clase display si cumple con la comndicional
button.forEach((item)=>{
    item.onclick=() =>{
        if (item.id=="clear"){
            display.innerText="";
        }else if (item.id =="backspace"){
            // todo lo que tengo el tostring lo combierte en cadena 
            //"let es una varia llamada string ", toString convierte la en cadena de texto 
            // substr es  funcion de javascrip , "length " es para saber cuanto mide la cadena
            let string = display.innerText.toString(); 
            display.innerText= string.substr(0,string.length -1) ;   //
            //
        }else if(display.innerText !="" && item.id =="equal"){
            // eval ayuda  a convertir en numeros y ejecutar las operaciones matematicas.
            display.innerText=eval(display.innerText);
        }else if(display.innerText ==""&& item.id=="equal"){
            display.innerText="ingresa numero";
            //tienen 2 parametros  funcion de fecha" que entre dispaly y lo ponga en vacio "   de 2 segundos
            setTimeout(() =>(display.innerText=""),2000)      
            // realiza la operacion , concatena con el + una vez que concatena "junta" vuelve al condicional donde convierte en numeros 
            // y ejecuta la operacion gracias al eval.
        }else{
            display.innerText +=item.id;
        }
    
        
    };
});
// boton para cambiar de tema a la calculadora 
const themeBtnDark=document.querySelector(".theme-toggler");
const calculator =document.querySelector(".calculator");

let isDark =true;
 // boton themebtn    vas a la clase 
 // el "toggle" agrega y quita estados  
themeBtnDark.onclick=()=>{
    calculator.classList.toggle("dark")
    themeBtnDark.classList.toggle("active")
    isDark=isDark //
}
