const mainContainer=document.querySelector(".main-container");
const thanksContainer=document.querySelector(".thank-you");
const submitButton=document.getElementById("submit");
const rates = document.querySelectorAll(".btn")
const Rating = document.getElementById("rating");

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none";
  thanksContainer.classList.remove("hidden");
});

rates.forEach((rate)=>{
  rate.addEventListener("click",()=>{
    Rating.innerHTML=rate.innerHTML;
  })
});
