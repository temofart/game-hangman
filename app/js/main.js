let playBtn = document.getElementById('startPlay')
let attempsHtml = document.getElementById('attemps')

playBtn.addEventListener('click', startGame)

function startGame() {
  let words = ["яблоко", "ноутбук", "озеро", "сковорода", "страна"]
  let word = words[Math.floor(Math.random() * words.length)].toUpperCase()

  let mainWord = ['']
  for(let j = 0; j < word.length; j++) {
    mainWord[j] = " _ "
  }

  let attemps = []
  for (let a = 0; a < 10; a++) {
    attemps[a] = '|'
  }

  let getValue
  let wordOutput = document.getElementById('wordOutput')
  wordOutput.innerHTML = mainWord.join(' ')

  let userInput = document.getElementById('inputWord')
  let submit = document.getElementById('submit')

  let countLetters = word.length
  let usedLetters = ['']

  userInput.value = ""

  submit.classList.remove('green')
  submit.classList.remove('red')
  submit.innerText = "Проверить"
  userInput.focus()
  attempsHtml.innerText = attemps.join(' ')

  submit.onclick = function() {
    userInput.focus()

    if (countLetters > 0) {
      getValue = userInput.value.toUpperCase()

      function checkMatch() {
        let sourceArray = usedLetters.length
        for(let i = 0; i < word.length; i++) {
          if (getValue === word[i] && getValue !== usedLetters[i]) {
            mainWord[i] = getValue;
            usedLetters.push(getValue)
            countLetters--
          }
        }
        if (usedLetters.length > sourceArray) {
          return true
        }
        else {return false}
      }

      if (checkMatch()) {
        wordOutput.innerHTML = mainWord.join('')
      }
      else {
        attemps.pop()
        attempsHtml.innerText = attemps.join(' ')
      }

      userInput.value = ""

      if (countLetters === 0) {
        setTimeout(function() {
          wordOutput.innerHTML = 'Победа!'
          submit.classList.add('green')
        }, 200)
      }
      else if (attemps.length === 0) {
        setTimeout(function() {
          wordOutput.innerHTML = 'Проиграл!'
          submit.classList.add('red')
        }, 200)
      }
      if (countLetters === 0 || attemps.length === 0){
        setTimeout(function() {
          submit.innerText = "Еще разок?"
          submit.onclick = function() {
            play()
          }
        }, 200)
      }
    }
  }
}
