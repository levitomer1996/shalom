import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Pages/Main";
import Home from "./Pages/Home/Home";
import { ParallaxProvider } from "react-scroll-parallax";
import NavBottom from "./Components/NavBottom";
import MobileHeader from "./Components/Header/MobileHeader";
function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Header />
        <MobileHeader />
        <Main />
        <NavBottom />
      </div>
    </ParallaxProvider>
  );
}

export default App;
