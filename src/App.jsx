

const services = [
  {
    title: "Pipe & Tube Bending",
    icon: "/icons/Pipe&Tube.svg",
  },
  {
    title: "H-Beam Rolling",
    icon: "/icons/H-BeamRollingCenter.svg",
  },
  {
    title: "Structural Steel Rolling",
    icon: "/icons/H-BeamRollingFlange.svg",
  },
  {
    title: "Plate Rolling",
    icon: "/icons/platerolling1.svg",
  },
  {
    title: "Cone Rolling",
    icon: "/icons/ConeRolling.svg",
  },
  {
    title: "Custom Steel Solutions",
    icon: "/icons/MetalRoll2SShape.svg",
  },
  {
    title: "Structural Fabrication",
    icon: "/icons/Transition-Fabrication.svg",
  },
  {
    title: "Architectural Steel Works",
    icon: "/icons/Rectangular-Section-Rolling.svg",
  },
];

const projects = [
  "Asian Institute of Medicine, Science Technology, Kedah",
  "KLIA Roof Truss",
  "One Utama New Wing Entrance",
  "Setia Eco Pack ClubHouse",
  "Kasturi Walk Steel Structure",
  "Zoo Negara Panda House",
];

export default function App() {
  return (
    <div id="top" className="bg-[#07111F] text-white overflow-hidden" >

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-industrial.png"
            alt="Industrial Steel Rolling"
            className="w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* BLUE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/90 via-[#07111F]/40 to-transparent" />
        </div>

        {/* NAVBAR */}
        <header className=" fixed top-0 left-0 w-full z-50 bg-[#07111F]/80 backdrop-blur-md border-b border-white/10 ">

          <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

            {/* LOGO */}
            <div className="flex items-center gap-4">

              <img
                src="/images/logo-white.png"
                alt="Ming Fok Rolling"
                className="w-12 h-12 object-contain"
              />

              <div>
                <h2 className="text-lg md:text-xl font-bold tracking-wide">
                  MING FOK ROLLING
                </h2>

                <p className="text-[10px] md:text-xs text-gray-300">
                  202501014983 (1616398-A)
                </p>
              </div>
            </div>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-10 text-sm font-medium tracking-wide">

              <a href="#about" className="hover:text-sky-400 transition">
                ABOUT
              </a>

              <a href="#services" className="hover:text-sky-400 transition">
                SERVICES
              </a>

              <a href="#projects" className="hover:text-sky-400 transition">
                PROJECTS
              </a>

              <a href="#contact" className="hover:text-sky-400 transition">
                CONTACT
              </a>

            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden text-white text-3xl"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              ☰
            </button>

          </div>

          {/* MOBILE MENU */}
          <div
            id="mobile-menu"
            className="hidden lg:hidden bg-[#07111F]/95 backdrop-blur-xl border-t border-white/10"
          >

            <div className="flex flex-col px-6 py-6 gap-6 text-sm font-medium">

              <a href="#about" className="hover:text-sky-400 transition">
                ABOUT
              </a>

              <a href="#services" className="hover:text-sky-400 transition">
                SERVICES
              </a>

              <a href="#projects" className="hover:text-sky-400 transition">
                PROJECTS
              </a>

              <a href="#contact" className="hover:text-sky-400 transition">
                CONTACT
              </a>

            </div>

          </div>

        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center pt-24">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[0.35em] text-sky-400 text-sm mb-8">
              Precision Steel Engineering
            </p>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[0.95] mb-10 uppercase">

              Precision
              <br />

              Rolling.
              <br />

              Built To
              <br />

              Last.

            </h1>

            <p className="text-lg md:text-2xl text-gray-300 leading-8 md:leading-10 max-w-2xl mb-14">

              Specialized in steel rolling, structural bending
              and custom metal fabrication for industrial
              and infrastructure projects across Malaysia.

            </p>

            <div className="flex flex-wrap gap-6">

              <a
                href="#services"
                className="bg-sky-500 hover:bg-sky-400 transition-all duration-300 text-black px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg"
              >
                OUR SERVICES
              </a>

              <a
                href="#contact"
                className="border border-white/20 hover:border-sky-400 hover:text-sky-400 transition-all duration-300 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-semibold text-base md:text-lg"
              >
                CONTACT US
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-20">

            <div>

              <p className="uppercase tracking-[0.35em] text-sky-400 text-sm mb-8">
                About Us
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Skilled Hands.
                <br />
                Precision Steel.
              </h2>

            </div>

            <div className="space-y-8 text-lg leading-9 text-gray-300">

              <p>
                Ming Fok Rolling specializes in steel rolling,
                bending and fabrication for industrial and
                infrastructure projects across Malaysia.
              </p>

              <p>
                With extensive experience in universal beams,
                hollow sections, tubes and structural steel,
                we deliver precision workmanship for roof truss,
                reinforcement rings and custom steel solutions.
              </p>

              <p>
                Our portfolio includes Formula One Grand Stand,
                KLIA roof truss, MRT tunnel support beams,
                Penchala Tunnel and Bintulu Airport.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="mb-20">

            <p className="uppercase tracking-[0.35em] text-sky-400 text-sm mb-8">
              Our Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Industrial Steel
              <br />
              Engineering Solutions
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

            {services.map((service, index) => (

          <div 
          key={index} className="group border border-white/10 rounded-3xl p-8 bg-white/[0.02] hover:bg-sky-400/[0.04] hover:border-sky-400/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.18)] transition-all duration-300" > 
          <div className="flex justify-center mb-8"> 
            <img src={service.icon} alt={service.title} className=" w-20 h-20 object-contain opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.9)] " />
            </div> 
            <h3 className=" text-center text-base md:text-lg font-medium text-gray-200 transition-all duration-300 group-hover:text-sky-400 leading-7 "> {service.title} 
              </h3> 
          </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="mb-20">

            <p className="uppercase tracking-[0.35em] text-sky-400 text-sm mb-8">
              Major Projects
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Trusted Across
              <br />
              Malaysia Infrastructure
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {projects.map((project, index) => (

              <div
                key={index}
                className="group relative overflow-hidden rounded-[32px] aspect-[4/3]"
              >

                <img
                  src={`/images/project${index + 1}.png`}
                  alt={project}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">

                  <p className="text-2xl font-semibold">
                    {project}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */} 
      <section id="contact"> 
        <div className="max-w-7xl mx-auto px-6 py-24"> <div className="grid lg:grid-cols-2 gap-20"> {
        /* LEFT */} 
        <div> 
          <p className="uppercase tracking-[0.35em] text-sky-400 text-sm mb-8"> Contact Us </p> 
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-10"> Let’s Build <br /> Something Strong </h2> <p className="text-lg leading-9 text-gray-300 mb-12"> Contact us for steel rolling, bending and fabrication solutions for your next industrial project. </p> {
          /* CONTACT INFO */} 
          <div className="space-y-8"> <div> 
            <p className="text-sky-400 text-sm uppercase tracking-widest mb-2"> Contact Person </p> 
            <p className="text-2xl font-semibold"> Lee William </p> 
            <p className="text-gray-400 mt-2"> 016-316 3897 </p> </div> <div> 
              <p className="text-sky-400 text-sm uppercase tracking-widest mb-2"> Email </p> <a href="mailto:mingfokrolling@gmail.com" className="text-xl text-gray-300 break-all hover:text-sky-400 transition" > mingfokrolling@gmail.com </a> </div> </div> 
              {/* WHATSAPP BUTTON */} <a href="https://wa.me/60163163897" target="_blank" rel="noopener noreferrer" className=" inline-flex items-center gap-4 mt-12 bg-green-500 hover:bg-green-400 text-white px-8 py-5 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(34,197,94,0.3)] " > <img src="/images/whatsapp.png" alt="WhatsApp" className="w-7 h-7" /> WhatsApp Us </a> </div> 
              {/* RIGHT - FORM */} <div className="bg-white/[0.03] border border-white/10 rounded-[36px] p-8 md:p-12"> 
              <h3 className="text-3xl font-bold mb-10"> Send Inquiry </h3> 
              <form action="https://formsubmit.co/mingfokrolling@gmail.com" method="POST" className="space-y-6" >
                {/* NAME */} <input type="text" placeholder="Your Name" className=" w-full bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-500 focus:outline-none focus:border-sky-400 " /> 
                {/* COMPANY */} <input type="text" placeholder="Company Name" className=" w-full bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-500 focus:outline-none focus:border-sky-400 " /> 
                {/* PHONE */} <input type="text" placeholder="Phone Number" className=" w-full bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-500 focus:outline-none focus:border-sky-400 " /> 
                {/* MESSAGE */} <textarea rows="6" placeholder="Your Message" className=" w-full bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-500 focus:outline-none focus:border-sky-400 resize-none " /> 
                {/* BUTTON */} 
                <input type="hidden" name="_subject" value="New Inquiry From Website" /> <input type="hidden" name="_captcha" value="false" />
                <button type="submit" className=" w-full bg-sky-500 hover:bg-sky-400 text-black font-bold py-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] " > SEND MESSAGE </button> </form> </div> </div> {/* FOOTER */} <div className="border-t border-white/10 mt-24 pt-10 text-gray-500 text-sm"> © 2026 MING FOK ROLLING SDN BHD </div> </div> </section>
   
{/* SCROLL TO TOP BUTTON */}
<a
  href="#top"
  className="fixed bottom-6 right-6 z-50 bg-sky-500 hover:bg-sky-400 text-black w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
>
  ↑
</a>


    </div>
  );
}

