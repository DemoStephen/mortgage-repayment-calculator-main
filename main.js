const resetForm = document.querySelector('[data-reset]')
const formTag = document.querySelector('[data-form]')
const mortageAmount = document.querySelector('[data-mortageAmount]')
const mortageTerm = document.querySelector('[data-mortageTerm]')
const mortageInterest = document.querySelector('[data-mortageInterest]')
const mortageTypeInterest = document.querySelector('[data-mortageTypeInterest]')
const mortageTypeRepayment = document.querySelector('[data-mortageTypeRepayment]')
const outputMonthlyRepayment = document.querySelector('[data-monthlyRepayment]')
const outputTotalRepayment = document.querySelector('[data-totalPayment]')

formTag.addEventListener('submit', (event)=>{
    event.preventDefault()
    const yearlyInterest = ((parseInt(mortageAmount.value) * parseInt(mortageInterest.value))/100).toFixed(2)
    const totalYearlyInterest = (yearlyInterest*mortageTerm.value).toFixed(2)
    const monthlyInterst = (yearlyInterest/12).toFixed(2)
    const totalYearlyRepayment = (parseInt(mortageAmount.value) + parseInt(totalYearlyInterest)).toFixed(2)
    const monthlyRepayment = (parseInt(totalYearlyRepayment)/12).toFixed(2)
    if(mortageTypeRepayment.checked){
        outputMonthlyRepayment.innerText = `\u20AC ${monthlyRepayment}`
        outputTotalRepayment.innerText = `\u20AC ${totalYearlyRepayment}`
    }
    if(mortageTypeInterest.checked){
        outputMonthlyRepayment.innerText = `\u20AC ${monthlyInterst}`
        outputTotalRepayment.innerText = `\u20AC ${totalYearlyInterest}`
    }
    return
})
resetForm.addEventListener('click', (event)=>{
    event.preventDefault();
    formTag.reset();
})