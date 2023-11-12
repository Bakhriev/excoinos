import {burgerMenu} from './functions/burger'

burgerMenu()

const langDrop = document.querySelector('.lang-drop')
langDrop.addEventListener('click', () => {
	langDrop.classList.toggle('active')
})
