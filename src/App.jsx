import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Otp from './components/Otp';
import ForgetPass from './components/ForgetPass';
import SetPass from './components/SetPass';
import PatientDashboard from './components/PatientDashboard';
import DoctorDashboard from './components/DoctorDashboard';
import './index.css';

const DashboardGate = () => {
  const role = (localStorage.getItem('role') || '').toLowerCase();
  return role === 'doctor'
    ? <Navigate to="/doctor-dashboard" replace />
    : <Navigate to="/patient-dashboard" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp-verify" element={<Otp />} />
        <Route path="/forgot-password" element={<ForgetPass />} />
        <Route path="/set-password" element={<SetPass />} />
        
        {/* Main Application */}
        <Route path="/dashboard" element={<DashboardGate />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        
        
        {/* Catch all - redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;