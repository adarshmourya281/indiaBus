function RouteCard({ route }) {
  return (
    <div
      className="
        bg-white
        border-2
        border-[#ff7a00]
        rounded-2xl
        p-6
        text-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <h3 className="text-lg md:text-xl font-semibold mb-4">
        {route.title}
      </h3>

      <p className="text-sm text-gray-700 mb-2">
        <span className="font-semibold">Distance:</span> {route.distance}
      </p>

      <p className="text-sm text-gray-700 mb-2">
        <span className="font-semibold">Duration:</span> {route.duration}
      </p>

      <p className="text-sm text-gray-700 mb-2">
        <span className="font-semibold">Popular Operators:</span> {route.operators}
      </p>

      <p className="text-sm text-gray-700">
        <span className="font-semibold">Why this route?</span> {route.reason}
      </p>
    </div>
  );
}

export default RouteCard;