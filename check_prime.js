//check whether a number 19 is prime or not. if it is prime print Yes else No.

let x=19;

for(let i=1; i<=x; i++){
if(x%i==0){
count++;
}
}if(count==0){
console.log("Yes");

}else{
console.log("No")
}