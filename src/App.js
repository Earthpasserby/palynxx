import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage.jsx";
import Blog from "./components/Blog.jsx";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route>
          <Route index element={<Homepage />} />
          <Route path="/Blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
