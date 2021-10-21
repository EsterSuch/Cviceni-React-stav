import React, { useState } from 'react'
import './carousel.css'

// Tvoříš jednoduchou galerii, kde se jde klikáním
// na tlačítka přesouvat na další nebo předchozí obrázky.

// Zadání 1:
// Nachystej si adresy obrázků uvedené níže do pole.

/*
Adresy obrázků:
https://source.unsplash.com/WLUHO9A_xik/880x500
https://source.unsplash.com/DA1eGglMmlg/880x500
https://source.unsplash.com/kTxL6le0Wgk/880x500
https://source.unsplash.com/7go5UASxmDY/880x500
https://source.unsplash.com/YmATDIFsCmQ/880x500
*/

// Zadání 2:
// Přidej komponentě stavovou proměnnou, ve které bude index
// právě aktivního obrázku. Na začátku to bude 0.

// Zadání 3:
// Pro `src` v tagu `img` použij adresu z pole pod správným indexem.

// Zadání 4:
// Tlačítky ← a → měň index.

// Bonus:
// Pozor na krajní hodnoty. Pokud dojdeš na konec nebo začátek pole,
// tak už v daném směru neměň index, aby ti neutekl mimo položky v poli.
// Nastav tlačítkům atribut `disabled`, pokud v jejich směru už není
// žádný obrázek.


const zdroj = ['https://source.unsplash.com/WLUHO9A_xik/880x500', 'https://source.unsplash.com/DA1eGglMmlg/880x500','https://source.unsplash.com/kTxL6le0Wgk/880x500','https://source.unsplash.com/7go5UASxmDY/880x500', 'https://source.unsplash.com/YmATDIFsCmQ/880x5000'];

const Uloha4 = () => {
  const [poradi, setPoradi] = useState(0);

  const predchozi = () => {
    setPoradi(poradi - 1);
  };

  const dalsi = () => {
    setPoradi(poradi + 1);
    if (poradi > [zdroj.lenght-1]){
    disabled;
    }
  };

  return (
    <div className="carousel">
      <button disabled="false" onClick={predchozi} className="carousel__predchozi" aria-label="předchozí">
        ←
      </button>
      <div className="carousel__media">
        <img
          className="carousel__image"
          src={zdroj[poradi]}
          alt=""
        />
      </div>
      <button disabled={false} onClick={dalsi} className="carousel__dalsi" aria-label="další">
        →
      </button>
    </div>
  )
}

export default Uloha4;