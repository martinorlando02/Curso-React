import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <Router>
    <div>
      <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/detail/:id" element={<UserDetail />} />
            {/* <Route path="/sobreNosotros" element={<Sob />} /> */}
    </Routes>
    </div>
    </Router>
  );

}


export default App;
