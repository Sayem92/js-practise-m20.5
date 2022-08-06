function getResult(number){

    if (number >=80){
        return 'a+';
    }

    else if (number >=70){
        return 'a';
    }

    else if (number >=60){
        return 'a-';
    }

    else if (number >=50){
        return 'b';
    }

    else if (number >=40){
        return 'b-';
    }

    else if (number >=33){
        return 'd';
    }
    return 'fail';
}
const myresult=getResult(50);
console.log(myresult)