function RouteCard({ route }) {
  return (
    <div className="route-card">
      <h3>{route.title}</h3>

      <p><strong>Distance:</strong> {route.distance}</p>
      <p><strong>Duration:</strong> {route.duration}</p>
      <p><strong>Popular Operators:</strong> {route.operators}</p>
      <p><strong>Why this route?</strong> {route.reason}</p>
    </div>
  );
}

export default RouteCard;