 
const button=document.getElementById('btn')
const color=document.querySelector('.color')

const hex=[
    '0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'
]
// const colors= ['red','blue','green','orange','white','black']
console.log(button)

button.addEventListener('click',() =>{
     let hexColor=  generateHex()
    document.body.style.background=hexColor
    // console.log(getRandomNumber());
    color.textContent= hexColor
    color.style.color=hexColor
})

function generateHex(){// генерирует такой :# F42A451
    let hexColor = '#'
    for(let i=0; i<6;i++){
        hexColor+=hex[getRandomNumber()]
    }
    return hexColor
}

function getRandomNumber(){// генерирует число от 0-12
    return Math.floor (Math.random() * hex.length)
}