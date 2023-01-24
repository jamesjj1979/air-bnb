import Typed from "react-typed";
import "./App.css";
import Expire from "./logic/typing";
import Inspire from "./logic/inspire";

function App() {
  return (
    <div className="App">
      <Expire delay={17000}>
        <Typed
          strings={["For anywhere you wanna be", "There is"]}
          typeSpeed={150}
          backSpeed={200}
        />
      </Expire>
      <Inspire delay={18000}>
       <div>This might fucking work</div>
      </Inspire>
    </div>
  );
}

export default App;
