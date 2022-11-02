import React, { useState } from "react";
import "./Section.css";

const Section = () => {
  const palindrome = [];
  const [ilkk, setIlkk] = useState();
  const [sonn, setSonn] = useState();
  const [pal, setPal] = useState([]);
  const [perfect, setPerfect] = useState([]);
 const listem =[]

  


  const isPerfect = () => {
    let number = [];
          for(let i = ilkk; i < sonn; i++){
            number.push(i)
          }
          
          number.forEach((e)=>{
            let temp = 0;
            for (let i = 1; i <= e / 2; i++) {
              if (e % i === 0) {
                temp += i;
              }
            }

            if (temp === e && temp !== 0) {
              listem.push(e);
              setPerfect(listem);
            }  
          })
          
  };


  const calcPal = () => {
    for (let i = 0; i <= sonn - ilkk; i++) {
      const ters = String(ilkk + i)
        .split("")
        .reverse()
        .join("");

      if (String(ilkk + i) === ters) {
        palindrome.push(ilkk + i);
        setPal(palindrome);
      }
       ;
    }
   
  };

  
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
      <button onClick={isPerfect}>List perfect number</button>

      <div className="text1">
        {pal.map((e) => (
          <div key={`${e + 1}`}>{e}</div>
        ))}
      </div>
      <div className="text2">{perfect.map((e)=>(<div key={e+1}>{e}</div>))}</div>
    </div>
  );
};

export default Section;
