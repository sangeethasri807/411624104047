console.log("Hello");
const first=1;
const second=2;
console.log(first);
const string="orange";
const fruits=["apple","Banana","Grapes"]
console.log(fruits[0]);
fruits[2]="strawberry"
console.log(fruits[2]);
const arr=[1,"name",false,2.5];
console.log(arr);
for(let i=0; i<arr.length;i++){
    console.log(arr[i]);
}
const fourth=document.getElementById("ptag")
fourth.innerHTML="This is my fourth class"
function newFunction(){
    console.log("I am writing something");
}
const input=document.getElementById("eventListener")
const output=document.getElementById("ptag")
input.addEventListener("input",()=>{
    output.textContent=input.value
})
const newvar=document.createElement("h1")
newvar.textContent="New paragraph";
document.body.appentChild(newvar);
newvar.remove()