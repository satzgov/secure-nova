import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import About from "./pages/About";
import UpcomingEvents from "./pages/events/UpcomingEvents";
import PastEvents from "./pages/events/PastEvents";
import EventDetail from "./pages/events/EventDetail";
import SponsorPage from "./pages/Sponsors";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/sponsor" element={<SponsorPage />} />
            <Route path="/events/upcoming" element={<UpcomingEvents />} />
            <Route path="/events/past" element={<PastEvents />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;