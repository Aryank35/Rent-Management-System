import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import TenantDetailsForm from './Pages/TenantDetailsForm';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-tenant" element={<TenantDetailsForm />} />
      </Routes>
    </Router>
  );
}

export default App;