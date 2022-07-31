import React from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Buttons from "./components/Buttons";
import Cards from "./components/Cards"
import UtilitiesAnimation from "./components/UtilitiesAnimation"
import UtilitiesBorder from "./components/UtilitiesBorder"
import UtilitiesColor from "./components/UtilitiesColor"
import UtilitiesOther from "./components/UtilitiesOther"
import Charts from "./components/Charts"
import ForgotPasssword from "./ForgotPasssword"
import Login from "./Login"
import Register from "./Register"
import Tables from "./components/Tables"
import Error from "./components/Error"
import Blank from "./components/Blank"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/buttons" element={<Buttons />}></Route>
          <Route path="/cards" element={<Cards />}></Route>
          <Route path="/utilitiesanimation" element={<UtilitiesAnimation />}></Route>
          <Route path="/utilitiesborder" element={<UtilitiesBorder />}></Route>
          <Route path="/utilitiescolor" element={<UtilitiesColor />}></Route>
          <Route path="/utilitiesother" element={<UtilitiesOther />}></Route>
          <Route path="/charts" element={<Charts />}></Route>
          <Route path="/forgotpassword" element={<ForgotPasssword />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/tables" element={<Tables />}></Route>
          <Route path="/blank" element={<Blank />}></Route>
          <Route path="*" element={<Error />}></Route>
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
