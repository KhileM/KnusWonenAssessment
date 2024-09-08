import "./App.css";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import About from "./pages/About";
import Updates from "./pages/Updates";
import Newsletter from "./pages/Newsletter";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App text-center">
      <Modal />
      <Header />
      <LandingPage />
      <About />
      <Updates />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
