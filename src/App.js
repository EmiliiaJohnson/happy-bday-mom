import "./App.css";
import React from "react";
import Verification from "./components/Verification/Verification";
import HappyBDay from "./components/HappyBDay/HappyBDay";
import AccessNotAllowed from "./components/AccessNotAllowed/AccessNotAllowed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const routes = [
  { path: "*", element: <Verification /> },
  { path: "/happy-birthday", element: <HappyBDay /> },
  { path: "/access-not-allowed", element: <AccessNotAllowed /> },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
