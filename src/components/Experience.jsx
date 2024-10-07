const Experience = () => {
    return (
      <div className="my-20" data-aos="fade-up">
        <h1 className="text-center text-4xl mb-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          Experience
        </h1>
  
        <div className="space-y-10">
          {}
          <div className="p-6 shadow-lg hover:shadow-white hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <h2 className="text-xl font-bold mb-2 text-blue-400">PFA Internship in the Purchasing Department</h2>
            <p className="font-semibold">From July 2024 to August 2024 | OCP Khouribga</p>
            <p className="mt-2">Design and creation of a web application for managing consumable purchases:</p>
            <ul className="list-disc ml-5">
              <li>Modules: purchase requester management, store management, supplier management, service delivery management, asset management, and order management.</li>
            </ul>
            <p className="mt-2 font-semibold">Missions:</p>
            <ul className="list-disc ml-5">
              <li>Observation of business processes within the purchasing department.</li>
              <li>Meeting with the project manager to understand the purchasing process.</li>
              <li>Writing of specifications and project management using the agile method.</li>
              <li>Creation and development of the various screens.</li>
              <li>Carrying out unit, functional and integration tests.</li>
            </ul>
            <p className="mt-2 font-semibold">Technical environment:</p>
            <p>Java 17, Spring Boot, Maven, Reactjs, Tailwind CSS, Mockito, Postman, PostgreSQL</p>
          </div>
  
          {}
          <div className="p-6 shadow-lg hover:shadow-white hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <h2 className="text-xl font-bold mb-2 text-blue-400">Summer Internship in Study and Development</h2>
            <p className="font-semibold">From July 2023 to September 2023 | TEMA CONCEPT Témara</p>
            <p className="mt-2">Creation of a web application for employee management:</p>
            <ul className="list-disc ml-5">
              <li>Modules: user management, employee management, salary management, task management, and leave management.</li>
            </ul>
            <p className="mt-2 font-semibold">Missions:</p>
            <ul className="list-disc ml-5">
              <li>Needs study and development of specifications.</li>
              <li>General and detailed design of the project.</li>
              <li>Validation of functional specifications by the project manager.</li>
              <li>Development of different screens.</li>
              <li>Performance of unit, functional and integration tests.</li>
            </ul>
            <p className="mt-2 font-semibold">Technical environment:</p>
            <p>Java 17, Spring Boot, Maven, Reactjs, MySQL, Postman, Bootstrap, jQuery, JUnit</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;
  