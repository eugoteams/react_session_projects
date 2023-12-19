/** @format */

import { useEffect, useRef } from "react";
import "./App.css";
import Calculator from "./Porject_03_Calculator_App";
import CounterApp from "./Project_01_Counter_App";
import FormValidation from "./Project_02_FormValidation_App";
import TicTacToe from "./Project_04_Tic_Tac_Toe_App";
import SelectComponent from "./Project_05_Select_Compoenent_App";
import StopWatch from "./Project_06_Stop_Watch";

function App() {
  return (
    <div className="App">
      {/* <CounterApp /> */}
      {/* <TicTacToe /> */}
      {/* <FormValidation /> */}
      {/* <Calculator /> */}
      {/* <SelectComponent
        name={"your favorite library"}
        placeholder={"select your favorite library"}
        data={["react", "angular", "vue", "svelte"]} //IT come from an API..
      /> */}
      <StopWatch />
    </div>
  );
}

export default App;
