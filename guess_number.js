var billboard = document.getElementById('billboard');
var randomNumber;
var input = document.getElementById('input');
var btn_group = document.querySelectorAll('div .btn_number');
var new_number = document.getElementById('new_number');
var maximum = 100;
var minimum = 0;

//產生隨機數字，並且重設min,max
new_number.addEventListener('click', function _NewNumber() {
    randomNumber = Math.floor((Math.random() * 101));
    minimum = 0;
    maximum = 100;
    billboard.innerHTML = minimum + '~' + maximum;
    input.value = '';
    alert('一場猜數字的遊戲開始了！請猜出正確的數字，加油💪')
});
//按鈕foreach出來統一添加事件
btn_group.forEach(function (item) {
    item.addEventListener('click', inputNumber);
});

//印上數字到input裡
function inputNumber() {
    input.value += this.innerHTML;
}

//清除鍵
function _clear() {
    input.value = '';
}

//輸入鍵
function _enter() {
    let inputNumber = Number(input.value);
    if (inputNumber >= maximum || inputNumber <= minimum) {
        alert('再猜一次😩');
        billboard.innerHTML = minimum + '~' + maximum;
        input.value = '';
    } else if (inputNumber > randomNumber && inputNumber < maximum) {
        maximum = inputNumber;
        billboard.innerHTML = minimum + '~' + maximum;
        input.value = '';

    } else if (inputNumber < randomNumber && inputNumber > minimum) {
        minimum = inputNumber;
        billboard.innerHTML = minimum + '~' + maximum;
        input.value = '';
    } else if (inputNumber == randomNumber) {
        alert('done!😄');
    }
};





















