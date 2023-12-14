import "../App.css";
import "../Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Me } from "./home";
function ProjectItem(props){
    return (
        <>
            <div className="wrapper">
                <div className="image">
                    <img src={props.imageSource} alt="" />
                </div>
                <div className="text">
                    <h2>
                        <b>{props.projectName}</b>
                    </h2>
                    <p>
                        {props.summary}
                    </p>
                    <p style={{color:"#354765"}}><b>Tech Stack</b></p>
                    <FontAwesomeIcon icon="fa-brands fa-html5" size="2xl" />
                </div>
                <a href={props.link} target="_blank" rel="noreferrer">
                    <button>Live Demo ↗</button>
                </a>
            </div>
        </>
    );
}
let projects = {
    project1:{
        imageSource:"todoapp.png",
        projectName:"TodoList App",
        summary:"A simple app to create and keep track of things to do.",
        link:"https://khanalankitt.github.io/todoapp",
        skillStack:["html","css","js","react"]
    },
    project2:{
        imageSource:"game.png",
        projectName:"Game",
        summary:"A simple rock paper scissors game to play when bored.",
        link:"https://khanalankitt.github.io/game",
        skillStack:["html","css","js"]
    },
    project3:{
        imageSource:"smokefree.png",
        projectName:"Smokefree Teen",
        summary:"A website to educate teenagers about effects of smoking.",
        link:"https://khanalankitt.github.io/Smokefree",
        skillStack:["html","css","js"]
    },
    project4:{
        imageSource:"chef.png",
        projectName:"Chef Website",
        summary:"A website showcasing the skills of a chef.",
        link:"https://khanalankitt.github.io/Chef",
        skillStack:["html","css","js"]

    },
    project5:{
        imageSource:"portfolio.png",
        projectName:"My first Portfolio",
        summary:"The first portfolio that I aired for other people to see.",
        link:"https://khanalankitt.github.io/Portfolio",
        skillStack:["html","css","js"]

    },
    project6:{
        imageSource:"reactPortfolio.png",
        projectName:"My first React Portfolio",
        summary:"The first portfolio that I created using React JS.",
        link:"https://ankitkhanal.netlify.app",
        skillStack:["html","css","js","react"]
    }
}
function Projects(){
    return(
        <>
        <Me 
            header="My Projects"
            desc="Intro about projects goes here. Need help with your project? Book a free 
            session with me to discuss your specific project requirements and how I can help 
            you."
        />
        <div className="projects-container">
            <ProjectItem
                imageSource={projects.project1.imageSource}
                projectName={projects.project1.projectName}
                summary={projects.project1.summary}
                link={projects.project1.link}
            />
            <ProjectItem
                imageSource={projects.project2.imageSource}
                projectName={projects.project2.projectName}
                summary={projects.project2.summary}
                link={projects.project2.link}
            />
            <ProjectItem
                imageSource={projects.project3.imageSource}
                projectName={projects.project3.projectName}
                summary={projects.project3.summary}
                link={projects.project3.link}
            />
            <ProjectItem
                imageSource={projects.project4.imageSource}
                projectName={projects.project4.projectName}
                summary={projects.project4.summary}
                link={projects.project4.link}
            />
            <ProjectItem
                imageSource={projects.project5.imageSource}
                projectName={projects.project5.projectName}
                summary={projects.project5.summary}
                link={projects.project5.link}
            />
            <ProjectItem
                imageSource={projects.project6.imageSource}
                projectName={projects.project6.projectName}
                summary={projects.project6.summary}
                link={projects.project6.link}
            />
            
        </div>
        </>
    );
}
export default Projects;