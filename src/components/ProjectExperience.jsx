import "./ProjectExperience.css";

const projects = [
  {
    title: "KLIA Roof Truss",
    category: "Airport"
  },
  {
    title: "One Utama New Entrance",
    category: "Commercial"
  },
  {
    title: "Penang Second Bridge Toll",
    category: "Infrastructure"
  },
  {
    title: "Zoo Negara Panda House",
    category: "Public Facility"
  },
  {
    title: "Setia Eco Park Clubhouse",
    category: "Commercial"
  },
  {
    title: "Monorail of Hoist Cement Plants",
    category: "Industrial"
  },
  {
    title: "Factory Batu Arang",
    category: "Industrial"
  },
  {
    title: "Bukit Damansara Bungalow",
    category: "Residential"
  }
];

export default function ProjectExperience(){

return(

<section className="experience">

<div className="container">

<h2>Project Experience</h2>

<p>
Supporting commercial, industrial and infrastructure projects throughout Malaysia.
</p>

<div className="experience-grid">

{
projects.map((project,index)=>(

<div className="experience-card" key={index}>

<span>{project.category}</span>

<h3>{project.title}</h3>

</div>

))
}

</div>

</div>

</section>

)

}