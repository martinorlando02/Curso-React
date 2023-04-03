import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";

function App() {
  return (
    <Router>
    <div>
      <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/productos" element={<Productos />} />
          {/* <Route path="/sobreNosotros" element={<Sob />} /> */}
                    <Route path="/contacto" element={<Contacto/>} />
                    {/* <Route path="/item/:id" element={<ProductDetail />} /> */}
    </Routes>
    </div>
    </Router>
  );

}


export default App;
