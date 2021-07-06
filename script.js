window.addEventListener('DOMContentLoaded',()=> {


    const choices = document.querySelectorAll('.choice')
    const score = document.querySelector('#score')
    const result = document.querySelector('#result')
    const modal = document.querySelector('.modal')
    const restart = document.querySelector('#restart')
    const scoreBoard = {
        player: 0,
        computer: 0
    };

//PlayGame
    function PlayGame() {
        restart.style.display = 'inline-block'
        const player = event.target.id
        const computerChoice = GetComputerChoice()
        const winner = GetWinner(player, computerChoice)
        const show = ShowWinner(winner, computerChoice)


    }


//GetComputerChoice
    function GetComputerChoice() {
        const ran = Math.random()

        if (ran < 0.34) {
            return 'rock'
        } else if (ran <= 0.67) {
            return 'paper'
        } else {
            return 'scissors'
        }

    }

//GetWinner
    function GetWinner(p, c) {
        if (p === c) {
            return 'draw'
        } else if (p === 'rock') {
            if (c === 'paper') {
                return 'computer'
            } else {
                return 'player'
            }
        } else if (p === 'paper') {
            if (c === 'scissors') {
                return 'computer'
            } else {
                return 'player'
            }
        } else if (p === 'scissors') {
            if (c === 'rock') {
                return 'computer'
            } else {
                return 'player'
            }
        }

    }

//ShowWinner
    function ShowWinner(winner, computerChoice) {
        if (winner === 'player') {
            scoreBoard.player++
            result.innerHTML = `<h1 class="text-win">You Win </h1>
    <i class="fas fa-hand-${computerChoice}fa-10x"></i>
    <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
`
        } else if (winner === 'computer') {
            scoreBoard.computer++
            result.innerHTML = `
    <h1 class="text-lose">you lose<h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>

    `
        } else {
            result.innerHTML = `
    <h1>It's A Draw</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i><i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
    
              
`
        }
        score.innerHTML = `
<p>Player:${scoreBoard.player}</p>
<p>Computer:${scoreBoard.computer}</p>
`
        modal.style.display = 'block'

    }

//RestartGame
    function RestartGame() {
        scoreBoard.player = 0
        scoreBoard.computer = 0
        score.innerHTML = `
<p>Player:${scoreBoard.player}</p>
<p>Computer:${scoreBoard.computer}</p>
`
    }


//ClearModal
    function clearModal(event) {
        if (event.target == modal) {
            modal.style.display = 'none'
        }
    }


//Event listener


    choices.forEach(choice => {
        return choice.addEventListener('click', PlayGame)
    })
    window.addEventListener('click', clearModal)
    restart.addEventListener('click', RestartGame)
})





















