// 1st task

let calculator = function (startNum, endNum) {
  let calcedNums = [];

  for (i = startNum; i <= endNum; i += startNum) {
    calcedNums.push(i);
  };

  if (startNum > endNum) {
    alert("First Number must be less than Second Number!");
  };

  return calcedNums;
}

console.log(calculator(20, 60));

// 2nd task

let counter = function (firstValue, finalValue) {
  let resultNumbers = [];

  for (i = firstValue; i <= finalValue; i++) {
    resultNumbers.push(i)
  };

  if (firstValue > finalValue) {
    alert("First Value must be less than Second Value!");
  };

  return resultNumbers;
}

console.log(counter(3, 7));

// 3rd task

let centuryCounter = function (year) {
  let century = 100;

  let centuryCount = Math.ceil(year / century);

  return centuryCount;
}

console.log(centuryCounter(1441));

// 4th task

let maxMultiple = function (divisorVal, boundVal) {
  
  if (divisorVal > boundVal) {
    alert("Divisor Value must be less than Bound Value!");
  }

  return boundVal - (boundVal % divisorVal);
};

console.log(maxMultiple(14, 148));

// ===================================== otgan darsdagi masalalar

// first task

let solution = function (a, b){
  if (a < b) {
    return `${a}${b}${a}`;
  } else {
    return `${b}${a}${b}`;
  }
}

console.log(solution(49, 56));

// second task

let calcArray = [7, 5, 9, -3, -465, 56];

  let resultNum = 0;

  for(var i = 0; i < calcArray.length; i++) {
    if(calcArray[i] > 0) {
      resultNum = resultNum + calcArray[i];
  }
}

console.log(resultNum);

// third task

let wishNum = 7;

let resultArr = [];

for(let i = 1; i <= wishNum; i++) {
  resultArr.unshift(i);
}

console.log(resultArr);

// fourth task

let testPhrase = "Welcome to our country".split(" ");

let phraseTaker = [];

phraseTaker.push(testPhrase);

let renderedPhraseTaker = phraseTaker.pop();
renderedPhraseTaker.pop();
renderedPhraseTaker.shift();

console.log(renderedPhraseTaker.join(" "));

// fifth task

let freeArr = [];

let functionSolution = function(multiply, text) {
  for (i = 0; i < multiply; i++){
    freeArr.push(text)
  }
}

functionSolution(3, 'Hello World')

console.log(freeArr.join(" "));