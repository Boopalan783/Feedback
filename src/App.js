import logo from './logo.svg';
import './App.css';
import FeedbackForm from './components/FeedbackForm';
import ReviewList from './components/ReviewList';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/feedback">Give Feedback |</Link>
            <Link to="/reviews">Reviews</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Navigate to="/feedback" />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/reviews" element={<ReviewList />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;