import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CreatePost from "./pages/createPost";
import CreateUser from "./pages/createUser";
import Navbar from "./components/navbar";
import Posts from "./pages/posts";
import Users from "./pages/users";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/posts" replace />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/create" element={<CreateUser />} />
        <Route path="/posts" element={<Posts />} />
        <Route
          path="/posts/create"
          element={<CreatePost userId="6ad74a34e2ed6222b88b9ec5" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
