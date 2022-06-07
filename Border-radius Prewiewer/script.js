const block = document.querySelector('.border-radius-prewiewer__block')
const display = document.querySelector('.border-radius-prewiewer__display')

const rangeLeftTop = document.querySelector('.setting-left-top__range')
const rangeLeftBottom = document.querySelector('.setting-left-bottom__range')
const rangeRightTop = document.querySelector('.setting-setting-right-top__range')
const rangeRightBottom = document.querySelector('.setting-right-bottom__range')

const inputLeftTop = document.querySelector('.setting-left-top__input')
const inputLeftBottom = document.querySelector('.setting-left-bottom__input')
const inputRightTop = document.querySelector('.setting-setting-right-top__input')
const inputRightBottom = document.querySelector('.setting-right-bottom__input')

inputLeftTop.value = '50'
inputLeftBottom.value = '50'
inputRightTop.value = '50'
inputRightBottom.value = '50'

const resizeRadiusLeftTop = () => {
    inputLeftTop.value = rangeLeftTop.value
    block.style.borderTopLeftRadius = rangeLeftTop.value + 'px'
    displayOutput()
}

const resizeRadiusLeftBottom = () => {
    block.style.borderBottomLeftRadius = rangeLeftBottom.value + 'px'
    inputLeftBottom.value = rangeLeftBottom.value
    displayOutput()
}

const resizeRadiusRightTop = () => {
    block.style.borderTopRightRadius = rangeRightTop.value + 'px'
    inputRightTop.value = rangeRightTop.value
    displayOutput()
}

const resizeRadiusRightBottom = () => {
    block.style.borderBottomRightRadius = rangeRightBottom.value + 'px'
    inputRightBottom.value = rangeRightBottom.value
    displayOutput()
}

const displayOutput = () => {
    display.innerText = `border-radius: ${inputLeftTop.value}px ${inputRightTop.value}px ${inputRightBottom.value}px ${inputLeftBottom.value}px`
}

displayOutput()




