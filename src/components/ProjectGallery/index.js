import { motion } from "framer-motion";
import ProjectsJSON from "./projects.json";
import Project from "./Project";
import Container from "./Container";
import Row from "./Row";

const ProjectGallery = () => {
  const ProjectList = () =>
    ProjectsJSON.map((project, i) => (
      <Project
        key={i}
        id={project.id}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        description={project.description}
      />
    ));

  return (
    <div>
      <div>
            <h3 className="pageTitle">Project Gallery</h3>
            <p className="pageDescription">Sample of my Projects</p>
      </div>
      <Container>
          <Row>
            <motion.div
              className="row"
              initial={{ y: "10vw", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <ProjectList />
            </motion.div>
          </Row>
      </Container>
    </div>

  );
};

export default ProjectGallery;
