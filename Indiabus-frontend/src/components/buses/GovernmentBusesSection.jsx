import { useRef } from "react";
import BusCard from "./BusCard";
import "../../styles/buses/GovernmentBusesSection.css";

const buses = [
  {
    id: 1,
    title: "TGSRTC",
    subtitle: "Telangana State Road Transport Corporation",
    image: "/buses/tgsrtc.png",
  },
  {
    id: 2,
    title: "APSRTC",
    subtitle: "Andhra Pradesh State Road Transport Corporation",
    image: "/buses/apsrtc.png",
  },
  {
    id: 3,
    title: "GSRTC",
    subtitle: "Gujarat State Road Transport Corporation",
    image: "/buses/gsrtc.png",
  },
  {
    id: 4,
    title: "Kerala RTC",
    subtitle: "Kerala Road Transport Corporation",
    image: "/buses/kerala.png",
  },
];

function GovernmentBusesSection() {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const container = scrollRef.current;

    const cardWidth = 348;   // your card width
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    // If reached end → go back to start
    if (
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - 5
    ) {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="gov-section">
      <div className="gov-container">
        <div className="gov-header">
          <h2>Government Buses</h2>
          <span className="view-all">
            View All <span className="arrow-text">→</span>
          </span>
        </div>

        <div className="gov-cards-wrapper">
          <div className="gov-cards" ref={scrollRef}>
            {buses.map((bus) => (
              <BusCard key={bus.id} bus={bus} />
            ))}
          </div>

          <button className="slider-arrow" onClick={handleScroll}>
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default GovernmentBusesSection;