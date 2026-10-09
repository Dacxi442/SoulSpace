
import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CommunityPage from './pages/AboutusPage';
import CollectionPage from './pages/CollectionPage';
import ShowroomPage from './pages/showroomPage';
import Categoriespage from './pages/categories';
import StoryPage from './pages/StoryPage';
import OrderPage from './pages/OrderPage';

import { MessageCircle } from 'lucide-react';
import { SITE_CONTENT } from './data/siteContent';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to a section when a URL hash changes
  useEffect(() => {
    if (!location.hash) return;

    const sectionId = decodeURIComponent(location.hash.slice(1));

    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }, [location.pathname, location.hash]);

  // Central navigation function for all pages and buttons
  const handleNavigate = (destination: string) => {
    // A URL beginning with / navigates to a page
    if (destination.startsWith('/')) {
      navigate(destination);
      return;
    }

    // Otherwise, treat the value as a section ID
    if (location.pathname === '/') {
      const element = document.getElementById(destination);

      if (element) {
        const navOffset = 70;
        const top =
          element.getBoundingClientRect().top +
          window.scrollY -
          navOffset;

        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      }

      return;
    }

    // Navigate back to the homepage and target its section
    navigate(`/#${encodeURIComponent(destination)}`);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-brown-dark relative selection:bg-brand-terracotta selection:text-brand-cream">
      {/* Shared Navbar */}
      <Navbar onNavigate={handleNavigate} />

      {/* Page Routes */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/aboutus" element={<CommunityPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/showroom" element={<ShowroomPage />} />
          <Route path="/categories" element={<Categoriespage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </main>

      {/* Shared Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${SITE_CONTENT.contact.whatsappNumber}?text=${encodeURIComponent(SITE_CONTENT.contact.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Soul Space Chat"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-brand-whatsapp text-brand-cream shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white group"
        title="Chat directly with the maker on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-16 bg-brand-brown-dark text-brand-cream text-xs font-mono px-3 py-1.5 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:inline-block">
          Artisan WhatsApp Chat
        </span>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
