// function getSum(numbers){
//     let sum = 0;
//     for(let i = 0; i <= numbers; i++){
//         const index = i;
//         sum =sum + i;
//         console.log(i,sum);
//     }
//     return sum;
    
// }
// const numbers= 15;
// const result=getSum(numbers);
// console.log('all sum is:',result)




// array numbers ar sum---------------------------------------------
// -------------------------------------------------------------------
function getSumArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
         const element= numbers[index]
        sum =element + sum;
        console.log(i,element,sum);
    }
    return sum;
    
}
const numbers= [20, 25, 36, 45, 63, 98, 21];
const result=getSumArray(numbers);
console.log('all sum is:',result)

