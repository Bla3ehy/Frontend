//清除鍵
function _clear() {
    document.getElementById('output').innerHTML = '0';
}

//防呆
function zero_remove() {
    let value = document.getElementById('output').innerHTML;
    if (value == '0') {
        value = '';
        document.getElementById('output').innerHTML = value;
    }
}

//百分比鍵
function btn_percent() {
    zero_remove();
    let value = document.getElementById('output').innerHTML;
    value = value / 100;
    document.getElementById('output').innerHTML = value;
}

//數字鍵
function btn_number(_value) {
    zero_remove();
    document.getElementById('output').innerHTML += _value;
}

//等於鍵
function equals() {
    zero_remove();
    let equal = document.getElementById('output').innerHTML;
    let answer = eval(equal);
    document.getElementById('output').innerHTML = answer;
}

//倒退鍵
function backspace() {
    let value = document.getElementById('output').innerHTML;
    let lengthOfValue = value.length;
    value = value.slice(0, lengthOfValue - 1);
    if (value === '') {
        value = '0';
    }
    document.getElementById('output').innerHTML = value;
}

//小數點
function btn_decimal() {
    let value = document.getElementById('output').innerHTML;
    if (!value.includes('.')) {
        value += '.';
    }
    document.getElementById('output').innerHTML = value;
}
// //平方
// function btn_power(){
//     let value = document.getElementById('output').innerHTML;
//     value = Number(value);
//     value = value.Math.pow(value,2);
//     document.getElementById('output').innerHTML = value;
// }
// //開根號
// function btn_square(){
//     let value = document.getElementById('output').innerHTML;
//     value = Number(value);
//     value = Math.sqrt(value);
//     document.getElementById('output').innerHTML = value;
// }
// //1/x
// function btn_divide_x(){
//     let value = document.getElementById('output').innerHTML;
//     value = 1/value;
//     document.getElementById('output').innerHTML = value.toString();
// }

/* 鍵盤事件 enter,backspace and decimal is not completely */
document.onkeydown = function (_btn_number) {
    zero_remove();
    let value = document.getElementById('output').innerHTML;
    let keyNum = window.event ? _btn_number.keyCode : _btn_number.which;
    switch (keyNum) {
        case 96:
            value = 0;
            break;
        case 97:
            value = 1;
            break;
        case 98:
            value = 2;
            break;
        case 99:
            value = 3;
            break;
        case 100:
            value = 4;
            break;
        case 101:
            value = 5;
            break;
        case 102:
            value = 6;
            break;
        case 103:
            value = 7;
            break;
        case 104:
            value = 8;
            break;
        case 105:
            value = 9;
            break;
        case 111:
            value = '÷';
            break;
        case 109:
            value = '-';
            break;
        case 106:
            value = 'x';
            break;
        case 107:
            value = '+';
            break;
        case 110:
            value = '.';
            break;
        default:
            return false;
    }
    document.getElementById('output').innerHTML += value;
};



