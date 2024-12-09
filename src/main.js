const form = document.querySelector("[data-form]");
const err = form.querySelectorAll("[data-error]");
const emptyState = document.querySelector("[data-empty]");
const successState = document.querySelector("[data-completed]");

function handleOutput(data) {
  const outputType = document.querySelector(["data-type-output"]);
  const repaymentMonthly = document.querySelector(["data-monthly-repayment"]);
  const repaymentTotally = document.querySelector(["data-total-payment"]);
  console.log(data);
  if (data.amount && data.term && data.interest && data.type) {
    emptyState.classList.add("hidden");
    successState.classList.remove("hidden");

    outputType.innerText = "";
    repaymentMonthly.innerText = "";
    repaymentTotally.innerText = "";
  } else {
    emptyState.classList.remove("hidden");
    successState.classList.add("hidden");
  }
}

function handleError(data) {
  const err = document.querySelectorAll("[data-error]");
  console.log(err);
}

function handleSubmit(event) {
  event.preventDefault();
  const fd = new FormData(event.target);
  const type = fd.get("type");
  const data = Object.fromEntries(fd.entries());
  data.type = type;
  handleError(data);
  handleOutput(data);
}
form.addEventListener("submit", handleSubmit);
