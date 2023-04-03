const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

// usuario digitar apenas os botões permitidos
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function() {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function () {
    input.value = ''
    input.focus()
})

input.addEventListener('keydown', function(ev) {
    ev.preventDefault()
    if(allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.substr(0, input.value.length - 1);
    }
    if (ev.key === 'Enter') {
        calculate()
    }
}) 

document.getElementById('equal').addEventListener('click', calculate)


// usar a function eval com muito cuidado --> aprofundar os estudos nessa function
function calculate() {
    const result = eval(input.value)
    resultInput.value = result
}