const numberInput = document.querySelector('[data-mortageAmount]');
const submit = document.querySelector('[data-form]');
let number = 198200780;
let newStr = number.toString();
let popped;
for(let i = 0; i < newStr.length; i +=3){
    popped = newStr.pop(newStr)
}
submit.addEventListener('submit', (event)=>{
    event.preventDefault()
    console.log(`${numberInput.value}`);
})