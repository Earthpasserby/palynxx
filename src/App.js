import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home.jsx";
import Blog from "./components/Blog.jsx";
import Blogcategory from "./components/Blogcategory.jsx";
import Faqs from "./components/Faqs.jsx";
import Policy from "./components/Policy.jsx";
import Privacy from "./components/Privacy.jsx";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blogcategory" element={<Blogcategory />} />
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/Policy" element={<Policy />} />
          <Route path="/Privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
