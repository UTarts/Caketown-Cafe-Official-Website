import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CaketownProvider } from '@/context/CaketownStore';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Loader } from '@/components/Loader';
import { Home } from '@/pages/Home';
import { MenuPage } from '@/pages/MenuPage';
import { About } from '@/pages/About';
import { Locations } from '@/pages/Locations';
import { Gallery } from '@/pages/Gallery';
import { Offers } from '@/pages/Offers';
import { Contact } from '@/pages/Contact';
import { AdminPage } from '@/pages/AdminPage';

function AppLayout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-caketown-cream">
      {!isAdmin && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
    </div>
  );
}

function App() {
  return (
    <CaketownProvider>
      <BrowserRouter>
        <Loader />
        <ScrollToTop />
        <AppLayout />
      </BrowserRouter>
    </CaketownProvider>
  );
}

export default App;