import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import MainLayout from "./layout/MainLayout";

import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import AnimalCards from "./pages/AnimalCards";
import Volunteering from "./pages/Volunteering";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route
              path="/app"
              element={
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="/app/messages" element={<Messages />} />
              <Route path="/app/animalCards" element={<AnimalCards />} />
              <Route path="/app/volunteering" element={<Volunteering />} />
              <Route path="/app/profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
