const bookStore={
    islam : 5,
    bangla : 7,
    chemistry : 15,
    physics : 9,
    biology : 4,
    math: 20,
    ict: 8,
}
// all output dekar jonno---------------------------------------
// console.log(bookStore)


// akta single output dekar jonno----------------------------------
console.log(bookStore.bangla);


// output all keys -----------------------------------------------
const propertise=Object.keys(bookStore);
// console.log(propertise)


// output all values----------------------------------------------------
const values=Object.values(bookStore);
// console.log(values)


//set kora mane replace kora kunu data-----------------------------------------
bookStore.bangla= 22222;
// console.log(bookStore)
