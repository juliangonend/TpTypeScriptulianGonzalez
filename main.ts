//ejer 2
console.log('corriendo desde typescript ')

//ejer 3


 const tipeString:string = 'Hola , TypeScript!'
 const tipeNum: number= 123
 const tipeBoolean : boolean = true
 const tipeDate: Date = new Date()


 const div = document.createElement('div')
 const pString = document.createElement('p')
 const PNum = document.createElement('p')
 const pBoolean = document.createElement('p')
 const pDate  = document.createElement('p')

 pString.textContent=`Texto :${tipeString}`                         
 PNum.textContent=`Número ${tipeNum}`                         
 pBoolean.textContent=`Boleano : ${tipeBoolean}`                         
 pDate.textContent=`Fecha ${tipeDate}`                         

 div.appendChild(pString)
 div.appendChild(PNum)
 div.appendChild(pBoolean)
 div.appendChild(pDate)
 const ejer3= document.getElementById('ejer3')
 div.innerHTML
 ejer3?.appendChild(div)


 //ejer 4

 function convertNumtoString(num:number){
    const stringNum= num.toString()
    const pNumToString = document.getElementById('number')
   if (pNumToString!= null){
        pNumToString.textContent= `Numero convertido a cadena : ${stringNum}`
   }
    
 }
 convertNumtoString(5)

 //ejer5

 const arrayNum : number[]=[1,2,3,4,5,6,7,8];


 function sumArrayElement(array :number[]){
    let resultSum:number=0;
     array.forEach(element => {
        // console.log(element)
        resultSum+=element;
    
    });
    const resultHTML = document.getElementById('arrayResult')
    resultHTML.textContent=`Suma del array : ${resultSum}`
 }

 sumArrayElement(arrayNum)

 //ejer 6
  class  Student{
    'name':string;
    'age':number;
    'course':string;
   constructor (name:string, age:number , course: string)
  {
   this.name= name,
   this.age = age ,
   this.course = course
  } 
  printInfo():string{
   return `<div>
   <p>Estudiante :${this.name}</p>
   <p>Edad :${this.age}</p>
   <p>Curso :${this.course}</p>
   </div>`
      
   }
}
const newStudent = new Student('Juan',20, 'Matematicas')
const divEjer6 = document.getElementById('ejer6')
divEjer6.innerHTML= newStudent.printInfo();

//ejer 7
type Addresses={
   'street':string,
   'city':string,
   'zipCode': number
}


const newAddresses : Addresses={
   'street'   :'Av. Principal',
   'city'  : 'Ciudad',
   'zipCode': 12345
}


const ejer7 = document.getElementById('ejer7')

ejer7?.innerHTML= `Dirección${newAddresses.street} , Ciudad ${newAddresses.city} , CP ${newAddresses.zipCode}  `
//ejer8 
interface User {
   'name':string,
   'mail':string ,

   greet:()=> string;
}

const Ana: User={
   'name':'Ana',
   'mail': 'ana@gmail.com',
   greet: ()=>{
      return `Hola , mi nombre es ${Ana.name} y mi mail es ${Ana.mail}`
   } 
}

const ejer8= document.getElementById('ejer8')

ejer8.textContent=`${Ana.greet()}`
//ejer9 
class Person {
   name: string;
   age: number;

   constructor(name: string, age: number) {
       this.name = name;
       this.age = age;
      }

   presentation():string{
      return`hola mi nombre es ${this.name} y tengo ${this.age} años `
   }   
   }

   const person = new Person ('Julián', 20)
   const ejer9 = document.getElementById('ejer9')
   ejer9?.textContent= person.presentation()
//ejer10
   class Cage <T>{
      value : T;
      constructor(value : T){
          this.value = value
      }
      getValue(): T{
          return this.value
      }
  }
  
  const cageString = new Cage<string>("String")
  document.getElementById("valorTipoString")!.innerHTML = `El valor es: ${cageString.getValue()}`;
  
  const cageNumber = new Cage<number>(29)
  document.getElementById("valorTipoNumber")!.innerHTML = `El valor es: ${cageNumber.getValue()}`;
  
  //Ejercicio 11. 
  
  function identidad<T>(valor: T) {
      return valor;
  }
  
  const tipoIdentidad = identidad("String");
  document.getElementById("identidadString")!.innerHTML = `Identidad del texto: ${tipoIdentidad}`
  const tipoIdentidad2 = identidad(29);
  document.getElementById("identidadNumero")!.innerHTML = `Identidad del numero: ${tipoIdentidad2}`
  
  //Ejercicio 12
  
  
  enum Color {
      Rojo = "Rojo",
      Verde = "Verde",
      Azul = "Azul"
  }
  
  const colorFavorito: Color = Color.Verde;
  
  document.getElementById("colorFavorito")!.innerHTML = `Color favorito: ${colorFavorito}`;
  
  
  
  