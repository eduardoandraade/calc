
// usar a function eval com muito cuidado --> aprofundar os estudos nessa function

export default function calculate() {
    const resultInput = document.querySelector("#result");
    resultInput.value = 'ERROR!'
    resultInput.classList.add('error')

    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
}