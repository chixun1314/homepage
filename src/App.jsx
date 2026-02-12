import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Machines from './pages/Machines';
import Blog from './pages/Blog';
import Agency from './pages/Agency';
import ProductInquiry from './pages/ProductInquiry';
import ASService from './pages/ASService';
import PrivacyPolicy from './pages/PrivacyPolicy';

import { AuthProvider } from './context/AuthContext';
import { ContentProvider } from './context/ContentContext';
import AdminLogin from './pages/AdminLogin';
import AdminFloatingControls from './components/cms/AdminFloatingControls';

function App() {
  return (
    <AuthProvider>
      <ContentProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-background text-primary selection:bg-primary selection:text-background">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/machines" element={<Machines />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/agency" element={<Agency />} />
                <Route path="/product-inquiry" element={<ProductInquiry />} />
                <Route path="/as-service" element={<ASService />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/admin" element={<AdminLogin />} />
              </Routes>
            </main>
            <Footer />
            <AdminFloatingControls />
          </div>
        </Router>
      </ContentProvider>
    </AuthProvider>
  );
}

export default App;
