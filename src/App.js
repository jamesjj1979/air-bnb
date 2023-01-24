import Typed from "react-typed";
import "./css/App.css";
import Expire from "./logic/typing";
import Inspire from "./logic/inspire";


function App() {
 
  return (
    <div className="App">
      <Expire delay={16500}>
        <Typed
          strings={["For anywhere you wanna be", "There is"]}
          typeSpeed={150}
          backSpeed={200}
        />
      </Expire>
      <Inspire  delay={16500}></Inspire>
    </div>
  );
}

export default App;
