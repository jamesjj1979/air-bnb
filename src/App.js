
import Expire from "./logic/typing";
import Inspire from "./logic/inspire";
import Header from "./logic/header";
import Modal from "./logic/modal";
import Footer from "./logic/footer";


function App() {
  return (
    <div className="App">
     <Header></Header>
      <Expire delay={12000}/>
      <Inspire delay={12000}/>
      <Modal></Modal>
      <Footer />
    </div>
    
  );
}

export default App;
