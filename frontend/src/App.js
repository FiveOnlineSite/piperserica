import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Investor from "./pages/Investor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/foreign-investor" element={<Investor type="foreign" />} />
        <Route path="/nri-investor" element={<Investor type="nri" />} />
        <Route
          path="/startup-founder-entrepreneur"
          element={<Investor type="startup" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
