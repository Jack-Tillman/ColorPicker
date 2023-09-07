// Write your Color component here
import { useState } from "react";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const selectColor = (colorName) => {
    setSelectedColor(colorName);
  }

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
        <Color color="red" selectColor={selectColor} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color="blue" selectColor={selectColor} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color="green" selectColor={selectColor} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

const Color = ({ color, setSelectedColor, selectedColor }) => {
  const isSelected = selectedColor === color ? "selected" : "";

  return (
    <div
      className={`${color} ${isSelected}`}
      onClick={() => {
        setSelectedColor(color);
      }}
    />
  );
};

export default App;
