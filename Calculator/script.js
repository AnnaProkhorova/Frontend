var oneBtn = document.getElementById("one");
var twoBtn = document.getElementById("two");
var threeBtn = document.getElementById("three");
var fourBtn = document.getElementById("four");
var fiveBtn = document.getElementById("five");
var sixBtn = document.getElementById("six");
var sevenBtn = document.getElementById("seven");
var eightBtn = document.getElementById("eight");
var nineBtn = document.getElementById("nine");
var zeroBtn = document.getElementById("zero");

var decimalBtn = document.getElementById("decimal");
var clearBtn = document.getElementById("clear");
var backspaceBtn = document.getElementById("backspace");
var percentBtn = document.getElementById("percent");
var stepBackBtn = document.getElementById("sb");
var memorySaveBtn = document.getElementById("memorySave");
var memoryRetrieveBtn = document.getElementById("memoryRetrieve"); // объявлены переменные для всех кнопок калькулятора
var pmBtn = document.getElementById("pm");
var displayValElement = document.getElementById("result"); // экран калькулятора
var displayHistory = document.getElementById("history"); // история операций вверху экрана
var memoryCells = []; // память калькулятора

var displayVal = "0"; // на экране по умолчанию отображается 0, переменная для хранения текущего значения 
var pendingVal; // ожидание значения которое введет пользователь
var evalStringArray = []; // массив, в который добавляются операнды и знаки операции

var calcNumBtns = document.getElementsByClassName("number"); // переменная, которая содержит все элементы типа число
var calcOperatorBtns = document.getElementsByClassName("operator"); // переменная, которая содержит все элементы знаков и операций

var updateDisplayVal = (clickObj) => { // функция, которая обновляет текущее отображаемое значение ( => стрелочная ф-ция)
    var btnText = clickObj.target.innerText;

    if (displayVal === "0")
            displayVal = ""; // если отсутствует это условие, перед вводимыми операндами остается 0
            
    displayVal += btnText; // текст с нажатой кнопки добавляем к текущему значению
    displayValElement.innerText = displayVal; // на экране отображается вводимые пользователем значения
}

var performOperation = (clickObj) => { // выполнить операцию
    var operator = clickObj.target.id;

    switch (operator) {
        case 'plus' :
            if (displayVal == "0")
                break;
            pendingVal = displayVal; 
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            displayHistory.innerText = evalStringArray.join(' ');
            break;
        case 'minus' :
            if (displayVal == "0")
                break;
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            displayHistory.innerText = evalStringArray.join(' ');
            break;
        case 'mul' :
            if (displayVal == "0")
                break;
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            displayHistory.innerText = evalStringArray.join(' ');
            break;
        case 'div' :
            if (displayVal == "0")
                break;
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            displayHistory.innerText = evalStringArray.join(' ');
            break;
        case 'equally' :
            evalStringArray.push(displayVal); // добавляем последний операнд 
            console.log(evalStringArray);
            var evaluation = eval(evalStringArray.join(' ')); // с помощью join "склеиваем" элементы массива в одну строку, разделяя пробелами, eval - вычесляет значение в строке
            console.log(evaluation);
            displayVal = evaluation + ''; // в текущее значение передаем результат операции и переобразовывает его в строку
            displayValElement.innerText = displayVal; // выводим результат на экран калькулятора
            evalStringArray = []; // очищаем массив
            displayHistory.innerText = '';
            break;
        case 'percent' :
            if (evalStringArray.length > 1) {
                var op = evalStringArray.pop();
                var evaluation = eval(evalStringArray.join(' '));
                switch (op) {
                    case '+':
                    case '-':
                        perc = evaluation / 100 * Number(displayVal);
                        break;
                    case '*':
                    case '/':
                        perc = Number(displayVal) / 100;
                        break;
                }
            }
            else
                break;
            evalStringArray.push(op);
            evalStringArray.push(perc + '');
            displayValElement.innerText = eval(evalStringArray.join(' ')) + '';
            evalStringArray = [];
            displayHistory.innerText = '';
            displayVal = "0";
            break;
        case 'pm':
            if (displayVal[0] == '-')
                displayVal = displayVal.slice(1, displayVal.length);
            else if (displayVal[0] == 0) {

            }
            else {
                displayVal = '-' + displayVal;
            }
            displayValElement.innerText = displayVal;
            break;
        default:
            break;
    }
}

for (var i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false); // на все кнопки типа число назначаем прослушиватель событий, который по клику запускает функцию updateDisplayVal
}

for (var i = 0; i < calcOperatorBtns.length; i++) {
    calcOperatorBtns[i].addEventListener('click', performOperation, false); // на все кнопки типа оператор назначаем прослушиватель событий, который по клику запускает функцию performOperation
}

clearBtn.onclick = () => { // очистить
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
    displayHistory.innerHTML = '';
}
backspaceBtn.onclick = () => { // удалить последний символ
    var lenghtOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lenghtOfDisplayVal - 1);

    if (displayVal === '')
            displayVal = '0';

    displayValElement.innerText = displayVal;
}

decimalBtn.onclick = () => { // данная функция запрещает ставить точку для ввода дробных чисел более одного раза
    if (!displayVal.includes('.'))
        displayVal += '.';
    displayValElement.innerText = displayVal;
}

memorySaveBtn.onclick = () => { // добавляет в память отображаемое на экране
    memoryCells.push(displayVal);
}
memoryRetrieveBtn.onclick = () => { // возвращает из памяти на экран
    if (memoryCells.length != 0) {
        displayVal = memoryCells.pop();
        displayValElement.innerText = displayVal;
    }
}

// powerBtn.onclick = () => {
//     var resultPower = Math.pow(Number(evalStringArray[evalStringArray.length - 2]), Number(displayVal));
//     displayVal = resultPower;
//     displayValElement.innerText = displayVal;
// }

stepBackBtn.onclick = () => { // шаг назад, удаляет последний операнд и знак операции
    if (evalStringArray.length > 1) {
        displayHistory.innerText = displayHistory.innerText.slice(0, displayHistory.innerText.length - 3);
        evalStringArray.pop();
        displayVal = evalStringArray.pop();
        displayValElement.innerText = displayVal;
    }
}



