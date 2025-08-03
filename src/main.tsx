import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ShippingDelivery from './pages/ShippingDelivery.tsx';
import ReturnsRefunds from './pages/ReturnsRefunds.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsOfService from './pages/TermsOfService.tsx';
import FAQs from './pages/FAQs.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shipping-delivery" element={<ShippingDelivery />} />
        <Route path="/returns-refunds" element={<ReturnsRefunds />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </Router>
  </StrictMode>
);
