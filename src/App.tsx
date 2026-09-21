import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter>
      <Loader />
      <ScrollToTop />
      <div className="min-h-screen bg-caketown-cream">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
