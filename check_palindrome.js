//check whether a number 1221 is  palindrome or not. if it is palindrome print Yes else print No.

let x = 1221;
let rev = 0;
let temp = x;

while (x>0) {
rem = x%10;
rev = rev*10+rem;
x = Math.floor(x/10)

}if(rev==temp){
console.log("Yes");

}else{
console.log("No")
}


