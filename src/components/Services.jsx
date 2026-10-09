import "./Services.css";

const services = [
  {
    title: "H-Beam Rolling",
    image: "/images/beam-rolling.jpg",
    icon: "/icons/hbeam-center.svg",
    description:
      "Precision rolling of H-beams and structural steel sections for curved steel structures and project requirements.",
  },
  {
    title: "Plate Rolling",
    image: "/images/tank-fabrication.jpg",
    icon: "/icons/plate-rolling.svg",
    description:
      "Steel plate rolling for cylindrical and curved components used in tanks and industrial fabrication.",
  },
  {
    title: "Cone Rolling",
    image: "/images/cone-fabrication.jpg",
    icon: "/icons/cone-rolling.svg",
    description:
      "Custom cone rolling and conical transition fabrication for industrial applications.",
  },
  {
    title: "Section Rolling",
    image: "/images/channel-rolling.jpg",
    icon: "/icons/rectangular-section.svg",
    description:
      "Rolling of channels, angles and other structural steel sections to meet project specifications.",
  },
  {
    title: "Pipe & Tube Rolling",
    image: "/images/rings.jpg",
    icon: "/icons/pipe-tube.svg",
    description:
      "Pipe and tube rolling for curved components used in industrial and structural applications.",
  },
  {
    title: "Steel Fabrication",
    image: "/images/workshop.jpg",
    icon: "/icons/transition.svg",
    description:
      "Steel fabrication, welding and assembly to support customer project requirements.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">

        <span className="section-tag">Our Services</span>

        <h2>Complete Steel Rolling & Fabrication Solutions</h2>

        <p className="section-description">
        Ming Fok Steel Rolling provides steel rolling and fabrication services for commercial, industrial and infrastructure
        projects across Malaysia.
        </p>

        <div className="services-grid">

          {services.map((service, index) => (

            <div className="service-card" key={index}>

          <img
            src={service.image}
            alt={`${service.title} services by Ming Fok Steel Rolling`}
            className="service-image"
          />

              <div className="service-content">

                <div className="icon-circle">

                <img
                  src={service.icon}
                  alt=""
                  aria-hidden="true"
                  className="service-icon"
                />

                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}