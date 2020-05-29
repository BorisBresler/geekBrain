const ackerman = (m, n) => {
  let result = 0;
  if (m === 0) {
    result = n + 1;
  } else if (m > 0 && n === 0) {
    result = ackerman(m - 1, 1);
  } else if (m > 0 && n > 0) {
    result = ackerman(m - 1, ackerman(m, n - 1));
  }
  return result;
};

let ackermanButton = document.querySelector(".accerman-button");

ackermanButton.addEventListener("click", function () {
  let ackermanNumber = document.querySelectorAll(".accerman-number");
  let ackermanResult = document.querySelector(".accerman-result");
  ackermanResult.innerText = "";
  ackermanResult.insertAdjacentText(
    "beforeend",
    ackerman(ackermanNumber[0].value, ackermanNumber[1].value)
  );
});

const diff = (ugol1, ugol2) => {
  result = 0;
  if (Math.abs(ugol1 - ugol2) < 180) {
    result = Math.abs(ugol1 - ugol2);
  } else {
    result = 360 - Math.abs(ugol1 - ugol2);
  }
  return result;
};

let raznicaUglovButton = document.querySelector(".raznica-uglov-button");
raznicaUglovButton.addEventListener("click", function () {
  let raznicaUglovResult = document.querySelector(".raznica-uglov-result");
  let raznicaUglov = document.querySelectorAll(".raznica-uglov");
  raznicaUglovResult.innerText = "";
  raznicaUglovResult.insertAdjacentText(
    "beforeend",
    diff(raznicaUglov[0].value, raznicaUglov[1].value) + " "
  );
  if (Number(raznicaUglovResult.innerText) < 90) {
    raznicaUglovResult.insertAdjacentText("beforeend", "Ti ostriy pidor");
  } else if (Number(raznicaUglovResult.innerText) === 90) {
    raznicaUglovResult.insertAdjacentText("beforeend", "Ti prumoy pidor");
  } else raznicaUglovResult.insertAdjacentText("beforeend", "Ti tupoy pidor");
});

const reversNumber = (num) => {
  let result = "";
  const numStr = String(num);
  if (num < 0) {
    for (let i = numStr.length - 1; i > 0; i -= 1) {
      result += numStr[i];
    }
    return -result;
  } else {
    for (let j = numStr.length - 1; j >= 0; j -= 1) {
      result += numStr[j];
    }
  }
  return result;
};

let inversNumberButton = document.querySelector(".invers-number-button");

inversNumberButton.addEventListener("click", function () {
  let inversNumber = document.querySelector(".inversNumber");
  let inversNumberResult = document.querySelector(".invers-number-result");
  inversNumberResult.innerText = "";
  inversNumberResult.insertAdjacentText(
    "beforeend",
    reversNumber(inversNumber.value)
  );
});

const invertCase = (str) => {
  let result = "";
  const strUp = str.toUpperCase();
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === strUp[i]) {
      result = result + str[i].toLowerCase();
    } else {
      result = result + str[i].toUpperCase();
    }
  }
  return result;
};

let inversCaseButton = document.querySelector(".invers-case-button");
inversCaseButton.addEventListener("click", function () {
  let inversCase = document.querySelector(".invers-case");
  let inversCaseResult = document.querySelector(".invers-case-result");
  inversCaseResult.innerText = "";
  inversCaseResult.insertAdjacentText(
    "beforeend",
    invertCase(inversCase.value)
  );
});

const areBracketsBalanced = (str) => {
  let result = 0;
  if (str === "") {
    return "";
  }
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === "(") {
      result += 1;
    } else if (str[i] === ")") {
      result -= 1;
    }
    if (result < 0) {
      return false + " ошибка закрывающая скобка раньше открывающей " + (i + 1);
    }
  }
  if (result === 0) {
    return true;
  } else {
    return false + " не все скобки закрыты";
  }
};

let skobkiBalanceButton = document.querySelector(".skobki-balance-button");
skobkiBalanceButton.addEventListener("click", function () {
  let skobkiBalance = document.querySelector(".skobki-balance");
  let skobkiBalanceResult = document.querySelector(".skobki-balance-result");
  skobkiBalanceResult.innerText = "";
  skobkiBalanceResult.insertAdjacentText(
    "beforeend",
    areBracketsBalanced(skobkiBalance.value)
  );
});

const isHappyTicket = (num) => {
  let result1 = 0;
  let result2 = 0;
  const dlinnastr = String(num).length;
  console.log(dlinnastr);
  if (dlinnastr % 2 !== 0 || num === "") {
    return "eto ne bilet";
  }
  for (let i = 0; i < dlinnastr / 2; i += 1) {
    result1 += Number(String(num)[i]);
  }
  for (let j = dlinnastr - 1; j >= dlinnastr / 2; j -= 1) {
    result2 += Number(String(num)[j]);
  }
  if (result1 === result2) {
    return true;
  } else {
    return false;
  }
};

let happyTicketButton = document.querySelector(".happy-ticket-button");
happyTicketButton.addEventListener("click", function () {
  let happyTicket = document.querySelector(".happy-ticket");
  let happyTicketResult = document.querySelector(".happy-ticket-result");
  happyTicketResult.innerText = "";
  happyTicketResult.insertAdjacentText(
    "beforeend",
    isHappyTicket(happyTicket.value)
  );
});

const perevorotStroki = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += `${str[i]}`;
  }
  return result;
};

let reverseStrButton = document.querySelector(".reverse-str-button");
reverseStrButton.addEventListener("click", function () {
  let reverseStr = document.querySelector(".reverse-str");
  let reverseStrResult = document.querySelector(".reverse-str-result");
  reverseStrResult.innerText = "";
  reverseStrResult.insertAdjacentText(
    "beforeend",
    perevorotStroki(reverseStr.value)
  );
});

const isPerfect = (num) => {
  let result = 0;
  for (let i = 1; i <= num / 2; i += 1) {
    if (num % i === 0) {
      result += i;
    }
  }
  if (result === num) {
    return true;
  } else {
    return false;
  }
};

let perfectNumberButton = document.querySelector(".perfect-number-button");
perfectNumberButton.addEventListener("click", function () {
  let perfectNumber = document.querySelector(".perfect-number");
  console.log(perfectNumber.value);
  let perfectNumberResult = document.querySelector(".perfect-number-result");
  perfectNumberResult.innerText = "";
  perfectNumberResult.insertAdjacentText(
    "beforeend",
    isPerfect(Number(perfectNumber.value))
  );
});

const sumOfSquareDigits = (num) => {
  const stringNum = String(num);
  let result = 0;
  for (let i = 0; i < stringNum.length; i += 1) {
    result += Number(stringNum[i]) ** 2;
  }
  return result;
};
const isHappyNumber = (num2) => {
  let i = 10;
  let result = 0;
  while (i > 0) {
    result = sumOfSquareDigits(num2);
    if (result === 1) {
      return true;
    } else {
      num2 = sumOfSquareDigits(result);
    }
    i -= 1;
  }
  return false;
};

let happyNumberButton = document.querySelector(".happy-number-button");
happyNumberButton.addEventListener("click", function () {
  let happyNumber = document.querySelector(".happy-number");
  let happyNumberResult = document.querySelector(".happy-number-result");
  happyNumberResult.innerText = "";
  happyNumberResult.insertAdjacentText(
    "beforeend",
    isHappyNumber(Number(happyNumber.value))
  );
});

const formattedTime = (minuta) => {
  let chas = Math.floor(minuta / 60);
  const minuta2 = minuta % 60;
  let result1 = "";
  let result2 = "";
  if (chas > 24) {
    chas = chas % 24;
    result1 = `прошло больше суток время прощедщее с полуночи последних суток `;
  }
  if (chas < 10) {
    result1 += `0${chas}:`;
  } else {
    result1 += `${chas}:`;
  }
  if (minuta2 < 10) {
    result2 = `0${minuta2}`;
  } else {
    result2 = `${minuta2}`;
  }
  return result1 + result2;
};

let formatTimeButton = document.querySelector(".format-time-button");
formatTimeButton.addEventListener("click", function () {
  let formatTime = document.querySelector(".format-time");
  let formatTimeResult = document.querySelector(".format-time-result");
  formatTimeResult.innerText = "";
  formatTimeResult.insertAdjacentText(
    "beforeend",
    formattedTime(Number(formatTime.value))
  );
});

const customName = document.querySelector(".name-story");
const randomize = document.querySelector(".story-button");
const story = document.querySelector(".story-result");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

let storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
let insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  const weight = Math.round(300 * 0.0714286) + " stone";
  const temperature = Math.round(((94 - 32) * 5) / 9) + " centigrade";
  newStory = newStory.replace("94 fahrenheit", temperature);
  newStory = newStory.replace("300 pounds", weight);

  story.textContent = newStory;
}
