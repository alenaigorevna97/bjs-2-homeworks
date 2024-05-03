// Задача №1.

function getArrayParams(...arguments) {

  let min = arguments[0];
  let max = arguments[0];
  let sum = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    } else if (arguments[i] < min) {
      min = arguments[i];
    }
    sum += arguments[i];
  }

  let avg = Number((sum / arguments.length).toFixed(2));
  return {
    min,
    max,
    avg
  };
}

console.log(getArrayParams(-99, 99, 10));


// Задача №2.

function summElementsWorker(...arguments) {
  if (!arguments || arguments.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

function differenceMaxMinWorker(...arguments) {
  if (!arguments || arguments.length === 0) {
    return 0;
  }

  let max = arguments[0];
  let min = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    } else if (arguments[i] < min) {
      min = arguments[i];
    }
  }

  return max - min;
}

function differenceEvenOddWorker(...arguments) {
  if (!arguments || arguments.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 === 0) {
      sumEvenElement += arguments[i];
    } else {
      sumOddElement += arguments[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arguments) {
  if (!arguments || arguments.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 === 0) {
      sumEvenElement += arguments[i];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

console.log(summElementsWorker(10, 10, 11, 20, 10));
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));
console.log(differenceEvenOddWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));


// Задача №3.

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker));
console.log(makeWork(arr, differenceMaxMinWorker));
console.log(makeWork(arr, differenceEvenOddWorker));
console.log(makeWork(arr, averageEvenElementsWorker)); 