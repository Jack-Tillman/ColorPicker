// Write your Color component here
import { useState } from "react";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={`${selectedColor ? 'selected' : null}  ${selectedColor}`}>
          {selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" id="red" setSelectedColor={setSelectedColor}  />
        <Color color="blue" id="blue" setSelectedColor={setSelectedColor} />
        <Color color="green" id="green" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

const Color = ({ color, setSelectedColor }) => {
  return (
    <div className={color}
    onClick={() => {
      setSelectedColor(color);
      const circle = document.querySelector(`.${color}`);
      circle.classList.add('selected');
      //  setTimeout(() => circle.classList.remove('selected'), 2000);
      
      // const circles = document.querySelector("#colors-list");
      // const eachCircle = circles.querySelectorAll(".selected");
      // console.log(eachCircle);

    }} />
  );
};

export default App;

/*
.red {
  background-color: #cf000f;
}
.orange {
  background-color: #eb6b56;
}
.yellow {
  background-color: #ffc153;
}
.green {
  background-color: #27ae60;
}
.blue {
  background-color: #1d4fda;
}
.violet {
  background-color: #462446;
}
.black {
  background-color: #000000;
}
.white {
  background-color: #ffffff;
}
*/
