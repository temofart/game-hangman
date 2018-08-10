let words = ["apple", "notebook", "water", "clock", "country"]
let word = words[Math.floor(Math.random() * words.length)].toUpperCase()

let mainWord = []
for(let j = 0; j < word.length; j++) {
  mainWord[j] = " _ "
}

let countLetters = word.length

let getValue
let wordOutput = document.getElementById('wordOutput')
wordOutput.innerHTML = mainWord.join('')

let userInput = document.getElementById('inputWord')
let submit = document.getElementById('submit')


submit.onclick = function() {
  if (countLetters > 0) {
    getValue = userInput.value.toUpperCase()

    for(let i = 0; i < word.length; i++) {
      if (getValue === word[i]) {
        mainWord[i] = getValue;
        countLetters--
      }
    }
    userInput.value = ""
    wordOutput.innerHTML = mainWord.join('')
    if (countLetters == 0) {
      wordOutput.innerHTML = 'You Win!'
      submit.classList.add('green')
      submit.innerText = "Again!"
    }
  }
}
