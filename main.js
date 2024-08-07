const resetForm = document.querySelector('[data-reset]')
const formTag = document.querySelector('[data-form]')
const mortageAmount = document.querySelector('[data-mortageAmount]')
const mortageTerm = document.querySelector('[data-mortageTerm]')
const mortageInterest = document.querySelector('[data-mortageInterest]')
const mortageTypeInterest = document.querySelector('[data-mortageTypeInterest]')
const mortageTypeRepayment = document.querySelector('[data-mortageTypeRepayment]')

const outputMonthlyRepayment = document.querySelector('[data-monthlyRepayment]')
const outputTotalRepayment = document.querySelector('[data-totalPayment]')
const empty = document.querySelector('[data-emptyResult]');
const complete = document.querySelector('[data-compleatedResult]');

formTag.addEventListener('submit', (event)=>{
    event.preventDefault()
    const yearlyInterest = ((parseInt(mortageAmount.value) * parseInt(mortageInterest.value))/100).toFixed(2)
    const totalYearlyInterest = (yearlyInterest*mortageTerm.value).toFixed(2)
    const monthlyInterst = (yearlyInterest/12).toFixed(2)
    const totalYearlyRepayment = (parseInt(mortageAmount.value) + parseInt(totalYearlyInterest)).toFixed(2)
    const monthlyRepayment = (parseInt(totalYearlyRepayment)/12).toFixed(2)
    if(mortageTypeRepayment.checked){
        outputMonthlyRepayment.innerText = `₦ ${monthlyRepayment}`
        outputTotalRepayment.innerText = `₦ ${totalYearlyRepayment}`
    }
    else if(mortageTypeInterest.checked){
        outputMonthlyRepayment.innerText = `₦ ${monthlyInterst}`
        outputTotalRepayment.innerText = `₦ ${totalYearlyInterest}`
    }
    empty.classList.add('d-none');
    complete.classList.remove('d-none');
    return;
})
resetForm.addEventListener('click', (event)=>{
    event.preventDefault();
    formTag.reset();
    empty.classList.remove('d-none');
    complete.classList.add('d-none');
    return;
})
