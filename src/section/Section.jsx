import React, { useState } from "react";
import "./Section.css";

const Section = () => {
  const palindrome = [];
  const [ilkk, setIlkk] = useState(20);
  const [sonn, setSonn] = useState(40);
  const [perfect, setPerfect] = useState();
  const liste =[]
    
    // 28 % x == 0
    // 1
    // 2
    // 4
    // 7
    // 14
const deneme = () => {
     for (let i = 0; i <= sonn - ilkk; i++){
        setPerfect(i);
        for (let x = 0; x <= sonn - ilkk; x++){
            if (perfect < x && perfect % x === 0) {
              liste.push(x);
            }
        }
          
     }
    }
    console.log(liste)
  const [salla, setSalla] = useState([]);

  const calcPal = () => {
    for (let i = 0; i <= sonn - ilkk; i++) {
      const ters = String(ilkk + i)
        .split("")
        .reverse()
        .join("");

      if (String(ilkk + i) === ters) {
        palindrome.push(ilkk + i);
        setSalla(palindrome);
      }
    }
  };

  console.log(salla);
  return (
    <div className="container">
      <input
        type="number"
        onChange={(e) => {
          setIlkk(Number(e.target.value));
        }}
      />
      <input
        type="number"
        onChange={(e) => {
          setSonn(Number(e.target.value));
        }}
      />

      <button onClick={calcPal}>List palindrome</button>
      <button onClick={deneme}>List perfect number</button>

      <div className="text1">
        {salla.map((e) => (
          <div>{e}</div>
        ))}
      </div>
      <div className="text2"></div>
    </div>
  );
};

export default Section;
