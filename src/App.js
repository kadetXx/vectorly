import React, { useState, useEffect } from "react";
import { CirclePicker } from "react-color";
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
  const [shape, setShape] = useState(null);
  const [color, setColor] = useState("#000000");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [radius, setRadius] = useState(0);

  const [board, setBoard] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const [alert, setAlert] = useState(false);

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

    //filter newShape object to check for missing fields
    const missingFields = Object.values(newShape).filter(
      (field) => field === null
    );

    //show alert when missing fields are detected
    if (missingFields.length > 0) {
      setAlert(true);

      setTimeout(() => {
        setAlert(false);
      }, 2000);
    } else {
      //add new shape to board
      setBoard([...board, newShape]);

      //send board state to local storage
      localStorage.setItem("board", JSON.stringify([...board, newShape]));

      //return form state to normal
      setShape(null);

      //close sidebar
      setSidebar(false);
    }
  };

  const clearStorage = () => {
    //delete items from loacl storage
    localStorage.removeItem("board");

    //empty board array
    setBoard([]);

    //close sidebar
    setSidebar(false);
  };

  useEffect(() => {
    //get items from local storage on page load
    const shapes = localStorage.getItem("board");

    //set board state to stored data
    shapes ? setBoard(JSON.parse(shapes)) : setBoard([]);

    // chrome bug fix
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // chrome bug fix
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);

  return (
    <div className="App">
      <section className="user" id={sidebar ? "showSidebar" : ""}>
        <div className="app-title">
          <h1>Vectorly</h1>
          <button onClick={() => setSidebar(false)}>
            <span className="material-icons">clear</span>
          </button>
        </div>

        <div className="form-container">
          {alert && (
            <div className="alert">
              <span className="material-icons">error_outline</span>
              <p>Please fill all fields</p>
            </div>
          )}

          <form onSubmit={(e) => createShape(e)}>
            <div className="input-wrap">
              <p>Select shape type</p>
              <Select
                size="large"
                placeholder="Choose shape"
                optionFilterProp="children"
                value={shape}
                onChange={(value) => setShape(value)}
              >
                <Option value="rectangle">Rectangle</Option>
                <Option value="circle">Circle</Option>
                <Option value="square">Square</Option>
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

            <div className="input-wrap">
              <p>Select color</p>
              <CirclePicker
              color={color}
              onChangeComplete={(color) => setColor(color.hex)}
            />
            </div>

           

            <button>Draw Shape</button>
            <button type="button" onClick={() => clearStorage()}>
              Clear Board
            </button>
          </form>
        </div>
      </section>

      <section className="board">
        <div className="button-container">
          <button onClick={() => setSidebar(true)}>
            <span className="material-icons">add</span>
          </button>
        </div>
        <div className="wrap">
          <div className="shapes-container">
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
        </div>
      </section>
    </div>
  );
}

export default App;
