import "../../styles/buses/BusCard.css";

function BusCard({ bus }) {
  return (
    <div className="bus-card">
      <img src={bus.image} alt={bus.title} />

      <div className="bus-overlay">
        <h3>{bus.title}</h3>
        <p>{bus.subtitle}</p>
      </div>
    </div>
  );
}

export default BusCard;