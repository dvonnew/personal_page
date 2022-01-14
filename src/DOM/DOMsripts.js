import selfie from './images/me.jpeg'
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
        const pictures = [selfie, us, dog, teton1, teton2, skiing]
        const next = document.querySelector('.next')
        const prev = document.querySelector('.prev')

        pictures.forEach((picture, i) =>{
            const myImage = new Image()
            myImage.src = picture
            if (i == 0){
                myImage.className = `image main`
            }
            else{
                myImage.className = `image`
            }
            myImage.dataset.index = i
            this.images.push(myImage)
            imageSlider.appendChild(myImage)
        })

        next.addEventListener('click', ()=>{
            const index = document.querySelector('.main').dataset.index
            this.changeImage('next', index)
        })

        prev.addEventListener('click', ()=>{
            const index = document.querySelector('.main').dataset.index
            this.changeImage('prev', index)
        }) 
    }

    changeImage(direction, index){
        
        if (direction == 'next'){
            index++
            if (index == this.images.length){
                index=0
            }
        }
        else {
            if (index == 0){
                index = this.images.length-1
            }
            index--
        }

        for (let i=0; i < this.images.length; i++){
            this.images[i].classList.remove('main')
        }   
        this.images[index].classList.add('main')
        console.log(this.images[index])
    }

}

export {DOMcontroller}