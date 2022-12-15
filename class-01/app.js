var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var button = document.querySelector("button");
function addNum(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(addNum(+input1.value, +input2.value));
});
