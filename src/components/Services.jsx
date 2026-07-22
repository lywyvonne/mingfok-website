import "./Services.css";

const services = [
    {
      title: "H-Beam Rolling",
      image: "/images/beam-rolling.jpg",
      icon: "/icons/hbeam-center.svg",
      description:
        "Precision rolling of H-Beams and structural steel sections.",
    },
    {
      title: "Plate Rolling",
      image: "/images/tank-fabrication.jpg",
      icon: "/icons/plate-rolling.svg",
      description:
        "Steel plate rolling for tanks and pressure vessels.",
    },
    {
      title: "Cone Rolling",
      image: "/images/cone-fabrication.jpg",
      icon: "/icons/cone-rolling.svg",
      description:
        "Custom cone rolling and transition fabrication.",
    },
    {
      title: "Section Rolling",
      image: "/images/channel-rolling.jpg",
      icon: "/icons/rectangular-section.svg",
      description:
        "Rolling channels, angles and structural sections.",
    },
    {
      title: "Pipe & Tube Rolling",
      image: "/images/rings.jpg",
      icon: "/icons/pipe-tube.svg",
      description:
        "Pipe and tube rolling for industrial applications.",
    },
    {
      title: "Steel Fabrication",
      image: "/images/workshop.jpg",
      icon: "/icons/transition.svg",
      description:
        "Complete fabrication, welding and assembly services.",
    },
  ];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">

        <span className="section-tag">Our Services</span>

        <h2>Complete Steel Rolling & Fabrication Solutions</h2>

        <p className="section-description">
          Delivering precision steel rolling and fabrication services
          for commercial, industrial and infrastructure projects.
        </p>

        <div className="services-grid">

          {services.map((service, index) => (

            <div className="service-card" key={index}>

              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />

              <div className="service-content">

                <div className="icon-circle">

                  <img
                    src={service.icon}
                    alt={service.title}
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