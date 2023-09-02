const box = document.querySelector('.box')
const guessContainer = document.querySelector('.guess-container')
const img = document.querySelector('img')
const canvas = document.getElementById('your_custom_canvas_id')


const  {name,src} = getrandom()

img.src = src


const jsConfetti = new JSConfetti({ canvas })

const guess = []

let blur = 50
createLetterBoxes(name)
const letters = [...document.querySelectorAll('.letter')]

box.style.backdropFilter = `blur(${blur}px)`

const button = document.querySelector('button')
const reButton  =  document.querySelector('.reset')

reButton.addEventListener('click',(event)=>{
   
    location.reload()
})

function getrandom(){
   const index = Math.floor(Math.random()*celebs.length)
   return celebs[index]
}
function CreateLetterGuessBox(){
    const letterBox = document.createElement('div')
    letterBox.setAttribute('class','letter')
    guessContainer.appendChild(letterBox)


}
const handleClick= ()=>{
    const answer =  new RegExp(name.replace(' ',''))
    if(blur>=20){
        if(answer.test(guess.join(''))){
            blur = 0
            jsConfetti.addConfetti()


        }else{
            blur-=10

        }
    }else{
        blur = 0
        return
    }
    
    box.style.backdropFilter = `blur(${blur}px)`
}
function createLetterBoxes(name){
    for(let l of name){
       if(l!==' '){
        CreateLetterGuessBox()
        console.log(l)
       }else{
        const space = document.createElement('div')
        space.setAttribute('class','space')
        guessContainer.appendChild(space)
       }
    }

}

function placeGuess(){
  for(let i = 0;i<name.length;i++){
    letters[i].innerText = guess[i]?guess[i]:''
  }
}
addEventListener('keydown',event=>{
    const {key} = event
    if(key != 'Backspace'){
        if(guess.length<=name.length&& key != ' '){
            guess.push(key)
            console.log(guess)
        }

    }
    if(key=='Backspace'){
        guess.pop()
        console.log(guess)
    }
    placeGuess()

})
console.log(letters)

 
button.onclick = handleClick