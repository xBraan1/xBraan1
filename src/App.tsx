import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import GoogleAnalytics from './components/GoogleAnalytics';
import Home from './pages/Home';
import WomensSalon from './pages/WomensSalon';
import MensBarbering from './pages/MensBarbering';
import ServicesDirectory from './pages/ServicesDirectory';
import ServiceDetail from './pages/ServiceDetail';
import Pricing from './pages/Pricing';
import Booking from './pages/Booking';
import BookingConfirmation from './pages/BookingConfirmation';
import Gallery from './pages/Gallery';
import StyleDetail from './pages/StyleDetail';
import Promotions from './pages/Promotions';
import Team from './pages/Team';
import TeamProfile from './pages/TeamProfile';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Contact from './pages/Contact';
import ContactThankYou from './pages/ContactThankYou';
import Location from './pages/Location';
import FAQ from './pages/FAQ';
import Preparation from './pages/Preparation';
import Policies from './pages/Policies';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Accessibility from './pages/Accessibility';
import Account from './pages/Account';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <HashRouter>
          <GoogleAnalytics />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/salon" element={<WomensSalon />} />
              <Route path="/barber" element={<MensBarbering />} />
              <Route path="/services" element={<ServicesDirectory />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/booking/confirmation" element={<BookingConfirmation />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/:slug" element={<StyleDetail />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/team" element={<Team />} />
              <Route path="/team/:slug" element={<TeamProfile />} />
              <Route path="/about" element={<About />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact/thank-you" element={<ContactThankYou />} />
              <Route path="/location" element={<Location />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/preparation" element={<Preparation />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/account" element={<Account />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </HashRouter>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
