
//Type Aliases
type NumberValue = number;
type Combinable = number | string;
type FixedValue = 'as-number' | 'as-text';

function combine(input1 : NumberValue | string, // Union Type
                input2 : Combinable,
                resultConversion: 'as-number' | 'as-text'){  //Literal union, i can also use FixedValue here
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;  // + converts to number, altenate parseFloat(input1) 
    }else{
        result =  input1.toString() + input2.toString();
    }
    return result;
}

console.log(combine(2,5,'as-number'));
console.log(combine('2','5','as-number'));
console.log(combine('Aniket','Kale', 'as-text'));