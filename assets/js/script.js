const button = document.querySelectorAll('.button-more')
const obj = {}

const recurs = (arr) => {
    const childElements = [...arr.children]
    if (arr.childElementCount > 0) {
        if (childElements[0].tagName === "B") {
            obj[arr.className] = arr.innerHTML
        }
        childElements.map(elem => {
            recurs(elem)
        })
    } else {
        console.log(arr)
        obj[arr.className] = arr.innerHTML
    }
}

button.forEach((item, index) => {
    item.addEventListener('click', () => {
        const course = document.querySelectorAll('.item-courses')[index].children
        for (let i = 0; i < course.length; i++) {
            recurs(course[i])
        }
        console.log(obj)
    })
})