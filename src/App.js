import logo from "./logo.svg";
import "./App.css";
import HeroOne from "./components/HeroOne";
import Testimonials from "./components/Testimonials";
import HeroTwo from "./components/HeroTwo";
import Bonuses from "./components/Bonuses";
import Guarantee from "./components/Guarantee";
import Scarcity from "./components/Scarcity";
import CTA from "./components/CTA";

function App() {
  return (
    <div>
      <HeroOne />
      <Testimonials />
      <HeroTwo />
      <Bonuses />
      <Guarantee />
      <Scarcity />
      <CTA />
    </div>
  );
}
export default App;
