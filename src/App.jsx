import "./assets/css/App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
// import ProyectsContainer from "./components/ProyectsContainer";


import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="home">
      <Navbar /> <Header />{" "}
      <div id="aboutMe">
        {" "}
        <AboutMe />
      </div>{" "}
      <div id="proyects">
      
        {/* <ProyectsContainer /> */}
      </div>
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
