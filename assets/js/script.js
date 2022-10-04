const button = document.querySelectorAll('.button-more')
const sections = document.querySelectorAll('section')
const popUp = {}

const recurs = (arr) => {
    const childElements = [...arr.children]
    if (arr.childElementCount > 0) {
        if (childElements[0].tagName === "B") {
            popUp[arr.className] = arr.innerHTML
        }
        childElements.map(elem => {
            recurs(elem)
        })
    } else {
        console.log(arr)
        popUp[arr.className] = arr.innerHTML
    }
}

button.forEach((item, index) => {
    item.addEventListener('click', () => {
        const course = document.querySelectorAll('.item-courses')[index].children
        for (let i = 0; i < course.length; i++) {
            recurs(course[i])
        }
        [...sections].forEach(section => {
            if (section.className.includes('popUp-block')) {
                section.style.visibility = 'visible'
                document.querySelector('.popUp-block_container').style.position = "relative"
            } else {
                section.classList.add('hide')
            }
        })


        // const div = document.createElement('div')
        // div.className = 'big'
        // div.innerHTML = popUp['item-courses__title']

        // const sections = document.querySelector('main')
        // const h1 = document.createElement('h1')
        // h1.className = 'teitl'
        // h1.innerHTML = 'HELLO FRIENDS'

        // div.appendChild(h1)
        // sections.appendChild(div)
    })
})


const programm = document.querySelectorAll('.programm-item')

programm.forEach(item => {
    const [button, ul] = [...item.children]
    button.addEventListener('click', () => {
        console.log('click')
        const but = [...button.children][1]
        if (ul.className.includes('show-item')) {
            console.log()
            ul.classList.remove('show-item')
            but.classList.remove('rotateIn')
            but.classList.add('rotateOut')
            ul.classList.add('close')
        } else {
            ul.classList.remove('close')
            ul.classList.add('show-item')
            but.classList.add('rotateIn')
            but.classList.remove('rotateOut')

        }


    })
})