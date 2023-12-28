import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignupPage from "./SignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
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
              <SignupPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
