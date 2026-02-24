function ServiceItem({ service }) {
  return (
    <div className="flex items-start gap-4">

      <div className="w-1.5 h-10 bg-[#ff7a00] rounded-sm mt-1"></div>

      <div>
        <h3 className="text-[18px] font-semibold">
          {service.title}
        </h3>

        <p className="mt-1 text-[15px] text-gray-600 leading-snug">
          {service.description}
        </p>
      </div>

    </div>
  );
}
export default ServiceItem;