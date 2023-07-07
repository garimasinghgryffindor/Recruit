import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Candidate from "./Components/Candidate";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
                <Footer />
              </div>
            }
          ></Route>

          <Route
            path="/login"
            element={
              <div>
                <Header />
                <Login />
                <Footer />
              </div>
            }
          ></Route>

          <Route
            path="/candidateSearch"
            element={
              <div>
                <Header />
                <Candidate location="" roles=""/>
                <Footer />
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
