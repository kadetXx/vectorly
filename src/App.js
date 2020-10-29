import React from 'react'
import "./App.css";
import "antd/dist/antd.css";
import Rectangle from "./components/rectangle/Rectangle";
import Circle from "./components/circle/Circle";

import { Select } from "antd";
const { Option } = Select;

function App() {

  const onChange = () => {
    console.log('shape');
  }

  return (
    <div className='App'>
      <section className='user'>
        <div className='app-title'>
          <h1>Vectorly IO</h1>
        </div>

        <div className='form-container'>
          <form>
            <div className='input-wrap'>
              <p>Select shape type</p>
              <Select
                style={{ width: 200 }}
                placeholder='Choose shape'
                optionFilterProp='children'
                onChange={onChange}
              >
                <Option value='Rectangle'>Rectangle</Option>
                <Option value='Circle'>Circle</Option>
                <Option value='Square'>Square</Option>
              </Select>
            </div>

            <div className='input-wrap'>
              <p>Height</p>
              <input type='number' placeholder='Input Height' />
            </div>

            <div className='input-wrap'>
              <p>Width</p>
              <input type='number' placeholder='Input Width' />
            </div>

            <div className='input-wrap'>
              <p>Select color</p>
              <Select
                style={{ width: 200 }}
                placeholder='Choose shape'
                optionFilterProp='children'
                onChange={onChange}
              >
                <Option value='Blue'>Blue</Option>
                <Option value='Red'>Red</Option>
                <Option value='Yellow'>Yellow</Option>
              </Select>
            </div>

            <button>Draw Shape</button>
          </form>
        </div>
      </section>

      <section className='board'>
        <div className='shapes-container'>
          <Rectangle width='250' height='130' />
          <Rectangle width='300' height='150' />
          <Circle />
          <Rectangle width='400' height='180' />
          {/* <Circle /> */}
        </div>
      </section>
    </div>
  );
}

export default App;
