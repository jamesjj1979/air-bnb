
import Expire from "./logic/typing";
import Inspire from "./logic/inspire";
import Header from "./logic/header";
import Modal from "./logic/modal";

function App() {
  return (
    <div className="App">
     <Header></Header>
      <Expire delay={16900}></Expire>
      <Inspire delay={16900}></Inspire>
      <Modal></Modal>
    </div>
    
  );
}

export default App;
