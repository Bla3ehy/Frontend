let userGuess = document.getElementById('userGuess');
var guess_number_arr = new Array();
console.log(typeof userGuess);
//按鈕開始
var start = document.getElementById('start');
start.addEventListener('click', start_game);

function start_game() {
    userGuess.value = null;

    document.getElementById('guessResults').innerHTML = '';
    for (let i = 0; i < 4; i++) {
        guess_number_arr[i] = Math.floor(Math.random() * 10);
        for (let j = 0; j < i; j++) {
            if (guess_number_arr[i] == guess_number_arr[j]) {
                break;
            }
            break;
        }
    }
    alert('四個不重複的隨機數字產生了喔！');
}

//按鈕_猜
var guess = document.getElementById('guess');
guess.addEventListener('click', function do_guess() {
    
    let span = document.createElement('span');
    let string_li = document.createElement('li');
    var user_Guess_value = document.getElementById('userGuess').value;
    let user_Guess_arr = new Array();
    user_Guess_arr = user_Guess_value.split('');
    var numA = 0;
    var numB = 0;

    //輸入防呆
    if (guess_number_arr == '') {
        alert('請先產生數字😩');
        userGuess.value = '';
    }
    else if (user_Guess_arr.length != 4 || user_Guess_arr[0] == user_Guess_arr[1] || user_Guess_arr[0] == user_Guess_arr[2] || user_Guess_arr[0] == user_Guess_arr[3] || user_Guess_arr[1] == user_Guess_arr[2] || user_Guess_arr[1] == user_Guess_arr[3] || user_Guess_arr[2] == user_Guess_arr[3]) {
        alert('請輸入四位不重複的數😫！');
        userGuess.value = '';
    }
    else {
        for (let item of user_Guess_arr) {
            var u = user_Guess_arr.indexOf(item);
            for (let element of guess_number_arr) {
                var g = guess_number_arr.indexOf(element);
                if (g == u && item == element) {
                    numA++;
                } else if (g != u && item == element) {
                    numB++;
                }
            }
            span.classList.add('label');
            span.classList.add('label-success');
            string_li.classList.add('list-group-item');
            span.innerHTML = `${numA}A${numB}B` + ' ' + user_Guess_value;
            if (numA == 0 && numB == 0) {
                span.classList.remove('label-success');
                span.classList.add('label-danger');
            };
            var guessResults = document.getElementById('guessResults');
            string_li.appendChild(span);
            guessResults.appendChild(string_li);
        }
    }
});

// 放棄按鈕
let restart = document.getElementById('restart');
restart.addEventListener('click', () => {

    alert('答案是' + guess_number_arr);
    guess_number_arr = '';
    start_game();
})

// 看答案按鈕    
let cheat = document.getElementById('cheat');
cheat.addEventListener('click', () => {
    alert('答案是' + guess_number_arr);
})

//鍵盤事件
document.getElementById('userGuess').onkeydown = function (event) {
    if (event.keyCode == 13) {
        do_guess();
    }
}