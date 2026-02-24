function ServiceItem({ service }) {
  return (
    <div className="flex items-start gap-4">

      {/* Orange Bar */}
      <div className="w-1.5 h-12 bg-[#ff7a00] rounded-sm mt-1"></div>

      {/* Content */}
      <div>
        <h3 className="text-base md:text-lg font-semibold">
          {service.title}
        </h3>

        <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>

    </div>
  );
}

export default ServiceItem;