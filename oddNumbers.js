function getOddArray(numbers){
        const oddNumbers=[];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
         const element= numbers[index]
        if(element % 2===1){
            console.log(index,element);
            oddNumbers.push(element);
        }
   
    }
  
   return oddNumbers;
}
const numbers= [20, 25, 36, 45, 63, 98, 27, 55, 899, 9001, 57, 1115, 1000, 10001];
const result=getOddArray(numbers);
console.log('all odd numbers:',result)
