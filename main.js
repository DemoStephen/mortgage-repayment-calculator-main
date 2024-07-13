const resetForm = document.querySelector('[data-reset]');
const formTag = document.querySelector('[data-form]');
const mortageAmount = document.querySelector('[data-mortageAmount]');
const mortageTerm = document.querySelector('[data-mortageTerm]');
const mortageInterest = document.querySelector('[data-mortageInterest]');
const mortageTypeInterest = document.querySelector('[data-mortageTypeRepayment]');
const mortageTypeRepayment = document.querySelector('[data-mortageTypeInterest]');

const outputMonthlyRepayment = document.querySelector('[data-monthlyRepayment]');
const outputTotalRepayment = document.querySelector('[data-totalPayment]');

formTag.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log(`${mortageAmount.value} ${mortageTerm.value} ${mortageInterest.value}`)
});