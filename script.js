/**
 * Created by iryna on 16.07.17.
 */
(function(){
    var btnsAll = document.querySelectorAll('.btn');
    var display = document.querySelector('.display');

    var currentNumber = null;
    var currentAction = null;

    btnsAll.forEach(function (el) {
        el.addEventListener('click', function () {
            if (Number.isInteger(+this.innerText)) {
                if (+display.innerText === 0) {
                    display.innerText = this.innerText;
                } else {
                    display.innerText = display.innerText + this.innerText;
                }
            }


            if (this.innerText.toLowerCase() === 'c'){
                display.innerText = 0;
                currentNumber = null;
                currentAction = null;
            }

            if (this.innerText.charCodeAt(0) === 8592) {
                if (+display.innerText.length > 1) {
                    display.innerText = display.innerText.slice(0, display.innerText.length - 1);
                } else {
                    display.innerText = 0
                }
            }


            if (this.innerText === '/' ||
                this.innerText === '*' ||
                this.innerText === '-' ||
                this.innerText === '+')
            {
                currentNumber = display.innerText;
                currentAction = this.innerText;
                display.innerText = 0;
            }


            if (this.innerText === '='){
                if (currentNumber){
                    eval('var result = function(){return +currentNumber ' + currentAction + ' +display.innerText}()');
                    display.innerText = result;
                    console.log(result);

                    currentNumber = null;
                    currentAction = null;
                }
            }
        })
    })
})();

