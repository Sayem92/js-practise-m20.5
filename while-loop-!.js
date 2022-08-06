// function getfactorial(number){
//     let result= 1;
//     let i = 1;
//     while(i <= number){
//         result= result * i;
//         i++;
//         console.log(i,result)
//     }
//     return result;
// }
// const digit= 7;
// const totalresult=getfactorial(digit);
// console.log('total factorial of :',digit,totalresult)




// reverse way the while factorial
function getfactorial(number){
    let result= 1;
    let i = number;
    while(i > 1){
        result= result * i;
        i--;
        console.log(i,result)
    }
    return result;
}
const digit= 7;
const totalresult=getfactorial(digit);
console.log('total factorial of :',digit,totalresult)