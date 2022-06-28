import "./assets/css/App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Proyects from "./components/Proyects";
import ContactMe from "./components/ContactMe";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Header />
        <div id="aboutMe">
          <AboutMe />
        </div>
        <div id="proyects">
          <Proyects />
        </div>
        <div id="contactMe">
          <ContactMe />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
