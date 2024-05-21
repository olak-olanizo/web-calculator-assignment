// Adding event listeners to all buttons with the class 'btn'.
for (let i = 0; i < document.querySelectorAll(".btn").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
      let char = this.innerHTML;
      enterNumOpr(char);
    });
  }
  
  // Function to display the result of the calculation.
  function displayAns() {
    let str = document.querySelector(".caculate").innerHTML;
    try {
      let result = eval(str);
      document.querySelector(".dis").innerHTML = result;
    } catch (e) {
      document.querySelector(".dis").innerHTML = "Error";
    }
  }
  
  // Function to enter numbers and operators into the calculation string.
  function enterNumOpr(num) {
    if (
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(parseInt(num)) ||
      ["-", "/", "+", "*"].includes(num)
    ) {
      document.querySelector(".caculate").textContent += num;
    }
  }
  
  // Adding event listener to the backspace button.
  document.querySelector(".b").addEventListener("click", function () {
    let caculateText = document.querySelector(".caculate").textContent;
    if (caculateText.length <= 1) {
      document.querySelector(".caculate").innerHTML = "";
      document.querySelector(".dis").textContent = "";
    } else {
      document.querySelector(".caculate").textContent = caculateText.slice(0, -1);
    }
  });
  
  // Adding event listener to the clear button
  document.querySelector(".c").addEventListener("click", function () {
    document.querySelector(".caculate").innerHTML = "";
    document.querySelector(".dis").innerHTML = "";
  });
  
  // Adding event listener to the equals button.
  document.querySelector("#eql").addEventListener("click", function () {
    let str = document.querySelector(".caculate").textContent;
    let detect = 0;
    for (let i = 0; i < str.length; i++) {
      if (["-", "/", "+", "*"].includes(str[i])) {
        if (["-", "/", "+", "*"].includes(str[i + 1])) {
          if (!("*" === str[i + 1] && "*" === str[i])) {
            detect++;
          }
        }
      }
    }
  
    if (detect === 0) {
      displayAns();
      let save = str + "=" + document.querySelector(".dis").innerHTML;
    } else {
      document.querySelector(".caculate").textContent = "Error: incorrect input";
      document.querySelector(".dis").textContent = "Error: incorrect input";
    }
  });