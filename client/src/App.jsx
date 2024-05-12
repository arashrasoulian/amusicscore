import './App.css'

import { Header } from "./components/Header";
// import { Footer } from "./component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import  { useEffect } from "react";
import { Profile } from './pages/Profile';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="container-fluid card-Background">
          <header>
            <Header />
          </header>
          <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>

          </Routes>

          <div>
            {/* <Footer /> */}
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
