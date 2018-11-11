console.log('start');

const a= 10;
const result = modifyA();
function modifyA(){
  if(a > 10){
  console.log('a is greater than 10');
  a++;
 }
else{
  console.log('a is less than 10');
  a--;
 }
  return a;
}
console.log('end');
