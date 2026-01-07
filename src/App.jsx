import { GameHeader } from "./Components/GameHeader.jsx"
import { Card } from "./Components/Card.jsx";
import { useEffect, useState } from "react";



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

  const [ cards, setCards] = useState([]);

  const initializeGame = () =>{
    // SHUFFLE THE CARDS 

    const finalCards = setCards(CardValues.map((value,index)=>(
      {
        id: index,
        value,
        isFlipped: false,
        isMatched: false,


      })));

      setCards(finalCards);
  };

  useEffect(()=>{
     initializeGame();
  },[]);

  const handleCardClick = (card) =>{
    // Don't allow clicking if the card is already flipped , matched 
    if (card.isFlipped || card.isMatched){
      return;
    }
    // Update the card flipped state 
    const newCards = cards.map((c) => {
      if(c.id === card.id){
        return {...c,}
      }
    } )

  }

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
