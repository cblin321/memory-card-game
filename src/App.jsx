import { useState } from 'react'
import { useEffect } from 'react'
import Card from './components/Card'
import Score from './components/Score'
import './App.css'
import Game from './components/Game'
import DifficultySelect from './components/DifficultySelect'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const difficultyMapping = {
    "Easy": 5,
    "Medium": 8,
    "Hard": 10
  }
  const [numCards, setNumCards] = useState(-1)
  const [loading, setLoading] = useState(false)
  const [cards, setCards] = useState([])

  const handleDiffSelect = (difficulty) => {
    setLoading(true)
    setNumCards(difficultyMapping[difficulty])
  }


  const MAL_LOGO = "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"

  const updateCards = async () => {
   const tempCharacterList = []
   for (let i = 0; i < numCards; i++) {
      let resp = await fetch("https://api.jikan.moe/v4/random/characters") 
      let randChar = await resp.json()

    while (tempCharacterList.some(character => character.data.mal_id === randChar.data.mal_id) || randChar.data.images.webp.image_url === MAL_LOGO) {
      resp = await fetch("https://api.jikan.moe/v4/random/characters") 
      randChar = await resp.json()
    }

    randChar.isSelected = false
    tempCharacterList.push(randChar)
   }

   setCards(tempCharacterList)
   setLoading(false)
  }

  if (numCards < 0)
    return <div className="app"><DifficultySelect handleDiffSelect={handleDiffSelect}></DifficultySelect></div>

  if (loading)
    return <div className="app"><LoadingScreen updateCards={updateCards} loading={setLoading}></LoadingScreen></div>

  return  (
    <div className="app">
      <Game setCards={setCards} cards={cards} numCards={numCards}></Game>
    </div>
  
  )
}

export default App
