import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <div className="hero-text">

          <span className="hero-tag">
            STEEL ROLLING SPECIALIST
          </span>

          <h1>
            Precision Steel Rolling &
            <span> Fabrication Solutions</span>
          </h1>

          <p>
            Ming Fok Steel Rolling specializes in beam rolling, section
            rolling, plate rolling, cone rolling and custom steel fabrication
            for commercial, industrial and infrastructure projects throughout
            Malaysia.
          </p>

          <div className="hero-features">
  <span>✔ Beam Rolling</span>
  <span>✔ Plate Rolling</span>
  <span>✔ Section Rolling</span>
  <span>✔ Cone Rolling</span>
</div>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Request a Quote
            </a>

            <a href="#services" className="btn-secondary">
              Our Services
            </a>
          </div>


        </div>

      </div>
    </section>
  );
}

export default Hero;