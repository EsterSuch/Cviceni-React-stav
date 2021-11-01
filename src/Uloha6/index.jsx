import React, { useState } from 'react'
import './ukol.css'

// Děláš jednoduchou komponentu zobrazující úkoly,
// které jdou označit jako splněné.

// Zadání 1:
// Pomocí `map` vypiš v seznamu `ul` všechny úkoly
// pomocí komponenty `Ukol`.

// Zadání 2:
// V komponentě Ukol si nachystej stavovou proměnnou
// s výchozí hodnotou `false`.
// Klikem na tlačítko ji změň na `true` pro splněný úkol.

// Zadání 3:
// Je-li úkol splněný, nerenderuj tlačítko a k `li` přidej navíc třídu `ukol--splnen`.

const Ukol = ({ nazev }) => {
  const [splneni, setSplneni] = useState(false);
  const zmenaStavu = () => {
    setSplneni(true)
  };

  return (

    <li className={splneni ? "ukol ukol--splnen" : "ukol"}>
      <span className="ukol__nazev">{nazev}</span>
      {!splneni && (
        <button className="ukol__akce" onClick={zmenaStavu}>splnit</button>
      )}
    </li >
  )
  }

  const Uloha6 = () => {
    const ukoly = ['Zamést', 'Pověsit prádlo', 'Umýt okna', 'Vynést koš']

    return <ul>{ukoly.map((polozka) => (<Ukol nazev={polozka} />))}</ul>

  }
  
export default Uloha6;
