//personName이라는 거는 sayHello라는 function의 body 안에서만 사용 가능하다.
function sayHello(personName){
    console.log(personName);
};

sayHello("nico");

//player를 object라고 하고, sayHello는 function이자 property라고 한다.
//const abc = 10 라고 했을때, abc를 variable이라고 한다.
const player={
    sayHello: function(nameOfPerson){
        console.log("Hello " + nameOfPerson +" Nice to meet you!")
    }
}
//"nicolas"를 argument 라고 한다.//
player.sayHello("nicolas");

//예제//
//순서 중요!

const calculator = {
    plus: function(a, b){
        console.log(a+b);
    },
    minus: function(a, b){
        console.log(a-b);
    },
    divide: function(a, b){
        console.log(a/b);
    },
    powerOf: function(a, b){
        console.log(a**b);
    }
}

calculator.plus(2,5);
calculator.minus(2,5);
calculator.divide(2,5);
calculator.powerOf(2,5);
