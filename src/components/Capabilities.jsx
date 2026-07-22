import "./Capabilities.css";

const featured = [
  {
    image: "/images/beam-rolling.jpg",
    title: "H-Beam Rolling",
  },
  {
    image: "/images/tank-fabrication.jpg",
    title: "Tank Fabrication",
  },
];

const smallCards = [
  {
    image: "/images/cone-fabrication.jpg",
    title: "Cone Rolling",
  },
  {
    image: "/images/perforated-plate.jpg",
    title: "Plate Processing",
  },
  {
    image: "/images/channel-rolling.jpg",
    title: "Channel Rolling",
  },
  {
    image: "/images/rings.jpg",
    title: "Steel Rings",
  },
];

export default function Capabilities() {
  return (
    <section className="capabilities" id="capabilities">
      <div className="container">

        <span className="section-tag">Capabilities</span>

        <h2>What We Manufacture</h2>

        <p className="section-description">
          Precision steel rolling and fabrication for commercial,
          industrial and infrastructure projects.
        </p>

        {/* Large Cards */}

        <div className="featured-grid">

          {featured.map((item, index) => (
            <div className="featured-card" key={index}>

              <img src={item.image} alt={item.title} />

              <div className="overlay">
                <h3>{item.title}</h3>
              </div>

            </div>
          ))}

        </div>

        {/* Small Cards */}

        <div className="small-grid">

          {smallCards.map((item, index) => (
            <div className="small-card" key={index}>

              <img src={item.image} alt={item.title} />

              <div className="overlay">
                <h3>{item.title}</h3>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}