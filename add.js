const container = document.querySelector('.container')
const upBtn = document.querySelector('.up-button') // button up
const downBtn = document.querySelector('.down-button')  // button down
const sideBar = document.querySelector('.sidebar')  // div внутри которого градиенты
const mainSlide = document.querySelector('.main-slide')     // див с фотографиями
const allDivFromMainSlide = mainSlide.querySelectorAll('div').length    // длина массива дива с фотками. (4)
sideBar.style.top = `-${(allDivFromMainSlide-1)*100}vh` // установленная позиция элемента с градиентом
let activeSlideIndex = 0 // слайд на котором находимся 
// =========
upBtn.addEventListener('click', () =>{
    changeSlide('up')    
})

downBtn.addEventListener('click', () =>{
    changeSlide('down')
})

function changeSlide(direction){
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex === allDivFromMainSlide){
            activeSlideIndex = 0
        }
    }
    else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = allDivFromMainSlide -1
        }
    }

    const heigth = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex * heigth}px)`

    sideBar.style.transform = `translateY(${activeSlideIndex * heigth}px)`
}
console.log(upBtn);