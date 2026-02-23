import ServiceItem from "./ServiceItem";
import "../../styles/services/ServicesSection.css";

const services = [
  {
    id: 1,
    title: "Intercity and Interstate Travel",
    description:
      "Book government (e.g., KSRTC, APSRTC, MSRTC) and private buses (e.g., SRS, VRL, Orange, Neeta) with ease.",
  },
  {
    id: 2,
    title: "Online Ticket Booking",
    description:
      "Instant ticket booking for AC, Non-AC, Sleeper, Seater, Volvo, and Multi-Axle buses.",
  },
  {
    id: 3,
    title: "Pick-Up & Drop Point Customization",
    description:
      "Choose pick-up and drop-off points based on your location preferences – including popular bus stops and landmarks.",
  },
  {
    id: 4,
    title: "Mobile App Integration",
    description:
      "Download our Android/iOS app to book and manage your tickets on the go, track buses, and get notifications.",
  },
  {
    id: 5,
    title: "Live Bus Tracking",
    description:
      "Track your bus in real time – get alerts for bus location, delay updates, and estimated arrival time.",
  },
  {
    id: 6,
    title: "Group & Corporate Bookings",
    description:
      "Customized travel solutions for families, corporate outings, pilgrimages, and student groups.",
  },
];

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="gov-container">
        <h2 className="services-title">Bus Booking Services We Offer</h2>

        <div className="services-list">
          {services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;