import {burgerMenu} from './functions/burger'

burgerMenu()

const langDrop = document.querySelector('.lang-drop')
langDrop.addEventListener('click', () => langDrop.classList.toggle('active'))

const converters = document.querySelectorAll('.converter')

converters.forEach(converter => {
	const convertersSelect = converter.querySelector('.converter-select')
	convertersSelect.addEventListener('click', () =>
		converter.classList.toggle('active')
	)
})

const accordions = document.querySelectorAll('.accordion')

accordions.forEach(accordion => {
	accordion.addEventListener('click', () =>
		accordion.classList.toggle('active')
	)
})
