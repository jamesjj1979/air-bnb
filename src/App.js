
import Expire from "./logic/typing";
import Inspire from "./logic/inspire";
import Header from "./logic/header";
import Modal from "./logic/modal";
import Footer from "./logic/footer";
import SplashModal from "./logic/splashModal";

function App() {
  return (
    <div className="App">
      <Header />
      <Expire delay={12000} />
      <Inspire delay={12000} />
      <Modal />
      <SplashModal />
      <Footer />
    </div>
  );
}

export default App;
