import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
