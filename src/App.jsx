import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/hero/HeroSection";
import DiscountOffersSection from "./components/offers/DiscountOffersSection";
import GovernmentBusesSection from "./components/buses/GovernmentBusesSection";
import ServicesSection from "./components/services/ServicesSection";
import TopRoutesSection from "./components/routes/TopRoutesSection";
import InfoSection from "./components/info/InfoSection";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DiscountOffersSection />
      <GovernmentBusesSection />
      <ServicesSection />
      <TopRoutesSection />
      <InfoSection />
      <Footer/>
    </>
  );
}

export default App;
