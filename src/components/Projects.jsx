import React from 'react';

import image1 from '../assets/projects/image1.jpeg';
import image2 from '../assets/projects/image2.jpg';
import image3 from '../assets/projects/image3.jpg';
import image4 from '../assets/projects/image4.jpg';
import image5 from '../assets/projects/image5.png';

const projectImages = [image1, image2, image3, image4, image5];

const projects = [
  {
    title: 'Development of a web application for managing articles',
    description: 'Design and development of a web application for article management, allowing users to authenticate and manage articles.',
    tools: 'Tools used: Java EE, MySQL, Maven, JPA, Hibernate.',
  },
  {
    title: 'Development of a chat application',
    description: '',
    tools: 'Tools used: Spring Boot, Websockets, Thymeleaf, MongoDB.',
  },
  {
    title: 'Development of a desktop application for item management',
    description: 'Realization of an article management application which includes user management, supplier management, product management, customer management, order management and delivery management.',
    tools: 'Tools used: Java, Swing, MySQL.',
  },
  {
    title: 'Design and creation of a web application for managing consumable purchases',
    description: 'Purchase requester management, store management, supplier management, service delivery management, asset management and order management.',
    tools: 'Tools used: Java 17, Spring Boot, Maven, ReactJS, Tailwind CSS, Mockito, Postman, PostgreSQL.',
  },
  {
    title: 'Creation of a web application for employee management',
    description: 'User management, employee management, salary management, task management and leave management.',
    tools: 'Tools used: Java 17, Spring Boot, Maven, ReactJS, MySQL, Postman, Bootstrap, jQuery, JUnit.',
  },
];

const Projects = () => {
  return (
    <div className="my-20" data-aos="fade-up">
      <h1 className="text-center text-4xl mb-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-10 justify-items-center">
        {projects.map((project, index) => (
          <div key={index} className="p-6 shadow-lg hover:shadow-white hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 100}>
            <img src={projectImages[index]} alt={project.title} className="h-48 w-full object-contain mb-4" />
            <h2 className="text-xl font-bold mb-2 text-blue-900">{project.title}</h2>
            <p>{project.description}</p>
            <p className="font-semibold mt-2">{project.tools}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
