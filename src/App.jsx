import { GameHeader } from "./Components/GameHeader.jsx"
import { WinMessage } from "./Components/WinMessage.jsx";
import { Card } from "./Components/Card.jsx";
// import { useEffect, useState } from "react";
import { useGameLogic } from "./hooks/useGameLogic.js";



const CardValues = [
  "😀",
  "🚀",
  "🔥",
  "🎉",
  "💡",
  "🌍",
  "🎧",
  "📚",
  "😀",
  "🚀",
  "🔥",
  "🎉",
  "💡",
  "🌍",
  "🎧",
  "📚"
];
function App() {

  const {cards, score, moves , handleCardClick, initializeGame, isGameComplete} = useGameLogic(CardValues)
  

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />

     { isGameComplete && <WinMessage moves={moves} />}

      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} key={card.id} onClick={handleCardClick} />
        ))}
      </div>
    </div> 
  )
}

export default App
