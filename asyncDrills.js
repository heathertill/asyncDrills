document.addEventListener('DOMContentLoaded', function() {

    let funcValue;
   
    function myFunc() {
        console.log('Hello World!!!');
        funcValue = Math.floor(Math.random() * (100 - 0)) + 0;
        // funcValue = 10;
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









// 
// 
// 
// 
// 
// 
// 
});
