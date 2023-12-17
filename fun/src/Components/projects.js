    import "../App.css";
    import "../Projects.css";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faHtml5, faCss3Alt, faJs ,faReact} from "@fortawesome/free-brands-svg-icons";
    import { Me } from "./home";
    import { useEffect} from "react";
    import { useDarkMode } from '../DarkModeContext'; // Import useDarkMode hook
    function printStack(skillStack) {
        const iconMap = {
        html: faHtml5,
        css: faCss3Alt,
        js: faJs,
        react:faReact
        };
        return skillStack.map((skill, index) => (
        <FontAwesomeIcon key={index} icon={iconMap[skill]} size="2x" style={{marginRight:"10px"}} />
        ));
    }
    function ProjectItem(props){
        const { isDarkMode } = useDarkMode();
        return (
            <>
                <div className={`wrapper ${isDarkMode ? 'dark-mode' : ''}`}>
                    <div className="image">
                        <img src={props.imageSource} alt="" />
                    </div>
                    <div className="text">
                        <h2 className="projectName">
                            <b>{props.projectName}</b>
                        </h2>
                        <p>
                            {props.summary}
                        </p>
                        <p style={{color:"#354765"}}><b>Tech Stack</b></p>
                        {printStack(props.skillStack)}

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
            skillStack:["html","css","js"],
        },
        project2:{
            imageSource:"game.png",
            projectName:"Game",
            summary:"A simple rock paper scissors game to play when bored.",
            link:"https://khanalankitt.github.io/game",
            skillStack:["html","css","js"],
        },
        project3:{
            imageSource:"smokefree.png",
            projectName:"Smokefree Teen",
            summary:"A website to educate teenagers about effects of smoking.",
            link:"https://khanalankitt.github.io/Smokefree",
            skillStack:["html","css","js"],
        },
        project4:{
            imageSource:"chef.png",
            projectName:"Chef Website",
            summary:"A website showcasing the skills of a chef.",
            link:"https://khanalankitt.github.io/Chef",
            skillStack:["html","css"],

        },
        project5:{
            imageSource:"portfolio.png",
            projectName:"My first Portfolio",
            summary:"The first portfolio that I aired for other people to see.",
            link:"https://khanalankitt.github.io/Portfolio",
            skillStack:["html","css"],

        },
        project6:{
            imageSource:"reactPortfolio.png",
            projectName:"My first React Portfolio",
            summary:"The first portfolio that I created using React JS.",
            link:"https://ankitkhanal.netlify.app",
            skillStack:["html","css","js","react"],
        }
    }
    function Projects(){
        const { isDarkMode } = useDarkMode();
        useEffect(() => {
            window.scrollTo(0, 0); 
        }, []);
        return(
            <>
            <Me 
                header="My Projects"
                desc="Intro about projects goes here. Need help with your project? Book a free 
                session with me to discuss your specific project requirements and how I can help 
                you."
            />
            <div className={`projects-container ${isDarkMode ? 'dark-mode' : ''}`}>
                {Object.values(projects).map((project, index) => (
                <ProjectItem key={index} {...project} />
                ))}   
            </div>
            </>
        );
    }
    export default Projects;