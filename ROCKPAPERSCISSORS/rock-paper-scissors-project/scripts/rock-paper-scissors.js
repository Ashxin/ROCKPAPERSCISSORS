let score = JSON.parse(localStorage.getItem('score')) ||
{
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

/*
if(!score)
{
score = {
    wins:0,
    losses: 0,
    ties: 0
    };
} */


function playGame(playerMove)
{
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'SCISSORS')
    {
        if(computerMove === 'ROCK') 
        {
            result = 'You Loose';
        }
        else if (computerMove === 'PAPER')
        {
            result = 'You Win';
        }
        else if (computerMove === 'SCISSORS')
        {
            result = 'Tie';
        }
    }

    else if (playerMove === 'PAPER')
    {
        if(computerMove === 'ROCK')
        {
            result = 'You Win';
        }
        else if (computerMove === 'PAPER')
        {
            result = 'Tie';
        }
        else if (computerMove === 'SCISSORS')
        {
            result = 'You Loose';
        }

    }

    else if (playerMove === 'ROCK')
    {
        if(computerMove === 'ROCK')
        {
            result = 'Tie';
        }
        else if (computerMove === 'PAPER')
        {
            result = 'You Loose';
        }
        else if (computerMove === 'SCISSORS')
        {
            result = 'You Win';
        }

    }

    if (result === 'You Win')
    {
        score.wins = score.wins + 1;
    }
    else if (result === 'You Loose')
    {
        score.losses += 1;
    }
    else if ( result === 'Tie')
    {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
        .innerHTML = result;

    document.querySelector('.js-moves')
        .innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement()
{
    document.querySelector('.js-score')
        .innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}



function pickComputerMove() 
{
    const randomNumber = Math.random ();
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3) 
    {
        computerMove = 'ROCK';
    }

    else if (randomNumber >= 1/3 && randomNumber < 2/3)
    {
        computerMove = 'PAPER';
    }
    
    else if ( randomNumber >= 2/3 && randomNumber < 1) 
    {
        computerMove = 'SCISSORS';
    }

    return computerMove; /* return statement we can return anything results in a value 
    when we use a return staement it ends the statement immediately*/


}
