import { useState } from 'react'
import { useEffect } from 'react'
import Card from './Card'
import Score from './Score'

function Game({cards, numCards, loading}) {

  const [score, setScore] = useState({currScore: 0, bestScore: 0})
  const shuffleCards = () => {
    const shuffledCards = [...cards]
    for (let i = cards.length - 1; i >= 0; i--) {
      const left = Math.floor(Math.random() * (i + 1))
      console.log(left)
      const temp = shuffledCards[left]
      shuffledCards[left]  = shuffledCards[i]
      shuffledCards[i] = temp
    }

    setCards(shuffledCards)
  }

  //difficult select, loading screen, basic styling on cards & scoreboard
  //state:
    // cards, list of objs
  //components:
    //card
    //score



  //TODO find API to fetch data


  const handleSelect = (cardIndex) => {
    const card = cards[cardIndex]
    if (!card.isSelected) {
      card.isSelected = true
    setScore(oldScore => ({currScore: oldScore.currScore + 1,
       bestScore: oldScore.currScore + 1}))
    shuffleCards()
      //TODO add card shuffling
      return
    }

    setScore(oldScore => ({currScore: 0, 
      bestScore: oldScore.bestScore}))
    setCards([])
  }


  return (
    <>
      <Score score={score}></Score>
      <div class="card-container">
        {cards.map((c, cardIndex) => {
          return <Card handleSelect={() => handleSelect(cardIndex)} cardData={c} key={c.data.mal_id}></Card>
        })}
      </div>
    </>
  )
}

export default Game