import { Helmet } from 'react-helmet';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Testimonials from './components/Testimonials';
import Contact from "./components/Contact";
import ProductHuntBadge from "./components/ProductHuntBadge";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Puppy Potty Pal - Simplifying Puppy Toilet Training</title>
        <meta name="description" content="Track, log, and predict your puppy's toilet times with ease. Join thousands of happy puppy parents!" />
        <meta name="keywords" content="puppy training, dog training, puppy toilet training, puppy potty training, dog care" />
      </Helmet>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Testimonials />
        <Contact />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
      <ProductHuntBadge />
    </>
  );
};

export default App;
