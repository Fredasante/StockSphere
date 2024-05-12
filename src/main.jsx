import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <div className="bg-[#10172A] text-gray-200">
        <App />
      </div>
    </ChakraProvider>
  </React.StrictMode>
);
