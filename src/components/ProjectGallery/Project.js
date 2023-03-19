import Col from "./Col";
import Card from "./Card";
import './style.css'

const Project = ({id, title, technologies, image, color, github, deployed, description}) => {


      return (
            <Col size="md-6 col-6">
              <Card heading={title}>
                <div className="imageContainer">
                    <img src={require(`${image}`)} alt="project" />
                </div> 
                <div className="description">
                    <p>{description}</p>
                    <p>{technologies}</p>
                </div>
       
                <div>
                    <button className="btn" onClick={() => (window.location.href = github)}> GitHub Repo </button>
                    <button className="btn" onClick={() => (window.location.href = deployed)}> Deployed App </button>
                </div>
              </Card>
            </Col>
      );
};


export default Project;