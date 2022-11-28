import logo from "./logo.svg";
import "./App.css";
import Button from "./Component/Button/index";
import Divider from "./Component/Divider/Index";
import Serchbar from "./Component/Serchbar/index";
import { useRef } from "react";

import LoginForm from "./Pages/Login/index";

function App() {
  // const count = useRef("0");
  // console.log(count, "count value")
  return (
    <div className="App" style={{ marginTop: "10px", marginLeft: "30px" }}>
      {/* <h1>{count.current} Number</h1> */}
      <LoginForm />
    </div>
  );
}

export default App;
