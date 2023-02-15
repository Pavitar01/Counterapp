import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./app.css";
const App = () => {
  const [val, setVal] = useState(0);
  // const [color, setColor] = useState("");
  const style = {};
  const inc = () => {
    setVal(val + 1);
  };
  const dec = () => {
    setVal(val - 1);
  };

  if (val >= 0 && val <= 4) {
    style.color = "green";
  }
  if (val >= 5 && val <= 9) {
    style.color = "blue";
  }
  if (val === 10) {
    style.color = "red";
  }
  return (
    <>
      <div className="parent">
        <div className="main">
          <h1>COUNTER APP</h1>

          <h2 style={style}>{val}</h2>
          <div className="button">
            <button
              className="btn btn-danger"
              onClick={dec}
              disabled={val <= 0 ? true : false}
            >
              DECREMENT
            </button>
            <button
              className="btn btn-success"
              onClick={inc}
              disabled={val >= 10 ? true : false}
            >
              INCREMENT
            </button>
          </div>
        </div>
        <h1>Done By Pavitar Singh- 12007533</h1>
      </div>
    </>
  );
};

export default App;
