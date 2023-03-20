"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - (4 * a * c);
  
  if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  } else if (discriminant > 0) {
    let rootFirst = (-b + Math.sqrt(discriminant)) / (2 * a);
    let rootSecond = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(rootFirst, rootSecond);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = parseInt(percent);
  contribution = parseInt(contribution);
  amount = parseInt(amount);
  countMonths = parseInt(countMonths);
  switch (true) {
    case isNaN(percent):
    case isNaN(contribution):
    case isNaN(amount):
    case isNaN(countMonths):
      return false;
  }
  
  let p = (1 / 12) * (percent / 100);
  let s = amount - contribution;
  let totalAmount = countMonths * (s * (p + (p / (Math.pow((1 + p), countMonths) - 1))));
  totalAmount = Number(totalAmount.toFixed(2));
  return totalAmount;
}
 
