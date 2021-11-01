import React, { useState } from 'react'
import './hamburger.css'

// Tvoříš rozbalovací hamburger menu.

// Zadání 1:
// Přichystej si stavovou proměnnou s výchozí hodnotou `false`,
// ve které bude uloženo, zda je menu otevřené nebo nikoliv.

// Zadání 2:
// Po kliknutí na button změň stav z `true` na `false` nebo obráceně.

// Zadání 3:
// Nerenderuj `ul`, pokud je stav `false`.

// Zadání 4:
// Pokud je menu zavřené nech mu jen třídu `hamburger`.
// Pro otevřené přidej navíc `hamburger--otevrene`.

const Uloha5 = () => {

  const [rozbalit, setRozbalit] = useState(false);
  const changeMenu = () => {
    setRozbalit(!rozbalit);
  }
  return (
    <>
      <button className={rozbalit ? "hamburger hamburger--otevrene" : "hamburger"} aria-label="menu" onClick={changeMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {rozbalit && (
      <ul>
        <li>
          <a href="#o-nas">O nás</a>
        </li>
        <li>
          <a href="#co-delame">Co děláme</a>
        </li>
        <li>
          <a href="#kontakty">Kontakty</a>
        </li>
        <li>
          <a href="#cenik">Ceník</a>
        </li>
      </ul>
      )}
    </>
  )
}

export default Uloha5;