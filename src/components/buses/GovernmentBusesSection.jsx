import { useRef } from "react";
import BusCard from "./BusCard";

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
    const cardWidth = 300;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    if (
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - 5
    ) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-10">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 relative">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Government Buses
          </h2>

          <span className="text-[#ff7a00] font-medium cursor-pointer">
            View All →
          </span>
        </div>

        {/* Cards Wrapper */}
        <div className="relative overflow-hidden">

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
          >
            {buses.map((bus) => (
              <BusCard key={bus.id} bus={bus} />
            ))}
          </div>

          {/* Arrow (Desktop Only) */}
          <button
            onClick={handleScroll}
            className="hidden lg:flex absolute right-[-25px] top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-xl items-center justify-center text-xl text-[#ff7a00]"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default GovernmentBusesSection;