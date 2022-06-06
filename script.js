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

const resizeRadiusLeftTop = () => {
    block.style.borderTopLeftRadius = rangeLeftTop.value + 'px'
    inputLeftTop.value = rangeLeftTop.value
    displayOutput()
}

const resizeRadiusLeftBottom = () => {
    block.style.borderBottomLeftRadius = rangeLeftBottom.value + 'px'
    inputLeftBottom.value = rangeLeftBottom.value
}

const resizeRadiusRightTop = () => {
    block.style.borderTopRightRadius = rangeRightTop.value + 'px'
    inputRightTop.value = rangeRightTop.value
}

const resizeRadiusRightBottom = () => {
    block.style.borderBottomRightRadius = rangeRightBottom.value + 'px'
    inputRightBottom.value = rangeRightBottom.value
}

const displayOutput = () => {
    display.innerText = `border-radius: ${rangeLeftTop.value}px`
}




