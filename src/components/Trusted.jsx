import "./Trusted.css";

const projects = [
  "KLIA",
  "Penang Second Bridge",
  "One Utama",
  "Zoo Negara",
  "Setia Eco Park",
  "Batu Gajah Conference Hall"
];

export default function Trusted() {

    return (

        <section className="trusted">

            <div className="container">

                <p className="small-title">
                    TRUSTED IN MAJOR PROJECTS
                </p>

                <div className="trusted-grid">

                    {projects.map((item,index)=>(

                        <div className="trusted-item" key={index}>

                            {item}

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}