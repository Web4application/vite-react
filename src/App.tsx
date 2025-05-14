import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SignIn from "./components/SignIn";
import ImageUpload from "./components/ImageUpload";
import Feed from "./components/Feed";
import "./index.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="container">
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/upload" element={<ImageUpload />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
