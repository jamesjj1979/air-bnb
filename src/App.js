import Typed from "react-typed";
import "./css/App.css";
import Expire from "./logic/typing";
import Inspire from "./logic/inspire";


function App() {
 
  return (
    <div className="App">
      <Expire delay={16900}></Expire>
      <Inspire  delay={16900}></Inspire>
    </div>
  );
}

export default App;
