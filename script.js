let textBox = document.querySelector('.header')

let opPlus = document.querySelector('.btn-plus')
let opMinus = document.querySelector('.btn-minus')
let opMul = document.querySelector('.btn-mul')
let opDiv = document.querySelector('.btn-div')

let btnNum0 = document.querySelector('.btn-0')
let btnNum9 = document.querySelector('.btn-9')
let btnNum8 = document.querySelector('.btn-8')
let btnNum7 = document.querySelector('.btn-7')
let btnNum6 = document.querySelector('.btn-6')
let btnNum5 = document.querySelector('.btn-5')
let btnNum4 = document.querySelector('.btn-4')
let btnNum3 = document.querySelector('.btn-3')
let btnNum2 = document.querySelector('.btn-2')
let btnNum1 = document.querySelector('.btn-1')
const btnDot = document.querySelector('.btn-dot')

const btnResult = document.querySelector('.btn-result')
const btnClear = document.querySelector('.btn-c')

btnClear.addEventListener('click', () => {
    textBox.value = ''
})

// Numbers behaviours
btnNum9.addEventListener('click', () => {
    textBox.value += btnNum9.textContent
})
btnNum8.addEventListener('click', () => {
    textBox.value += btnNum8.textContent
})
btnNum7.addEventListener('click', () => {
    textBox.value += btnNum7.textContent
})
btnNum6.addEventListener('click', () => {
    textBox.value += btnNum6.textContent
})
btnNum5.addEventListener('click', () => {
    textBox.value += btnNum5.textContent
})
btnNum4.addEventListener('click', () => {
    textBox.value += btnNum4.textContent
})
btnNum3.addEventListener('click', () => {
    textBox.value += btnNum3.textContent
})
btnNum2.addEventListener('click', () => {
    textBox.value += btnNum2.textContent
})
btnNum1.addEventListener('click', () => {
    textBox.value += btnNum1.textContent
})
btnNum0.addEventListener('click', () => {
    textBox.value += btnNum0.textContent
})
btnDot.addEventListener('click', () => {
    textBox.value += btnDot.textContent
})

//Operators Functions
btnResult.addEventListener('click', () => {
    textBox.onkeydown = e => {
        console.log(e)
    }
})
