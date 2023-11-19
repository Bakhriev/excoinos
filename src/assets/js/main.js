export const burgerMenu = () => {
	const burger = document.querySelector('.burger')
	const mobileMenu = document.querySelector('.mobile-menu')
	const overlay = document.querySelector('.overlay')
	const body = document.querySelector('body')

	const toggleActiveClass = () => {
		burger.classList.toggle('active')
		overlay.classList.toggle('active')
		mobileMenu.classList.toggle('active')
		body.classList.toggle('disable-scroll')
	}

	burger?.addEventListener('click', toggleActiveClass)

	overlay?.addEventListener('click', toggleActiveClass)

	window?.addEventListener('resize', () => {
		const {innerWidth} = window
		if (innerWidth > 991.98) {
			burger.classList.remove('active')
			overlay.classList.remove('active')
			mobileMenu.classList.remove('active')
			body.classList.remove('disable-scroll')
		}
	})
}

burgerMenu()

const langDrop = document.querySelector('.lang-drop')
langDrop?.addEventListener('click', () => langDrop.classList.toggle('active'))

const converters = document.querySelectorAll('.converter')

converters.forEach(converter => {
	const convertersSelect = converter.querySelector('.converter-select')
	convertersSelect.addEventListener('click', () =>
		converter.classList.toggle('active')
	)
})

const accordions = document.querySelectorAll('.accordion')

accordions?.forEach(accordion => {
	accordion?.addEventListener('click', () =>
		accordion.classList.toggle('active')
	)
})

const input = document.querySelector('#file-upload')
const selected = document.querySelector('.file-selected__selected')
const selectedClear = document.querySelector('.file-selected__clear')
input?.addEventListener('input', e => {
	const value = input.value.split('\\').at(-1)
	if (value.length) {
		selectedClear.classList.add('active')
		selected.textContent = value
	} else {
		selectedClear.classList.remove('active')
		selected.textContent = value
	}
})
selectedClear?.addEventListener('click', () => {
	input.value = ''
	selectedClear.classList.remove('active')
	selected.textContent = ''
})
const observerTargets = document.querySelectorAll('._observer_target')
console.log(observerTargets)
const options = {
	threshold: 0.4,
}

const callback = (entries, _) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('in_view')
		}
	})
}

const observer = new IntersectionObserver(callback, options)

observerTargets.forEach(observerTarget => {
	observer.observe(observerTarget)
})
