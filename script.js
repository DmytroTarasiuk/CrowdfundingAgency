const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navEl = document.getElementById('nav')
const navLinks = document.getElementById('navbar-links')
const backBtn = document.getElementById('back-project')
const backContainer = document.getElementById('back-container')
const closeBtn = document.getElementById('close')
const inputs = document.querySelectorAll('.input-container')
const radioBtns = document.querySelectorAll('.radioEl')
const pledgeEnter = document.querySelectorAll('.pledge-enter')
const a_input = document.getElementById('amount-a')
const b_input = document.getElementById('amount-b')
const c_input = document.getElementById('amount-c')


toggleButton.addEventListener('click', () => {
    navEl.classList.toggle('active')
    navLinks.classList.toggle('active')
})

backBtn.addEventListener('click', ()=> {
    backContainer.style.display = 'block'
});

closeBtn.addEventListener('click', ()=> {
    backContainer.style.display = 'none'
});


radioBtns.forEach(radioBtn=> {
    radioBtn.addEventListener('change', (e)=> {
        inputs.forEach(input=> input.classList.remove('checked'))
        pledgeEnter.forEach(pledge => pledge.style.display = 'none')
        let c = e.target.checked
        if(c) {
            let parent = (radioBtn.parentNode).parentElement
            parent.childNodes[3].style.display = 'block'
            parent.classList.add('checked')
            const itemLeft = parent.querySelector('.item-left')
            const btnEl = parent.querySelector('.btn')
            let counter = +itemLeft.innerHTML
            btnEl.addEventListener('click', ()=> {
                counter--
                let result = counter.toString()
                itemLeft.innerHTML = result
            })
        } 
})})