const slider = document.getElementById("temp");

slider.addEventListener("input", function () {
  const value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background = `linear-gradient(to right, #FF69B4 0%, #FF69B4 ${value}%, #5BAAF9 ${value}%, #5BAAF9 100%)`;
});

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("blur", () => {
  const cleaned = phoneInput.value.replace(/\D/g, "");

  let formatted = `+${cleaned.substring(0, 1)} (${cleaned.substring(
    1,
    4
  )}) ${cleaned.substring(4, 7)}-${cleaned.substring(7, 9)}-${cleaned.substring(
    9,
    11
  )}`;

  phoneInput.value = formatted;
});

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Success!");
  console.log("Name:", document.getElementById("name").value);
  console.log("Phone:", phoneInput.value);
  console.log("Temperature:", document.getElementById("temp").value);
  console.log("Comments:", document.getElementById("comments").value);
});
