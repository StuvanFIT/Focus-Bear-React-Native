import { Routes, Route } from "react-router-dom";
import AppLayout from "./ui/layouts/AppLayout";
import Home from "./ui/pages/Home";
import Profile from "./ui/pages/Profile";

function App() {

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </AppLayout>
  );
}
export default App
