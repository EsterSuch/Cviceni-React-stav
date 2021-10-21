import React, { useState } from 'react';

// Děláš počítadlo, kde jde tlačítky zvětšovat nebo zmenšovat hodnota.

// Zadání 1:
// Z proměnné `cislo` udělej stavovou proměnnou.
// Nezapomeň na všechno, co musíš udělat, když chceš použít useState.

// Zadání 2:
// Nastav, aby jednotlivá tlačítka měnila stav `cislo`
// Tlačíítko +1 aby přičítalo jedničku, +5 přičítalo pětku,
// tlačítko Vynulovat nastavovalo číslo na nulu apod.


  const Pocitadlo = () => {
    const [cislo, setCislo] = useState(0);
    const minusPet = () => {
      setCislo(cislo - 5);
    };
    const minusJedna = () => {
      setCislo(cislo - 1);
    };
    const plusJedna = () => {
      setCislo(cislo + 1);
    };
    const plusPet = () => {
      setCislo(cislo + 5);
    };
    const nulovani = () => {
      setCislo(0);
    };
  
    return (
      <>
        <h3>Počítadlo: {cislo}</h3>
        <button onClick={minusPet}>-5</button>
        <button onClick={minusJedna}>-1</button>
        <button onClick={nulovani}>Vynulovat</button>
        <button onClick={plusJedna}>+1</button>
        <button onClick={plusPet}>+5</button>
      </>
    );
  }
  

const Uloha2 = () => {
	return (
		<>
			<Pocitadlo />
			<Pocitadlo />
		</>
	)
}

export default Uloha2;