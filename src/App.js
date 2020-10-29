import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import Rectangle from "./components/rectangle/Rectangle";
import Square from "./components/square/Square";
import Circle from "./components/circle/Circle";

import RectangleForm from "./components/rectangle/RectangleForm";
import SquareForm from "./components/square/SquareForm";
import CircleForm from "./components/circle/CircleForm";

import { Select } from "antd";
const { Option } = Select;

function App() {
  const [shape, setShape] = useState("");
  const [color, setColor] = useState("black");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [radius, setRadius] = useState(0);

  const [board, setBoard] = useState([]);

  const createShape = (e) => {
    //prevent default form submission
    e.preventDefault();

    //create new shape object containeing parameters
    const newShape = {
      shape,
      color,
      width,
      height,
      length,
      radius,
    };

    //add new shape to board
    setBoard([...board, newShape]);

    //send board state to local storage
    localStorage.setItem("board", JSON.stringify([...board, newShape]));

    //return form state to normal
    setShape("");
  };

  return (
    <div className='App'>
      <section className='user'>
        <div className='app-title'>
          <h1>Vectorly IO</h1>
        </div>

        <div className='form-container'>
          <form onSubmit={(e) => createShape(e)}>
            <div className='input-wrap'>
              <p>Select shape type</p>
              <Select
                placeholder='Choose shape'
                optionFilterProp='children'
                onChange={(value) => setShape(value)}
              >
                <Option value='rectangle'>Rectangle</Option>
                <Option value='circle'>Circle</Option>
                <Option value='square'>Square</Option>
              </Select>
            </div>

            {shape === "rectangle" ? (
              <RectangleForm width={setWidth} height={setHeight} />
            ) : shape === "square" ? (
              <SquareForm length={setLength} />
            ) : shape === "circle" ? (
              <CircleForm radius={setRadius} />
            ) : (
              ""
            )}

            <div className='input-wrap'>
              <p>Select color</p>
              <Select
                placeholder='Choose shape'
                optionFilterProp='children'
                defaultValue='black'
                onChange={(value) => setColor(value)}
              >
                <Option value='black'>Black</Option>
                <Option value='blue'>Blue</Option>
                <Option value='red'>Red</Option>
                <Option value='yellow'>Yellow</Option>
                <Option value='violet'>Violet</Option>
              </Select>
            </div>

            <button>Draw Shape</button>
          </form>
        </div>
      </section>

      <section className='board'>
        <div className='shapes-container'>
          {board.map((item, index) =>
            item.shape === "rectangle" ? (
              <Rectangle
                key={index}
                color={item.color}
                width={item.width}
                height={item.height}
              />
            ) : item.shape === "square" ? (
              <Square key={index} color={item.color} length={item.length} />
            ) : item.shape === "circle" ? (
              <Circle key={index} color={item.color} radius={item.radius} />
            ) : (
              ""
            )
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
