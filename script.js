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

const inputCustomWidth = document.querySelector('.custom__input-width')
const inputCustomHeight = document.querySelector('.custom__input-height')



const displayOutput = () => {
    display.innerText = `border-radius: ${inputLeftTop.value == '' ? '0' : inputLeftTop.value}px ${inputRightTop.value == '' ? '0' : inputRightTop.value}px ${inputRightBottom.value == '' ? '0' : inputRightBottom.value}px ${inputLeftBottom.value == '' ? '0' : inputLeftBottom.value}px;`
}

displayOutput()



const resizeRadiusLeftTop = () => {
    block.style.borderTopLeftRadius = rangeLeftTop.value + 'px'
    inputLeftTop.value = rangeLeftTop.value
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



inputLeftTop.addEventListener('input', () => {
    inputLeftTop.value > 400 ? inputLeftTop.value = 400 : inputLeftTop.value
    inputLeftTop.value == '' ? rangeLeftTop.value = 0 : rangeLeftTop.value = inputLeftTop.value
    block.style.borderTopLeftRadius = inputLeftTop.value + 'px'
    displayOutput()
})

inputLeftBottom.addEventListener('input', () => {
    inputLeftBottom.value > 400 ? inputLeftBottom.value = 400 : inputLeftBottom.value
    inputLeftBottom.value == '' ? rangeLeftBottom.value = 0 : rangeLeftBottom.value = inputLeftBottom.value
    block.style.borderBottomLeftRadius = inputLeftBottom.value + 'px'
    displayOutput()
})

inputRightTop.addEventListener('input', () => {
    inputRightTop.value > 400 ? inputRightTop.value = 400 : inputRightTop.value
    inputRightTop.value == '' ? rangeRightTop.value = 0 : rangeRightTop.value = inputRightTop.value
    block.style.borderTopRightRadius = inputRightTop.value + 'px'
    displayOutput()
})

inputRightBottom.addEventListener('input', () => {
    inputRightBottom.value > 400 ? inputRightBottom.value = 400 : inputRightBottom.value
    inputRightBottom.value == '' ? rangeRightBottom.value = 0 : rangeRightBottom.value = inputRightBottom.value
    block.style.borderBottomRightRadius = inputRightBottom.value + 'px'
    displayOutput()
})



inputCustomWidth.addEventListener('input', () => {
    inputCustomWidth.value > 400 ? inputCustomWidth.value = 400 : inputCustomWidth.value
    block.style.width = inputCustomWidth.value + 'px'
})

inputCustomHeight.addEventListener('input', () => {
    inputCustomHeight.value >= 400 ? inputCustomHeight.value = 400 : inputCustomHeight.value
    block.style.height = inputCustomHeight.value + 'px'
})

