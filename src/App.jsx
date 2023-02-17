import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchParams from "./searchParams";
import Details from "./Details";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Adopt me!</h1>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  ); // children, optional
};

const container = document.getElementById("root");
const root = createRoot(container); // react 18 new features
root.render(<App />);
