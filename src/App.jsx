import "./assets/css/App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
// import AboutMe from "./components/AboutMe";
// import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Proyects from "./components/Proyects";

// import Proyects from "./components/Proyects";
// import ContactMe from "./components/ContactMe";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Proyects />
      <br />
      <ContactMe/>
      
    </>
  );
}

export default App;
