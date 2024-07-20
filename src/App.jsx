import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./component/NavbarComponent.jsx";
import Header from "./component/Header.jsx";
import Services from "./component/Services.jsx";
import Portofolio from "./component/Portofolio.jsx";
import Contact from "./component/Contact.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full font-mono">
       <Navbar />
        <Header />
        <Services />
        <Portofolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
