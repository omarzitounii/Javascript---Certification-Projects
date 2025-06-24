const btn = document.getElementById("convert-btn");
const userInput = document.getElementById("number");
const outputDiv = document.getElementById("output");
const form = document.getElementById("form");


const convertToRoman = input => {
  const reference = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const result = [];

  reference.forEach(arr => {
    while (input >= arr[1]) {
      result.push(arr[0]);
      input -= arr[1];
    }
  });

  return result.join('');
}

const isValid = (inputStr, inputInt) => {
  let errText = "";

  if (!inputStr || inputStr.match(/[Ee.,]/)){
    errText="Please enter a valid number.";
  } else if (inputInt < 1) {
    errText = 'Please enter a number greater than or equal to 1.';
  } else if (inputInt > 3999) {
    errText = 'Please enter a number less than or equal to 3999.';
  } else {
    return true;
  }
  
  outputDiv.innerText = errText;
  outputDiv.classList.add("alert");

  return false;
}

const updateUI = () => {
  const inputStr = userInput.value;
  const inputInt = parseInt(inputStr, 10);
  outputDiv.classList.remove("alert");
  outputDiv.classList.remove("hidden");
  if (isValid(inputStr, inputInt)){
    outputDiv.innerText= convertToRoman(inputInt);
  }
  
}

btn.addEventListener("click", updateUI);

form.addEventListener("submit", e => {
  e.preventDefault();
  updateUI();
});