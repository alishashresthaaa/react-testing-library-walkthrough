import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import FollowersPage from "./pages/FollowersPage/FollowersPage";
import TodoPage from "./pages/TodoPage/TodoPage";

function App() {
  return (
    <div className="App">
      <Banner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/followers" element={<FollowersPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
