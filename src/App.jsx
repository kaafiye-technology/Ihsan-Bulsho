import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CampaignDetails from "./pages/CampaignDetails";
import DonationPage from "./pages/DonationPage";
import "./App.css";
import AddCampaign from "./pages/AddCampaign";

// Create a wrapper component to conditionally show footer
function AppContent() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/add-campaign";
  const isDonationPage = location.pathname.includes("/donate/");

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/campaign/:id" element={<CampaignDetails />} />
          <Route path="/donate/:id" element={<DonationPage />} />
          <Route path="/add-campaign" element={<AddCampaign />} />
        </Routes>
      </main>
      {/* Only show footer on non-auth and non-donation pages */}
      {!isAuthPage && !isDonationPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
