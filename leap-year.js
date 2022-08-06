function leapYear(year){
    const reminder= year % 4;
    if(reminder == 0){
        return true;
    }
    return false;
    // else{
    //     return false;
    // }
}
// const date=2000;
const myYear=leapYear(2000);
//console.log(myYear);


// const herdate=2021;
const herYear=leapYear(2021);
// console.log(herYear);

// const otherdate=2023;
const otherYear=leapYear(2023);
// console.log(otherYear);

// const futuredate=2028;
const futureYear=leapYear(2028);
// console.log(futureYear);


//ak sate all output------------------
console.log('2000', myYear ,'2021',herYear ,'2023',otherYear,'2028',futureYear);