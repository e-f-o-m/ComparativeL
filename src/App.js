import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import Index from "./pages";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/admin" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
