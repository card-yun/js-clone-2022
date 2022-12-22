//return하는 순간 function은 종료된다.
const calculator={
    plus: function(a, b){
        return a+b
    },
    minus: function(a, b){
        return a-b
    },
}

//variable인 plusResult는 function의 return값을 가지게 된다.
//return을 정의하는 것.
const plusResult = calculator.plus(2, 3);

//예제2
function calculateKrAge(foreignerAge){
    foreignerAge+2;
    return "Hello";
}

const krAge = calculateKrAge(24);

console.log(krAge);