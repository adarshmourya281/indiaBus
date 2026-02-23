function ServiceItem({ service }) {
  return (
    <div className="service-item">
      <div className="service-bar"></div>

      <div className="service-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </div>
  );
}

export default ServiceItem;