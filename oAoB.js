let userGuess = document.getElementById('userGuess');
var guess_number_arr = new Array();

//按鈕開始
var start = document.getElementById('start');
start.addEventListener('click', start_game);
function start_game() {
    userGuess.value = null;
    document.getElementById('guessResults').innerHTML = '';
    for (let i = 1; i <= 4; i++) {
        var random_number = Math.floor(Math.random() * 10);
        guess_number_arr.push(random_number);
    }
    alert('四個不重複的隨機數字產生了喔！');
}

//按鈕_猜
var ul = document.querySelector('ul');
var guess = document.getElementById('guess');
guess.addEventListener('click', () => {
    let span = document.createElement('span');
    let string_li = document.createElement('li');
    var user_Guess_value = document.getElementById('userGuess').value;
    let user_Guess_arr = new Array();
    user_Guess_arr = user_Guess_value.split('');

    //防呆
    if (guess_number_arr == '') {
        alert('請先產生數字😩');
    };
    if (userGuess.value == '') {
        alert('請先輸入數字😩');
    };

    // 判斷幾A幾B
    var numA = 0;
    var numB = 0;
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
    }

    span.classList.add('label');
    span.classList.add('label-success');
    string_li.classList.add('list-group-item');
    span.innerHTML = `${numA}A${numB}B`;
    var guessResults = document.getElementById('guessResults');
    string_li.appendChild(span);
    guessResults.appendChild(string_li);
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