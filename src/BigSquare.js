import React, { useState } from "react";
import SmallSquare from "./SmallSquare";
import "./BigSquare.css";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const NumberSquares = Array.from({ length: 16 }, (_, i) => i);
const alphaSquares = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O']
function BigSquare() {
  const [randomSquares, setRandmoSquares] = useState([]);
 

  function moveSquare(val) {
    // console.log(val)
    let zeroIndex = randomSquares.indexOf(0);
    let valIndex = randomSquares.indexOf(val);

    if (valIndex + 4 === zeroIndex || valIndex - 4 === zeroIndex) {
        swap(valIndex, zeroIndex);
    } else if (valIndex + 1 === zeroIndex && zeroIndex % 4 !== 0 ) {
        swap(valIndex, zeroIndex);
    } else if (valIndex - 1 === zeroIndex && (zeroIndex + 1) % 4 !== 0) {
        swap(valIndex, zeroIndex)
    }
  }

  function swap(valIndex, zeroIndex) {
    let temArray = [...randomSquares]
    temArray[zeroIndex] = randomSquares[valIndex];
    temArray[valIndex] = 0;
    setRandmoSquares(() => [...temArray])
  }
  const alphaClick = () =>{
    setRandmoSquares(() => shuffle(alphaSquares))
    
  }
  const numClick = () =>{
    setRandmoSquares(() => shuffle(NumberSquares))
  }

  return (
    <>
    <div className="container" style={{marginBottom:"10px"}}>
    <button className="btn" style={{marginRight:"3px"}} onClick={numClick}>NumberSquares</button>
    <button onClick={alphaClick}>alphaSquares</button>
    </div>

    <div className="Container">
      {randomSquares.map((e, i) => {
        return (
          <div key={e} className="Container-Sub" >
            <SmallSquare value={e}  clickHandler={moveSquare}/>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default BigSquare;
