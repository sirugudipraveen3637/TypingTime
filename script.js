const btnClick=document.getElementById("qouteBtn");
const qoutevalue=document.getElementById("qoutes");
const inputValue=document.getElementById("inputarea");
let secVal=0;
var timer;
inputValue.addEventListener("input",()=>
{
   console.log(inputValue.value);
   console.log(inputValue.value.length);
   if(qoute_length===inputValue.value.length)
   {
     alert("Total time taken:-"+secVal);
     reset();
     return;
   }
})


const qouteArray = [
  "Push yourself, because no one else is going to do it for you.",
  "Failure is the condiment that gives success its flavor.",
  "Wake up with determination. Go to bed with satisfaction.",
  "It's going to be hard, but hard does not mean impossible.",
  "Learning never exhausts the mind.",
  "The only way to do great work is to love what you do."
];

let qoute_length=0;

window.addEventListener("load", ()=>{
   dataMapping();

  });


btnClick.addEventListener('click', () => {
    dataMapping();
})

function reset() {
    clearInterval(timer);
    secVal=0; 
    inputValue.value="";
}

function updateTimer()
{
    secVal++;
}

function dataMapping()
{
    let pos=Math.floor(Math.random()*(qouteArray.length-1));
    qoutevalue.textContent=qouteArray[pos];
    qoute_length=qouteArray[pos].length;
    console.log(qoute_length);
    reset();
    timer = setInterval(updateTimer, 1000);
}
