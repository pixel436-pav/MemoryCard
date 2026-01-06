import { GameHeader } from "./Components/GameHeader.jsx"
import { Card } from "./Components/Card.jsx";



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

  return (
    <div className="app">
      <GameHeader score={3} moves={10}/>
      <div className="cards-grid">
        {CardValues.map((card)=>(
          <Card card = {card} />
        ))}
      </div>
    </div>
  )
}

export default App
