import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Destination from "./Sections/Destination.jsx";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Header />
      <Destination />
    </main>
  );
};

export default App;
