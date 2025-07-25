function Score({score}) {
    const {currScore, bestScore} = score

    return <div class="scoreboard">
        <h1 class="score">Score: {currScore}</h1>
        <h1 class="score">High Score: {bestScore}</h1>
    </div> 
}

export default Score