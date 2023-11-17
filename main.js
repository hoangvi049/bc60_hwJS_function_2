let arrNum = [];
let arrNum2 = [];

let btnPush = document.getElementById("result");
function renderArr(arr) {
  var content = "";
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      content = arr[0];
    } else {
      content += `,${arr[i]}`;
    }
  }
  return content;
}

btnPush.onclick = function () {
  let input = document.getElementById("input").value * 1;
  arrNum.push(input);
  var content = renderArr(arrNum);
  document.querySelector(".r").innerHTML = content;
};

function findPositive(arr) {
  var arrPos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arrPos.push(arr[i]);
    }
  }
  return arrPos;
}

function sumPositive(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
document.getElementById("result1").onclick = function () {
  var arrPos = findPositive(arrNum);
  var n = sumPositive(arrPos);
  document.querySelector(".r1").innerHTML = "Tổng số dương: " + n;
};

document.getElementById("result2").onclick = function () {
  var arrPos = findPositive(arrNum);
  document.querySelector(".r2").innerHTML = "Số dương: " + arrPos.length;
};

function findMin(arr) {
  var min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

document.getElementById("result3").onclick = function () {
  var n = findMin(arrNum);
  document.querySelector(".r3").innerHTML = "Số nhỏ nhất: " + n;
};

document.getElementById("result4").onclick = function () {
  var arrPos = findPositive(arrNum);
  var n = findMin(arrPos);
  if (arrPos.length > 0) {
    document.querySelector(".r4").innerHTML = "Số dương nhỏ nhất: " + n;
  } else {
    document.querySelector(".r4").innerHTML = "Không có số dương trong mảng";
  }
};

function findLastEven(arr) {
  var last = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      last = arr[i];
    }
  }
  return last;
}

document.getElementById("result5").onclick = function () {
  var n = findLastEven(arrNum);
  document.querySelector(".r5").innerHTML = "Số chẵn cuối cùng: " + n;
};

function switchIndex(arr, index1, index2) {
  var n = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = n;
}

document.getElementById("result6").onclick = function () {
  var index1 = document.getElementById("input6_1").value * 1;
  var index2 = document.getElementById("input6_2").value * 1;
  switchIndex(arrNum, index1, index2);
  var content = renderArr(arrNum);
  document.querySelector(".r6").innerHTML = "Mảng mới là: " + content;
};

function sortArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        switchIndex(arr, i, j);
      }
    }
  }
}

document.getElementById("result7").onclick = function () {
  var content = "";
  sortArr(arrNum);
  content = renderArr(arrNum);
  document.querySelector(".r7").innerHTML = "Mảng mới là: " + content;
};

function checkPrimeNumber(n) {
  if (n < 2) {
    return false;
  } else if (n == 2) {
    return true;
  } else if (n % 2 == 0) {
    return false;
  } else {
    for (var i = 3; i < n - 1; i += 2) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
}

document.getElementById("result8").onclick = function () {
  var n = 0;
  for (let i = 0; i < arrNum.length; i++) {
    if (checkPrimeNumber(arrNum[i]) == true) {
      n = arrNum[i];
      break;
    }
  }
  if (n == 0) {
    document.querySelector(".r8").innerHTML = "Mảng không có số nguyên tố";
  } else {
    document.querySelector(".r8").innerHTML = "Số nguyên tố đầu tiên là: " + n;
  }
};

document.getElementById("result9_1").onclick = function () {
  var number = document.getElementById("input9").value * 1;
  arrNum2.push(number);
  let content = renderArr(arrNum2);
  document.querySelector(".r9_1").innerHTML = content;
};

function countInterger(arr) {
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i]) == true) {
      count++;
    }
  }
  return count;
}
document.getElementById("result9_2").onclick = function () {
  var n = countInterger(arrNum2);

  document.querySelector(".r9_2").innerHTML = "Số lượng số nguyên tố: " + n;
};
