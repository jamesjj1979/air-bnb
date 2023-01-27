
import Expire from "./logic/typing";
import Inspire from "./logic/inspire";
import Header from "./logic/header";
import Modal from "./logic/modal";
import Footer from "./logic/footer";


function App() {
  return (
    <div className="App">
     <Header></Header>
      <Expire delay={16900}/>
      <Inspire delay={16900}/>
      <Modal></Modal>
      <Footer />
    </div>
    
  );
}

export default App;
