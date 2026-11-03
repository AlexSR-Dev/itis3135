import { 
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import BlogPostsPage from "./pages/BlogPostsPage";
import IndividualPostPage from "./pages/IndividualPostPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <div id="home" className="page-background">
        <div className="page-layout">
          <Navbar />

          <div className="page-frame">
            <main className="container">

              <Routes>
                <Route path="/" element={<Navigate to="/posts" replace />} />
                <Route path="/posts" element={<BlogPostsPage />} />
                <Route path="/posts/:postId" element={<IndividualPostPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<h1>Page Not Found</h1>} />
              </Routes>
            </main>

            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;