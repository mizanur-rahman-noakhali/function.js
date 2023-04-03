function addNumbers(num1,num2){
  //console.log(arguments);
  var sum=0;
  for (let i=0;i<arguments.length;i++){
    const num =arguments[i];
   // console.log(num);
   sum=sum+num;
  }
  //return num1+num2;
  return sum;
}
var result=addNumbers(5,5,8,15,29);
console.log(result);