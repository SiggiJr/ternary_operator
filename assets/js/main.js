"use strict";

//# Ternary Operator 1_1

function ageCheck(){
  const inputValue = document.querySelector("#age_input").value;
let outputValue = inputValue >= 18 ? "Volljährig" : "Minderjährig";
document.querySelector(".age_check_output_div").textContent = outputValue;
}

//# Ternary Oprator 1_2

function passwordCheck() {
  const passwordInput = document.querySelector("#password_input").value;
  let outputValue = passwordInput.length >=8 ? "<p style='color: green'>Welcome to Your Account</p>" : "<p style='color: red'>Your Password is to short</p>";
  document.querySelector(".password_output_div").innerHTML = outputValue;
}