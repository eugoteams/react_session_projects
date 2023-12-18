/** @format */

import { useEffect, useRef } from "react";
import "./App.css";
import Calculator from "./Porject_03_Calculator_App";
import CounterApp from "./Project_01_Counter_App";
import FormValidation from "./Project_02_FormValidation_App";
import TicTacToe from "./Project_04_Tic_Tac_Toe_App";

function App() {
  return (
    <div className="App">
      {/* <CounterApp /> */}
      <TicTacToe />
      {/* <FormValidation /> */}
      {/* <Calculator /> */}
    </div>
  );
}

export default App;
