import './App.css'
import {catCardsMock} from "./shared/utils/cat-card-mock.util.ts";
import {useState} from "react";
import {Typography} from "./components/ui/Typography/Typography.tsx";
import {TYPOGRAPHY_VARIANTS_ENUM} from "./components/ui/Typography/typography-config.ts";
import {CatCard} from "./components/CatCard/CatCard.tsx";

function App() {
    const [selectedCardIds, setSelectedCards] = useState<number[]>([])
    const cardClickHandler = (id: number) => {
        if (selectedCardIds.includes(id)) {
            return setSelectedCards(prev => prev.filter(cardId => cardId !== id))
        }
        return setSelectedCards(prev => [...prev, id])
    }
    return (
    <div className='app-wrapper'>
      <Typography variant={TYPOGRAPHY_VARIANTS_ENUM.H2} className="app-title">Ты сегодня покормил кота?</Typography>
      <div className="cards">
          {
              catCardsMock.map(card => <CatCard {...card} selectedCards={selectedCardIds} cardHandler={cardClickHandler}/>)
          }
      </div>
    </div>
  )
}

export default App
