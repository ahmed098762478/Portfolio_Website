import { FaCode, FaProjectDiagram, FaLightbulb } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="my-20">
      <h1 className="text-center text-4xl mb-12" data-aos="fade-up" data-aos-duration="1000">Skills</h1>

      <div className="flex flex-wrap justify-center space-x-10">
        
        {}
        <div
          className="p-6 shadow-lg hover:shadow-white hover:scale-105 transition-all duration-300 mb-6 w-full md:w-1/3"
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-delay="100"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-900 flex items-center justify-center">
            <FaCode className="mr-2" /> Web Development
          </h2>
          <div>
            <p className="font-semibold">Languages:</p>
            <p>Java 17, HTML, CSS, JavaScript</p>

            <p className="font-semibold mt-4">Libraries and Frameworks:</p>
            <p>React, Angular, Spring Boot, Bootstrap, Tailwind CSS, Ajax, jQuery, Swing</p>

            <p className="font-semibold mt-4">Databases:</p>
            <p>MySQL, Oracle, SQL Server, PostgreSQL, PL/SQL, TSQL, MongoDB, Firebase</p>

            <p className="font-semibold mt-4">IDE:</p>
            <p>IntelliJ, VSCode, Eclipse, NetBeans</p>

          </div>
        </div>

        {}
        <div
          className="p-6 shadow-lg hover:shadow-white hover:scale-105 transition-all duration-300 mb-6 w-full md:w-1/3"
          data-aos="fade-up"  
          data-aos-duration="1000" 
          data-aos-delay="300" 
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-900 flex items-center justify-center">
            <FaProjectDiagram className="mr-2" /> Project Design and Methodology
          </h2>
          <div>
            <p className="font-semibold">Needs Analysis:</p>
            <p>Collection and writing of specifications</p>

            <p className="font-semibold mt-4">Modeling:</p>
            <p>Merise, UML</p>

            <p className="font-semibold mt-4">Agile Methodology:</p>
            <p>Scrum (management of sprints, planning, retrospectives)</p>

            <p className="font-semibold mt-4">Project Management :</p>
            <p className="font-semibold">Tools:</p>
            <p>MSProject, Jira</p>
          </div>
        </div>

        {}
        <div
          className="p-6 shadow-lg hover:shadow-white hover:scale-105 transition-all duration-300 mb-6 w-full md:w-1/3"
          data-aos="fade-up"
          data-aos-duration="1000" 
          data-aos-delay="500" 
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-900 flex items-center justify-center">
            <FaLightbulb className="mr-2" /> Soft Skills
          </h2>
          <div>
            <p>Creative</p>
            <p>Oral presentation</p>
            <p>Communication</p>
            <p>Critical thinking</p>
            <p>Autonomous</p>
            <p>Rigorous</p>
            <p>Resilience</p>
          </div>
        </div>
        <div
          className="p-6 shadow-lg hover:shadow-white hover:scale-105 transition-all duration-300 mb-6 w-full md:w-1/3"
          data-aos="fade-up"
          data-aos-duration="1000" 
          data-aos-delay="500" 
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-900 flex items-center justify-center">
            <FaLightbulb className="mr-2" /> DEVOPS
          </h2>
        
          <div>
            <p>Git</p>
            <p>Github</p>
            <p>JUnit</p>
            <p>Mockito</p>
            <p>Postman</p>
            <p>Docker</p>
            <p>Kubernetes</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
