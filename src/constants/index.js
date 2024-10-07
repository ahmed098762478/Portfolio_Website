 import project1 from "../assets/ahmed.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am an aspiring full stack Java developer, eager to build my expertise in developing web applications. While I am still in the early stages of my journey, I have gained hands-on experience with front-end technologies like React and Angular, as well as back-end tools like Spring Boot, Java EE, and databases such as MySQL and PostgreSQL. I am committed to continuously learning and growing to deliver innovative and effective solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack Java developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Angular,Spring-Boot, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies and working with other people.`;

export const EXPERIENCES = [
  {
    period: "July 2024 - september 2024",
    role: "Full Stack Developer",
    company: "OCP",
    description: `Design and creation of a web application for managing consumable purchases.`,
    technologies: [ "Java 17", "Spring-Boot", "React.js", "Tailwind CSS", "POSTGRESQL",],
  },
  {
    period: "july 2023 - september 2023",
    role: "Frontend Developer",
    company: "TEMA CONCEPT",
    description: `creation of a web application for employee management.`,
    technologies: ["Java 17", "Spring Boot", "Tailwind CSS", "ReactJs", "mySQL"],
  },
   
];

export const PROJECTS = [
  {
    title: "Design and creation of a web application for managing consumable purchases.",
    image: project1,
    description:
      "A web application which contains  purchase requester management, store management, supplier management, service delivery management, asset management and order management. ",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "creation of a web application for employee management",
    image: project2,
    description:
      "An application for managing employees which contains  user management, employee management, salary management, task management and leave management. ",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Development of a desktop application for item management",
    image: project3,
    description:
      "Realization of an article management application which includes user management, supplier management, product management, customer management, order management and delivery management.",
    technologies: ["Java 17", "Swing", "Mysql"],
  },
  {
    title: "Development of a web application for managing articles",
    image: project4,
    description:
      "Design and development of a web application for article management, allowing users to authenticate and manage articles.",
    technologies: ["Java 17", "Java EE", "Mysql", "Maven", "Hibernate"],
  },

  {
    title: "development of a chat application",
    image: project4,
    description:
      "D",
    technologies: ["Java 17", "Thymeleaf", "Maven", "MongoDb"],
  },
];

export const CONTACT = {
  address: "MARAJ AL BAHRAIN K1 IMM 3 APPRT 2 SIDI-YAHYA-ZAIR 12150",
  phoneNo: "0636290053",
  email: "ahm.lahbabi555@gmail.com",
};
