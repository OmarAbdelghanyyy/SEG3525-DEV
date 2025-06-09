import { Routes, Route } from "react-router-dom";
import Introdcution from "./sections/Introduction";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import About from "./sections/About";
import Consult from "./sections/Consult";
import Consultation from "./sections/Consultation";
import Footer from "./components/Footer";

function MainPage() {
  return (
    <div className="bg-black text-white">
      <Introdcution />
      <Projects />
      <Services />
      <About />
      <Consult />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/consult" element={<Consultation />} />
    </Routes>
  );
}
