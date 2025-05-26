import { useSelector } from "react-redux";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Collaboration from "./pages/Collaboration";
import Feedback from "./pages/Feedback";
import FeedbackReview from "./pages/feedbackReview";
import LandingPage from "./pages/LandingPage";
import Progress from "./pages/Progress";
import SessionDetails from "./pages/SessionDetails";
import Sessions from "./pages/Sessions";

// PrivateRoute component to protect routes
const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.user.user);
  return user ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/feedbacks" element={<FeedbackReview />} />
        <Route 
          path="/sessions" 
          element={
            <PrivateRoute>
              <Sessions />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/session/:slug" 
          element={
            <PrivateRoute>
              <SessionDetails />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/feedback" 
          element={
            <PrivateRoute>
              <Feedback />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/progress" 
          element={
            <PrivateRoute>
              <Progress />
            </PrivateRoute>
          } 
        />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
