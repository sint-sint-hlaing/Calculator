let displayBox=document.querySelector(".display");
let keyPad=document.querySelector(".keyPad");
let operator=['+','-','*','/','='];
let filter=x=>{ 

    let current=displayBox.innerText;
    let lastChar=current[current.length-1];
    if(current=='0' && x!=='.'){
        clearLast();
    }
    if(operator.includes(x) && operator.includes(lastChar)){
        return false;
    }
    if(current.length>=20){
        return false;
    }
    return true;
}



let showInDisplay=x=>{
    if(filter(x)){
        displayBox.innerHTML+= x;
    }
}
let calculate=()=>displayBox.innerText=eval(displayBox.innerHTML);

document.querySelector(".clear").addEventListener("click",()=>{
    displayBox.innerText="";
});

let clearLast=()=>{
    let arr=displayBox.innerText.split("");
    let newArr=arr.splice(0,arr.length-1);
    displayBox.innerText=newArr.join(''); 
}

// let clearLast= ()=>{
// displayBox.innerText=displayBox.innerText.substring(0,displayBox.length);
// }

let calcPercentage=()=>displayBox.innerText=eval(displayBox.innerHTML/100);

keyPad.addEventListener("click",_=>{
    if(displayBox.innerText.length>10){
        displayBox.style.fontSize = 30+"px";
    }else if(displayBox.innerText.length>5){
        displayBox.style.fontSize = 60+"px";
    }
})