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
