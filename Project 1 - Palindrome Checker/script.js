const btn = document.getElementById("check-btn");
const userInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result")

const checkIfPalindrome = (input) => {
  if (input === ""){
    alert("Please input a value");
  }

  resultDiv.replaceChildren();

  const lowerCaseInput = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();

  let resultMsg = `${input} ${lowerCaseInput === [...lowerCaseInput].reverse().join("") ? "is" : "is not"} a palindrome.`
  
  const pTag = document.createElement("p");
  pTag.className = "user-input";
  pTag.innerText = resultMsg;
  resultDiv.appendChild(pTag);

  resultDiv.classList.remove("hidden");
}

btn.addEventListener("click", () => {
  checkIfPalindrome(userInput.value);
})

userInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    checkIfPalindrome(userInput.value);
  }
})