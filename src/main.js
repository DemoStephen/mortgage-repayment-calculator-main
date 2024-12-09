const form = document.querySelector("[data-form]");
const err = form.querySelectorAll("[data-error]");

function handleSubmit(event) {
  event.preventDefault();

  const fd = new FormData(event.target);
  const type = fd.get("type");
  const data = Object.fromEntries(fd.entries());
  data.type = type;
  console.log(data);
  if (data.amount === "") {
    err[0].classList.remove("hidden");
    console.log("empty");
  } else {
    err[0].classList.add("hidden");
  }
  if (data.term === "") {
    err[1].classList.remove("hidden");
    console.log("empty");
  } else {
    err[1].classList.add("hidden");
  }
  if (data.interest === "") {
    err[2].classList.remove("hidden");
    console.log("empty");
  } else {
    err[2].classList.add("hidden");
  }
  if (data.type === null) {
    err[2].classList.remove("hidden");
    console.log("empty");
  } else {
    err[2].classList.add("hidden");
  }
}
form.addEventListener("submit", handleSubmit);
