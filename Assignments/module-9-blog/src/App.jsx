import Navbar from "./components/Navbar";
import BlogPost from "./components/BlogPost";
import CommentSection from "./components/CommentSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="home" className="page-background">
      <div className="page-layout">
        <Navbar />

        <div className="page-frame">
          <main className="container">

            <BlogPost />
            <CommentSection />
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;