// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./components/App"; // переконайтесь, що шлях вказаний правильно
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
// Імпорт стилів нормалізації
import "modern-normalize";
import App from "./components/App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
