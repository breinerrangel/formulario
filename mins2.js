const nombre=document.getElementById("nombre")
const apellido=document.getElementById("apellido")
const edad=document.getElementById("edad")
const enviar=document.getElementById("enviar")
let display=document.querySelector(".display")
enviar.addEventListener("click",()=>{
    display.innerHTML+=`<table><tr><td> ${datos}</td><td> ${datos2}</td><td>${datos3}</td></tr></table>`
    
   

})  
const datos= JSON.parse(localStorage.getItem("nombre"))

const datos2= JSON.parse(localStorage.getItem("apellido"))
const datos3=JSON.parse(localStorage.getItem("cumple"))




   
    
