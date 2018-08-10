let isPlaying = false
let play = document.getElementById('startPlay')
play.onclick = function() {
  isPlaying = true
  startGame()
}
function startGame() {
  if (isPlaying) {
    let words = ["apple", "notebook", "water", "clock", "country"]
    let word = words[Math.floor(Math.random() * words.length)].toUpperCase()

    let mainWord = []
    for(let j = 0; j < word.length; j++) {
      mainWord[j] = " _ "
    }

    let getValue
    let wordOutput = document.getElementById('wordOutput')
    wordOutput.innerHTML = mainWord.join('')

    let userInput = document.getElementById('inputWord')
    let submit = document.getElementById('submit')

    let countLetters = word.length
    let usedWords = []


    submit.classList.remove('green')
    submit.innerText = "Check"

    submit.onclick = function() {
      userInput.focus()
      if (countLetters > 0) {
        getValue = userInput.value.toUpperCase()

        for(let i = 0; i < word.length; i++) {
          if (getValue === word[i] && getValue !== usedWords[i]) {
            mainWord[i] = getValue;
            usedWords.push(getValue)
            countLetters--
          }
        }
        userInput.value = ""
        wordOutput.innerHTML = mainWord.join('')
        if (countLetters == 0) {
          setTimeout(function youWin() {
            wordOutput.innerHTML = 'You Win!'
            submit.classList.add('green')
            submit.innerText = "Again!"
          }, 200)
        }
      }
    }
  }
}
