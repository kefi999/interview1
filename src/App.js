import "./App.css";
import React, { useState, useEffect } from "react";

let order = 0;
let isAllclicked;
function App() {
  const [boxState, setBoxState] = useState(boxRender("populateState"));
  useEffect(() => {
    isAllclicked = boxState.every((el) => el.isClicked === true);

    if (isAllclicked) {
      boxState.forEach((el, i) => {
        let dBox = [...boxState];
        setTimeout(() => {
          dBox[i].isClicked = false;
          setBoxState(dBox);
        }, 1000 * i);
      });
    }
  }, [boxState]);

  function boxRender(type) {
    let boxesData = [];
    const box = [0, 1, 2].map((i) => {
      return [0, 1, 2].map((j) => {
        if (!(i === 1 && j > 0)) {
          if (type === "populateState") {
            return boxesData.push({ i, j, isClicked: false, order: null });
          }
          return (
            <div
              style={{
                backgroundColor:
                  boxState.find((box) => box.i === i && box.j === j)
                    ?.isClicked && "blue",
              }}
              className="box"
              onClick={() => changeColor(i, j)}
            ></div>
          );
        }
        return <div></div>;
      });
    });

    if (type === "populateState") return boxesData;
    return box;
  }
  console.log(boxState);
  const changeColor = (i, j) => {
    let dBox = [...boxState];
    const foundBoxes = dBox.find((box) => {
      if (box.i === i && box.j === j) return box;
    });
    foundBoxes.isClicked = true;
    foundBoxes.order = ++order; //return the value after it is incremeneted
    dBox.sort((a, b) => (a.order > b.order ? 1 : -1));
    setBoxState(dBox);
  };

  return (
    <div className="App">
      <div className="box-container">{boxRender()}</div>
    </div>
  );
}

export default App;
