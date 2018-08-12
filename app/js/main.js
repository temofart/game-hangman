window.onload = function() {
  let playBtn = document.getElementById('startPlay')
  playBtn.addEventListener('click', startGame)

  function startGame() {
    let words = ["яблоко", "ноутбук", "озеро", "сковорода", "страна"]
    let word = words[Math.floor(Math.random() * words.length)].toUpperCase()

    let result = ['']
    for(let j = 0; j < word.length; j++) {
      result[j] = " _ "
    }

    let manDead = document.querySelectorAll('.man-dead')
    function manLife(life) {
      if (life == true) {
        for(let m = 0; m < manDead.length; m++) {
          manDead[m].classList.remove('visible')
          manDead[m].classList.add('hidden')
        }
      }
      if (life == false) {
        for(let m = 0; m < manDead.length; m++) {
          manDead[m].classList.remove('hidden')
          manDead[m].classList.add('visible')
        }
      }
    }

    let man = document.querySelectorAll('.man')
    let manLength = man.length - 1
    function clearMan() {
      while(manLength != -1) {
        man[manLength].classList.remove('visible')
        man[manLength].classList.add('hidden')
        manLength--
      }
    }
    clearMan()

    let mistakes = 6

    function removeItem() {
      let classItem = '.man-' + mistakes
      let manItem = document.querySelector(classItem)
      if (mistakes != 1) {
        manItem.classList.remove('hidden')
        manItem.classList.add('visible')
      }
    }

    let getValue
    let wordOutput = document.getElementById('wordOutput')
    wordOutput.innerHTML = result.join(' ')

    let userInput = document.getElementById('inputWord')
    let submit = document.getElementById('submit')

    let countLetters = word.length
    let usedLetters = ['']

    userInput.value = ""

    submit.classList.remove('green')
    submit.classList.remove('red')
    submit.innerText = "Проверить"
    userInput.focus()

    submit.onclick = function() {
      userInput.focus()

      if (countLetters > 0) {
        getValue = userInput.value.toUpperCase()

        function checkMatch() {
          let sourceArray = usedLetters.length
          for(let i = 0; i < word.length; i++) {
            if (getValue === word[i] && getValue !== usedLetters[i]) {
              result[i] = getValue;
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
          wordOutput.innerHTML = result.join('')
        }
        else {
          removeItem()
          mistakes--
        }

        userInput.value = ""

        if (countLetters === 0) {
          setTimeout(function() {
            wordOutput.innerHTML = 'Победа!'
            submit.classList.add('green')
          }, 200)
        }
        else if (mistakes === 0) {
          setTimeout(function() {
            wordOutput.innerHTML = 'Проиграл!'
            submit.classList.add('red')
            manLife(true)
            let manHead = document.querySelectorAll('.man-1')
            for (let g = 0; g < manHead.length; g++) {
              manHead[g].classList.remove('hidden')
              manHead[g].classList.add('visible')
            }
          }, 200)
        }
        if (countLetters === 0 || mistakes === 0){
          setTimeout(function() {
            submit.innerText = "Еще разок?"
            submit.onclick = function() {
              startGame()
              clearMan()
            }
          }, 200)
        }
      }
    }
  }
}
