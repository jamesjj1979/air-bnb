
import Expire from "./logic/typing";
import Inspire from "./logic/inspire";
import Header from "./logic/header";

function App() {
  return (
    <div className="App">
     <Header></Header>
      <Expire delay={16900}></Expire>
      <Inspire delay={16900}></Inspire>
    </div>
    
  );
}

export default App;
