import us from './images/dweebandme.jpeg'
import dog from './images/sasha.jpeg'
import teton1 from './images/teton.jpeg'
import teton2 from './images/teton2.jpeg'
import skiing from './images/skiing.jpeg'

class DOMcontroller {
    constructor (){
        this.images = []
    }

    runDOM(){
        this.showDropDownMenu()
        this.createImageSlider()
    }

    showDropDownMenu(){
        let dropdownButton = document.querySelector('.drop-button')
        let content = document.getElementById('dropdown-list')
    
        dropdownButton.addEventListener('click', () =>[
            content.classList.toggle('show')
        ])
    }

    createImageSlider(){
        const imageSlider = document.querySelector('.image-slider')
        const imageNavBar = document.querySelector('.image-nav-bar')
        const pictures = [us, dog, teton1, teton2, skiing]
        const next = document.querySelector('.next')
        const prev = document.querySelector('.prev')

        pictures.forEach((picture, i) =>{
            const myImage = new Image()
            const navDot = document.createElement('button')

            myImage.src = picture
            myImage.dataset.index = i

            if (i == 0){
                myImage.className = `image main`
            }
            else{
                myImage.className = `image`
            }
            this.images.push(myImage)
            imageSlider.appendChild(myImage)

            navDot.dataset.index = i

            if (i == 0){
                navDot.className = 'image-nav-dot active'
            }
            else{
                navDot.className = 'image-nav-dot'
            }

            imageNavBar.appendChild(navDot)

            navDot.addEventListener('click', ()=>{
                this.changeImage(i)
            })
        
        })

        next.addEventListener('click', ()=>{
            const index = document.querySelector('.main').dataset.index
            this.cycleImage('next', index)
        })

        prev.addEventListener('click', ()=>{
            const index = document.querySelector('.main').dataset.index
            this.cycleImage('prev', index)
        }) 
    }

    changeImage(index){
        const currentIndex = document.querySelector('.active').dataset.index
        const navDots = document.querySelectorAll('.image-nav-dot')

        this.images[currentIndex].classList.remove('main')
        this.images[index].classList.add('main')

        navDots[currentIndex].classList.remove('active')
        navDots[index].classList.add('active')
    }

    cycleImage(direction, index){

        const navDots = document.querySelectorAll('.image-nav-dot')
        
        if (direction == 'next'){
            index++
            if (index == this.images.length){
                index=0
            }
        }
        else {
            if (index == 0){
                index = this.images.length
            }
            index--
        }

        for (let i=0; i < this.images.length; i++){
            this.images[i].classList.remove('main')
            navDots[i].classList.remove('active')
        }   
        this.images[index].classList.add('main')
        navDots[index].classList.add('active')
    }

}

export {DOMcontroller}