import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import "./index.css";

function App() {
  return (
    <AuthProvider>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="flex justify-center mt-10">
          <Feed />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
