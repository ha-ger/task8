let but=document.querySelectorAll(" button ")
let buttons=Array.from(but)
let result=document.querySelector(".output p")
console.log(result);






buttons.forEach((button)=>{


button.addEventListener("click",function(e){
    switch(e.target.innerHTML){


        case"Ac":
        result.innerHTML=""
        break;
        
case "De":
if(result.innerHTML!=""){
    result.innerHTML=result.innerHTML.slice(0, -1)}
    break;
    
    case"=":
    if(result.innerHTML!=""){
       
    
    try{
        
    result.innerHTML( eval(result.innerHTML))


}
catch{
result.innerHTML="Error!"
if(result.innerHTML="Error!"){
setTimeout(()=>
result.innerHTML="0",1600


)

}

}}
if(result.innerHTML==="0"){
    result.innerHTML=result.innerHTML.slice(1,2)
}

    break;
default:
  
    
result.innerHTML+=e.target.innerHTML.trim()
    }
})


})





