// function factorial(number){
//         let result = 1;
//     for ( let i = 1; i <= number; i++){
//         result= result *i;
//         console.log(i);

//     }
//     return result;
// }
// const numbers=8;
// const total=factorial(numbers);
// console.log(total)




// reverse way the multification
function factorial(number){
    let result = 1;
for ( let i = number; i >= 1; i--){
    result= result *i;
    console.log(i, result);

}
return result;
}
const numbers=8;
const total=factorial(numbers);
console.log('total factorial of:',numbers,'=',total)