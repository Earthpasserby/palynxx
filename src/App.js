import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home.jsx";
import Blog from "./components/Blog.jsx";
import Blogcategory from "./components/Blogcategory.jsx";
import Faqs from "./components/Faqs.jsx";
import Privacy from "./components/Privacy.jsx";
import Terms from "./components/Terms.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import Events from "./components/Events.jsx";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blogcategory" element={<Blogcategory />} />
          <Route path="/Blogcategory/:id" element={<Events />} />
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Error" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
