// Write your Color component here
import { useState } from "react";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div
          className={`${selectedColor ? "selected" : null}  ${selectedColor}`}
        >
          {selectedColor}
        </div>
      </div>
      <div id="colors-list">
        {/*  added id to select each color circle later */}
        <Color color="red" id="red" setSelectedColor={setSelectedColor} />
        <Color color="blue" id="blue" setSelectedColor={setSelectedColor} />
        <Color color="green" id="green" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

const Color = ({ color, setSelectedColor }) => {
  return (
    <div
      className={color}
      onClick={() => {
        setSelectedColor(color);
        {
          /* select whichever circle is selected and add .selected class to it*/
        }
        const circle = document.querySelector(`.${color}`);
        circle.classList.add("selected");

        {
          /*  wanted a better way to remove the selected border around a circle after user clicks on another circle, but this is my best try at it  */
        }
        setTimeout(() => circle.classList.remove("selected"), 2000);
      }}
    />
  );
};

export default App;
