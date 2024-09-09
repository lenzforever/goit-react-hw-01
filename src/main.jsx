import React from "react";
import { createRoot } from "react-dom/client";
import MainApp from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
