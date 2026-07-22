import about from "../assets/images/about.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <img
              src={about}
              alt="Steel Rolling"
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div>

            <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
              About Ming Fok
            </span>

            <h2 className="text-5xl font-black text-slate-800 mt-4 leading-tight">
              Precision Steel Rolling &
              <br />
              Fabrication Solutions
            </h2>

            <p className="mt-8 text-gray-600 leading-8 text-lg">

              Ming Fok Rolling Sdn Bhd specializes in steel rolling,
              bending, shearing and fabrication for contractors,
              builders and industrial clients throughout Malaysia.

            </p>

            <p className="mt-6 text-gray-600 leading-8">

              Our capabilities include universal beams,
              hollow sections, pipes, channels,
              flat bars, plates and custom fabricated
              steel components for commercial,
              infrastructure and industrial projects.

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}