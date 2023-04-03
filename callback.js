function callback(name,age,task){
console.log('Hellow',name);
console.log('your age',age);
task();

}
function washHand(){
  console.log('wash your hand with soap');
}
function takeShower(){
  console.log('take shower');
}
function scrollFacebook(){
  console.log('scrollFacebook dont like any post');
}
callback('Mizan',28,washHand);
callback('Rony',22,takeShower);
callback('rahamt',57,scrollFacebook);