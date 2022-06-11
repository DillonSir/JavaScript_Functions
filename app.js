console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  if (count < 0) {
    for (let i = 0; i <= count; i++) {
      if (i % 2 != 0) {
        console.log(i);
      }
    }
  } else {
    for (let i = 1; i <= count; i++) {
      if (i % 2 != 0) {
        console.log(i);
      }
    }
  }
}
printOdds(19);

// Exercise 2 Section
//console.log("EXERCISE 2:\n==========\n");

function oldEnough(age, targetAge) {
  return age >= targetAge;
}
function checkLicense(name, age) {
  let canDrive = oldEnough(age, 16);
  let canHavePermit = oldEnough(age, 15);
  let canDrink = oldEnough(age, 21);

  if (canDrink) {
    console.log(
      `${name} can drink. ${name} can also drive. NOT AT THE SAME TIME!`
    );
  } else if (canDrink) {
    console.log(`${name} can drive.`);
  } else if (canHavePermit) {
    console.log(`${name} can drive with another person of age.`);
  } else {
    console.log(`${name} too young. Wait some years`);
  }
}

checkLicense("Dillon", 23);

function checkQuadrant(x, y) {
  if (x > 0 && y > 0) {
    return "Q 1";
  } else if (x < 0 && y > 0) {
    return "Q 2";
  } else if (x < 0 && y < 0) {
    return "Q 3";
  } else if (x > 0 && y < 0) {
    return "Q 4";
  } else if (x == 0 && y != 0) {
    return "x axis";
  } else if (x != 0 && y == 0) {
    return "y axis";
  } else {
    return "origin";
  }
}

console.log(checkQuadrant(11, 1));
console.log(checkQuadrant(-11, 1));
console.log(checkQuadrant(6, -1));
console.log(checkQuadrant(-11, -1));
console.log(checkQuadrant(0, 0));

function isValidTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a, b, c) {
  let isValid = isValidTriangle(a, b, c);
  if (isValid) {
    if (a == b && b == c) {
      return `Equilateral`;
    } else if (a == b || b == c || a == c) {
      return `Isosceles`;
    } else {
      return `scalene`;
    }
  } else {
    return `Not a valid triangle`;
  }
}
console.log(isValidTriangle(2, 3, 4));
console.log(isValidTriangle(2, 2, 2));
console.log(isValidTriangle(1, 2, 2));

function dataUsageFeedBack(planLimit, day, usage) {
  let periodLength = 30;
  let currentAve = usage / day;
  let projectedAve = planLimit / periodLength;
  let remainingData = planLimit - usage;
  let remainingDays = periodLength - day;
  let projectedUsage = remainingDays * currentAve;
  let statusMsg;

  console.log(`${day}day(s) used, ${periodLength - day} day(s) remaining`);
  console.log(`Average Projected use: ${planLimit / periodLength} GB/day`);

  if (currentAve > projectedAve) {
    statusMsg = "EXCEEDING";
  } else if (currentAve < projectedAve) {
    statusMsg = "UNDER";
  } else {
    statusMsg = "AT";
  }

  console.log(`you are ${statusMsg} your average daily use ${currentAve} GB/day,
    continuing this usage, you'll end up using ${
      planLimit - projectedUsage
    } GB from your data limit.`);
}

dataUsageFeedBack(50, 12, 25);
