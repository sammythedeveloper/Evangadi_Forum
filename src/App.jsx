import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignupPage from "./SignUpPage";
import Explained from './Explained';
import Nav from "./Nav";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav/>
              <LandingPage />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/SignUpPage"
          element={
            <>
               <Nav/>
              <SignupPage />
            </>
          }
        />
      </Routes>


      <Routes>
        <Route
          path="/Explained"
          element={
            <>
               <Nav/>
              <Explained />
            </>
          }
        />
      </Routes>


    </Router>
  );
}

export default App;
