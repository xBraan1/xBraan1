import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import WomensSalon from './pages/WomensSalon';
import MensBarbering from './pages/MensBarbering';
import ServicesDirectory from './pages/ServicesDirectory';
import ServiceDetail from './pages/ServiceDetail';
import Booking from './pages/Booking';
import BookingConfirmation from './pages/BookingConfirmation';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <HashRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/salon" element={<WomensSalon />} />
              <Route path="/barber" element={<MensBarbering />} />
              <Route path="/services" element={<ServicesDirectory />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/booking/confirmation" element={<BookingConfirmation />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/team" element={<Team />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </HashRouter>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
