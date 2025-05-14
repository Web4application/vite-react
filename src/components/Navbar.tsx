import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold">Web4 Social Media</h1>
      <div>
        {user ? (
          <span>Welcome, {user.displayName}</span>
        ) : (
          <button className="bg-white text-blue-600 px-4 py-2 rounded">Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
