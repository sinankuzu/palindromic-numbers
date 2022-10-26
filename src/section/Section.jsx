import React, { useState } from "react";
import "./Section.css";

const Section = () => {
  const palindrome = [];
  const [ilkk, setIlkk] = useState(20);
  const [sonn, setSonn] = useState(40);
    

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
      <button>List perfect number</button>

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
