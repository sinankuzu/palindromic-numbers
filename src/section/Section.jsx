import React, { useState } from "react";
import "./Section.css";

const Section = () => {
  const palindrome = [];
  const [ilk, setIlk] = useState();
  const [son, setSon] = useState();
  const [pal, setPal] = useState([]);
  const [perfect, setPerfect] = useState([]);
  const listem = [];

  const isPerfect = () => {
    let numbers = [];
    for (let i = ilk; i < son; i++) {
      numbers.push(i);
    }

    numbers.forEach((e) => {
      let toplam = 0;
      for (let i = 1; i <= e/2; i++) {
        if (e % i === 0) {
          toplam += i;
        }
      }

      if (toplam === e && toplam !== 0) {
        listem.push(e);
        setPerfect(listem);
      }
    });
  };

  const calcPal = () => {
    for (let i = 0; i <= son - ilk; i++) {
      const ters = String(ilk + i)
        .split("")
        .reverse()
        .join("");

      if (String(ilk + i) === ters) {
        palindrome.push(ilk + i);
        setPal(palindrome);
      }
    }
  };

  return (
    <div className="container">
      <input
        type="number"
        onChange={(e) => {
          setIlk(Number(e.target.value));
        }}
      />
      <input
        type="number"
        onChange={(e) => {
          setSon(Number(e.target.value));
        }}
      />

      <button onClick={calcPal}>List palindrome</button>
      <button onClick={isPerfect}>List perfect number</button>

      <div className="text1">
        {pal.map((e) => (
          <div key={`${e + 1}`}>{e}</div>
        ))}
      </div>
      <div className="text2">
        {perfect.map((e) => (
          <div key={e + 1}>{e}</div>
        ))}
      </div>
    </div>
  );
};

export default Section;
