const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
const button = document.querySelector("button")!;

function addNum (num1:number, num2:number) {
  return num1 + num2 
}

button.addEventListener("click", function () {
    
  console.log(addNum(+input1.value, +input2.value))
  
});
