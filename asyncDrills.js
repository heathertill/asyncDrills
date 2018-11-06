document.addEventListener('DOMContentLoaded', function() {

    let funcValue;
   
    function myFunc() {
        console.log('Hello World!!!');
        funcValue = Math.floor(Math.random() * (100 - 0)) + 0;
        return funcValue;
    }
    console.log(myFunc());

    function anotherFunc() {
        let anotherFuncValue = funcValue * 4;
        console.log(anotherFuncValue)
        return anotherFuncValue;
    }

    setTimeout(() => {
       anotherFunc();
    }, 2000);


    function getWords(word) {
        console.log(word[0]);
        setTimeout(() => {
            console.log(word[1]);
            setTimeout(() => {
                console.log(word[2]);
                setTimeout(() => {
                    console.log(word[3]);
                }, 1000);
            }, 2000);
        }, 3000);
    }
    

    getWords(['Pizza', 'Hamburger', 'Hotdog', 'Ice Cream'])
    
    function countdown(num, callback) {
        let x = num;
        let count = setInterval(function() {
            console.log(x);
            x--;
            if (x < 0) {
                clearInterval(count);
                callback()
            }
        }, 1000) 
    }
    
    function done() {
        console.log('The function is done!');
    }
    
    countdown(5, done);

let thisNum = trueFalse();


function trueFalse() {
    let randValue = Math.floor(Math.random() * 10);
    return (randValue % 2 == 0) ? true : false;
}



let orderChickenSandwich = new Promise(function (resolve, reject) {
    if (thisNum === true) {
        let order = {
            sandwich: 'chicken',
            veggie: 'lettuce'
        };
        resolve(order);
    } else {
        let reason = new Error('Something went wrong with your order');
        reject(reason);
    }
    resolve(message)
});


let orderFood = function() {
  orderChickenSandwich
  .then(function(a) {
      console.log(`You ordered a ${a.sandwich} sandwich with ${a.veggie}. Would you like a drink with that?`)
  })
  .catch(function(b) {
     console.log(b.message)
  })
}


orderFood()




 var chain = new Promise(
    function (resolve, reject) {
        setTimeout(() => {
            resolve(1);
          }, 2000);
    });
    
    chain
    .then((val) => {
        console.log(val)
        return val * 2
    })
    .then((val) => {
        console.log(val);
        return val * 4
    })
    .then((val) => {
        console.log(val);
        return val * 6
    })
    .then((val) => {
        console.log(val)
    })


});
