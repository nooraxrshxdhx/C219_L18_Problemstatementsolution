import { Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Schools from "./pages/Schools";
import SchoolDetails from "./pages/SchoolDetails";

import Diplomas from "./diplomas/Diplomas";
import DiplomaDetails from "./diplomas/DiplomaDetails";
import ModuleDetails from "./diplomas/ModuleDetails";

import Register from "./register/Register";
import Confirmation from "./register/Confirmation";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="/diplomas" element={<Diplomas />} />
          <Route path="/diplomas/:diplomaId" element={<DiplomaDetails />} />
          <Route
            path="/diplomas/:diplomaId/:moduleId"
            element={<ModuleDetails />}
          />

          <Route path="/schools" element={<Schools />} />
          <Route path="/schools/:schoolId" element={<SchoolDetails />} />
          <Route
            path="/schools/:schoolId/diplomas"
            element={<Diplomas />}
          />
          <Route
            path="/schools/:schoolId/diplomas/:diplomaId"
            element={<DiplomaDetails />}
          />
          <Route
            path="/schools/:schoolId/diplomas/:diplomaId/:moduleId"
            element={<ModuleDetails />}
          />

          <Route path="/register" element={<Register />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;