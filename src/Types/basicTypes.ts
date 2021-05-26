
function add(n1 : number, n2 : number, showResult : boolean, phrase : string){
    const result = n1 + n2;
    if(showResult){
        console.log(phrase + result)
    }else{
        return n1 + n2;
    }
}

const num1 = 5;
const num2 = 2.8;
const showResult = true;
const phrase = 'Result is: ';


add(num1,num2,showResult,phrase); //Compilation error if num1/num2 is changed to string, although code still creates valid JS file