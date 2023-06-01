function addNumbers(num1,num2){
  //console.log(arguments);
  var sum=0;
  for (let i=0;i<arguments.length;i++){
    const num =arguments[i];
   // console.log(num);
   sum=sum+num;
  }
  function loginfo (message){
    console.log(message);
  }
  //return num1+num2;
  loginfo('good morning')
  return sum;
}
var result=addNumbers(5,5,8,15,29);
console.log(result);