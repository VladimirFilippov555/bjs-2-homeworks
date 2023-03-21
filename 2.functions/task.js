function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; 
    } else if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  let avg = sum / arr.length;
  avg = Number(avg.toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let summ = 0;
  for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
  }

  return summ;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let maxNumber = Math.max(...arr);
  let minNumber = Math.min(...arr);
  let differenceMaxMin = maxNumber - minNumber;
  
  return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) === 0) {
      sumEvenElement += arr[i]; 
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const intermediateResult = func(...arrOfArr[i]);
    if (intermediateResult > maxWorkerResult) {
      maxWorkerResult = intermediateResult;
    }
  }
  
  return maxWorkerResult;
}
