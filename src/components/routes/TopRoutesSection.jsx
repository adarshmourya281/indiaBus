import RouteCard from "./RouteCard";
import "../../styles/routes/TopRoutesSection.css";

const routes = [
  {
    id: 1,
    title: "Delhi → Manali",
    distance: "≈550 km",
    duration: "12–14 hours",
    operators: "HRTC, Volvo, Himachal Roadways, Laxmi Holidays",
    reason: "Scenic Himalayan views, ideal for weekend getaways.",
  },
  {
    id: 2,
    title: "Mumbai → Pune",
    distance: "≈150 km",
    duration: "4–5 hours",
    operators: "MSRTC, Neeta Travels, Shivneri",
    reason: "Perfect for daily commuters and weekend travellers.",
  },
  {
    id: 3,
    title: "Bangalore → Chennai",
    distance: "≈350 km",
    duration: "6–7 hours",
    operators: "KSRTC, Parveen Travels, VRL",
    reason: "Business and leisure travellers frequently use this route.",
  },
  {
    id: 4,
    title: "Hyderabad → Vijayawada",
    distance: "≈270 km",
    duration: "5–6 hours",
    operators: "TSRTC, Orange Travels, Morning Star",
    reason: "Ideal for both family visits and business trips.",
  },
  {
    id: 5,
    title: "Ahmedabad → Udaipur",
    distance: "≈260 km",
    duration: "5–6 hours",
    operators: "GSRTC, Rajasthan Roadways, Jakhar Travels",
    reason: "Connects Gujarat to Rajasthan’s royal heritage city.",
  },
  {
    id: 6,
    title: "Kolkata → Digha",
    distance: "≈180 km",
    duration: "4–5 hours",
    operators: "SBSTC, Royal Cruiser",
    reason: "Quick escape to the beach from the city hustle.",
  },
  {
    id: 7,
    title: "Lucknow → Gorakhpur",
    distance: "≈270 km",
    duration: "6–7 hours",
    operators: "UPSRT, Royal Travels",
    reason: "Highly used by families, and working professional.",
  },
  {
    id: 8,
    title: "Chennai → Madurai",
    distance: "≈460 km",
    duration: "8–9 hours",
    operators: "TNSTC, SRM Travels,KPN",
    reason: "Popular pilgrimage and tourist route in Tamil Nadu.",
  },
];

function TopRoutesSection() {
  return (
    <section className="routes-section">
      <div className="gov-container">
        <h2 className="routes-title">Top Bus Routes in India</h2>

        <p className="routes-description">
          Travel across India with comfort and convenience on some of the most
          popular and frequently booked bus routes. From metro cities to hill
          stations and pilgrimage sites, here are the top routes Indian
          travelers love:
        </p>

        <div className="routes-grid">
          {routes.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopRoutesSection;