import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WorkPage from "./pages/WorkPage";
import CategoryPage from "./pages/CategoryPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}