import photo from "../../../../assets/Green.png"

interface JobCardProps {
    img:string,
    title: string;
    company: string;
    location: string;
    description: string;
    tags: string[];
  }

const JobListings: JobCardProps[] = [
    {
      img:photo,
      title: "2D Modelling",
      company: "GreenMouse",
      location: "Remote",
      description:
        "We are seeking a highly skilled and creative 3D Artist to join our dynamic team. The ideal candidate will excel in producing high-quality 3D assets and animations for [insert specific industry, e.g., gaming, film, XR experiences, architecture]...",
      tags: ["Full-Time", "Contract", "Freelancer"],
    },
    {
      img:photo,
      title: "2D & 3D Modelling And Rendering",
      company: "GreenMouse",
      location: "Remote",
      description:
        "We are seeking a highly skilled and creative 3D Artist to join our dynamic team. The ideal candidate will excel in producing high-quality 3D assets and animations for [insert specific industry, e.g., gaming, film, XR experiences, architecture]...",
      tags: ["Full-Time", "Contract", "Freelancer"],
    },
    {
      img:photo,
      title: "2D & 3D Modelling And Rendering",
      company: "GreenMouse",
      location: "Remote",
      description:
        "We are seeking a highly skilled and creative 3D Artist to join our dynamic team. The ideal candidate will excel in producing high-quality 3D assets and animations for [insert specific industry, e.g., gaming, film, XR experiences, architecture]...",
      tags: ["Full-Time", "Contract", "Freelancer"],
    },
    {
      img:photo,
      title: "2D & 3D Modelling And Rendering",
      company: "GreenMouse",
      location: "Remote",
      description:
        "We are seeking a highly skilled and creative 3D Artist to join our dynamic team. The ideal candidate will excel in producing high-quality 3D assets and animations for [insert specific industry, e.g., gaming, film, XR experiences, architecture]...",
      tags: ["Full-Time", "Contract", "Freelancer"],
    },
    {
      img:photo,
      title: "2D & 3D Modelling And Rendering",
      company: "GreenMouse",
      location: "Remote",
      description:
        "We are seeking a highly skilled and creative 3D Artist to join our dynamic team. The ideal candidate will excel in producing high-quality 3D assets and animations for [insert specific industry, e.g., gaming, film, XR experiences, architecture]...",
      tags: ["Full-Time", "Contract", "Freelancer"],
    },
  ];

  export default JobListings;