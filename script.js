const targetWords = [
    "банди",
    "гутал",
    "өвлөх",
    "үглээ"
]
const dictionary = [
    "банди",
    "гутал",
    "өвлөх",
    "үглээ"
]

const WORD_LENGTH = 5
const FLIP_ANIMATION_DURATION = 500
const keyboard = document.querySelector("[data-keyboard]")
const alertContainer = document.querySelector("[data-alert-container]")
const guessGrid = document.querySelector("[data-guess-grid]")
const offsetFromDate = new Date(2022, 0, 1)
const msOffset = Date.now - offsetFromDate
const dayOffset = msOffset / 1000 / 60 / 60 / 24
const targetWord1 = targetWords[Math.floor(dayOffset)]
const targetWord = "банди"

startInteraction()

function startInteraction() {
    document.addEventListener("click", handleMouseClick)
    document.addEventListener("keydown", handleKeyPress)
}

function stopInteraction() {
    document.removeEventListener("click", handleMouseClick)
    document.removeEventListener("keydown", handleKeyPress)
}

function handleMouseClick(e) {
    console.log(e.target);
    if (e.target.matches("[data-key]")) {
        pressKey(e.target.dataset.key)
        return
    }

    if (e.target.matches("[data-enter]")) {
        submitGuess()
        return
    }

    if (e.target.matches("[data-delete]")) {
        deleteKey()
        return
    }
}

function handleKeyPress(e) {
    if (e.key === "Enter") {
        submitGuess()
        return
    }

    if (e.key === "Backspace" || e.key === "Delete") {
        deleteKey()
        return
    }

    if (e.key.match(/^[а-я,А-Я,ү,Ү,ө8Ө,ё,Ё]$/)) {
        pressKey(e.key)
        return
    }
}

function pressKey(key) {
    const activeTiles = getActiveTiles()
    if (activeTiles.length >= WORD_LENGTH) {
        return
    }
    const nextTile = guessGrid.querySelector(":not([data-letter])")
    nextTile.dataset.letter = key.toLowerCase()
    nextTile.textContent = key
    nextTile.dataset.state = "active"
}

function deleteKey() {
    const activeTiles = getActiveTiles()
    const lastTile = activeTiles[activeTiles.length - 1]
    if (lastTile == null) {
        return
    }
    lastTile.textContent = ""
    delete lastTile.dataset.state
    delete lastTile.dataset.letter
}

function submitGuess() {
    const activeTiles = [...getActiveTiles()]
    if (activeTiles.length !== WORD_LENGTH) {
        showAlert("Үгээ бүрэн бичнэ үү.")
        shakeTiles(activeTiles)
        return
    }

    const guess = activeTiles.reduce((word, tile) => {
        return word + tile.dataset.letter
    }, "")

    if (!dictionary.includes(guess)) {
        showAlert("Үгсийн санд байхгүй үг байна.")
        shakeTiles(activeTiles)
        return
    }

    stopInteraction()
    activeTiles.forEach((...params) => flipTiles(...params, guess))
}

function flipTiles(tile, index, array, guess) {
    const letter = tile.dataset.letter
    console.log(letter)
    const key = keyboard.querySelector(`[data-key="${letter}"i]`)
    console.log(key);
    setTimeout(() => {
        tile.classList.add("flip")
    }, index * FLIP_ANIMATION_DURATION / 2)

    tile.addEventListener("transitionend", () => {
        tile.classList.remove("flip")
        if (targetWord[index] === letter) {
            tile.dataset.state = "correct"
            key.classList.add("correct")
        } else if (targetWord.includes(letter)) {
            tile.dataset.state = "wrong-location"
            key.classList.add("wrong-location")
        } else {
            tile.dataset.state = "wrong"
            key.classList.add("wrong")
        }

        if (index === array.length - 1) {
            tile.addEventListener("transitionend", () => {
                startInteraction()
                // checkWinLose(guess, array)
            })
        }
    })
}

function getActiveTiles() {
    return guessGrid.querySelectorAll('[data-state="active"')
}

function showAlert(message, duration = 1000) {
    const alert = document.createElement("div")
    alert.textContent = message
    alert.classList.add("alert")
    alertContainer.prepend(alert)
    if (duration == null) return
    setTimeout(() => {
        alert.classList.add("hide")
        alert.addEventListener("transitionend", () => {
            alert.remove()
        })
    }, duration)
}

function shakeTiles(tiles) {
    tiles.forEach(tile => {
        tile.classList.add("shake")
        tile.addEventListener("animationend", () => {
            tile.classList.remove("shake")
        }, { once: true })
    })
}