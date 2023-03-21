// class persona{
//     nombre
//     peso
//     edad
//     estatura
//     cedula
//     constructor(nombre,edad,peso,estatura,cedula){
//         this.nombre=nombre
//         this.edad=edad
//         this.estatura=estatura
//         this.peso=peso
//         this.cedula=cedula
//     }
//     calcular(){
//         let a=this.peso/(this.estatura*this.estatura)
//         return a
//     }
//     info(){
//         let nomCedu= `su nombre es ${this.nombre} y su documento es ${this.cedula} `
//         return nomCedu

//     }


// }
// const santiago=new persona("santiago",12,1.70,60,1005162689)
// const aleja=new persona("aleja",60,15,1.62,1005653739)
// const andres=new persona("andres",70,25,1.75,1005623487)
// const daniel=new persona("daniel",80,20,1.80,1000000000)
// const imcaleja=aleja.calcular()
// const imcsantiago=santiago.calcular()
// const imcadres=andres.calcular()
// const imcdaniel=daniel.calcular()
// const nuevoName=aleja.info()
// const nuevoNAMEsa=santiago.info()
// const nuevoNAMEdaniel=daniel.info()
// const nuevoNnameAN=andres.info()
// console.log(`${nuevoNAMEdaniel} ${imcdaniel} <br> ${nuevoNAMEsa} ${imcsantiago} <br>
// ${nuevoNnameAN} ${imcadres}`)



class Persona{
    nombre
    apellido
    nacimiento
    cedula
    edad
    constructor(nombre,apellido,cedula,nacimiento,edad){
        this.nombre=nombre
        this.apellido=apellido
        this.cedula=cedula
        this.nacimiento=nacimiento
        this.edad=edad
    }
    cumpleaños(){
        if(fecha.getMonth()+1==mes && fecha.getDate()==dia){
            
            return 'si'
            
        }
        else{
            return "no"   
            
        }
        
    }
    nombrec(){
        let completo=`${this.nombre} ${this.apellido}`
        return completo
    }
    
}


let fecha=new Date()
let nombref=document.getElementById("nombre")
let apellidof=document.getElementById("apellido")
let nacimientof=document.getElementById("nacimiento")
let cedulaf=document.getElementById("cedula")
let respiesta=document.getElementById("respuesta")
let nombres=document.getElementById("nombres")
let buscar=document.getElementById("buscar")
let encontar=document.getElementById("encontar")




let mes=null
let dia=null
let años=null
    
    
let si=""


const lista=[]
const cedulaBuscar=[]
let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    let edad1=nacimientof.value.split('-')
    años=parseInt(edad1[0])
    mes=parseInt(edad1[1])
    dia=parseInt(edad1[2])
    const añadido=new Persona(nombref.value,apellidof.value,cedulaf.value,nacimientof.value,fecha.getFullYear()-edad1[0]) 
    let div1=document.createElement("div")
    div1.textContent=añadido.nombrec()
    nombres.append(div1)
    let  div2=document.createElement("div")
    div2.textContent=añadido.cumpleaños()
    if(añadido.cumpleaños()=="si"){
        si="feliz cumpleños"
    }
    else{
        si="no cumple años"
    }
    respiesta.append(div2)
    nombref.value=""
    apellidof.value=""
    cedulaf.value=""
    lista.push(añadido)
 
    console.log(lista)
 

}) 
buscar.addEventListener("click",()=>{
    if(lista.find(listas=>listas.cedula==encontar.value)){
        index=lista.findIndex(listas=>listas.cedula==encontar.value)
        namee=lista[index].nombre
        ape=lista[index].apellido
        localStorage.setItem("nombre",JSON.stringify(namee))
        localStorage.setItem("apellido",JSON.stringify(ape))
        localStorage.setItem("cumple",JSON.stringify(si))
      
    
        location.href="index2.html"
       

    }
    else{
        console.log("no encontrado")
       
    }
    
})



