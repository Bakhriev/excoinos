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

const input = document.querySelector('#file-upload')
const selected = document.querySelector('.file-selected__selected')
const selectedClear = document.querySelector('.file-selected__clear')
input.addEventListener('input', e => {
	const value = input.value.split('\\').at(-1)
	if (value.length) {
		selectedClear.classList.add('active')
		selected.textContent = value
	} else {
		selectedClear.classList.remove('active')
		selected.textContent = value
	}
})
selectedClear.addEventListener('click', () => {
	input.value = ''
	selectedClear.classList.remove('active')
	selected.textContent = ''
})
