import React, {useState} from 'react'
import './ukazatel-uspechu.css'

// Děláš jednoduchou komponentu, která ukazuje "progress bar",
// proužek, který ukazuje pokrok v nějakém procesu.

// Zadání 1:
// Použij prop `barva` ve style atributu, aby bal proužek barvou
// předanou jako prop do komponenty.

// Zadání 2:
// Přidej komponentě číselný stav od nuly do sta,
// který bude reprezentovat postup.

// Zadání 3:
// Po kliknutí na tlačítko zvětši stav o deset. Nejvýše ale do sta.

// Zadání 4:
// Nastav prvku `ukazatel-uspechu__postup` šířku podle stavové proměnné.

const UkazatelPokroku = ({ barva, step }) => {
  const [stav, setStav] = useState(0);
  const navysStav = () => (
    setStav(stav + step)
  )

	return (
		<div className="ukazatel-uspechu">
			<div className="ukazatel-uspechu__ramecek">
				<div
					className="ukazatel-uspechu__postup"
					style={{
						width: `${stav}%`,
						backgroundColor: barva,
					}}
				></div>
			</div>
      <div>Splněno {stav}%</div>
			<button onClick={navysStav} disabled={stav > 90}>postoupit o 10 %</button>
		</div>
	)
}

const Uloha7 = () => {
	return (
		<>
			<UkazatelPokroku barva="blue" step={10}/>
			<UkazatelPokroku barva="green" step={10}/>
			<UkazatelPokroku barva="purple" step={10}/>
		</>
	)
}

export default Uloha7;