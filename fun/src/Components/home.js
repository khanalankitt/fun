import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import '../App.css';
function Item(props){
    return(
        <>
            <div className="item">
                <div className="item-image">
                    <img src={props.imagesource} alt="" />
                </div>
                <div className="item-text">
                    <h3>{props.title}</h3><br />
                    <p>{props.description}</p><br />
                    <a href={props.link} target='_blank' rel="noreferrer" style={{textDecorationLine:"none",color:"cornflowerblue"}}>
                        <p style={{color:"cornflowerblue",cursor:"pointer",width:"80px"}}>Live Demo</p>
                    </a>
                </div>
            </div>
        </>
    );
}
let items={
    item1:{
        title:"TodoList App",
        description:"A simple app to create and keep track of things to do.",
        imagesource:"todoapp.png",
        link:"https://khanalankitt.github.io/todoapp"
    },
    item2:{
        title:"Game",
        description:"A simple rock paper scissors game to play when bored.",
        imagesource:"game.png",
        link:"https://khanalankitt.github.io/game"
    },
    item3:{
        title:"Smokefree Teen",
        description:"A website to educate teenagers about effects of smoking.",
        imagesource:"smokefree.png",
        link:"https://khanalankitt.github.io/Smokefree"

    }

}
export function Me(props){
    return(
        <>
        <div className="me">
            <div className="image">
                <img src="me.png" alt="" />
            </div>
            <div className="aboutme">
                <h1>{props.header}</h1>
                <p>
                   {props.desc} 
                </p>
                <button>View Resume →</button>
            </div>
        </div>
        </>
    );
}
function Home(){
        const [text,setText] = useState("");
        function handleMouseover(param){
            setText(param);
        }
    return(
        <>
            <Me 
                header="Ankit Khanal" 
                desc="I'm thrilled to introduce myself as an aspiring computer science
                    student with a passion for web development. I believe in the power
                    of technology to transform the world, and 
                    I'm dedicated to honing my skills to make that impact."
            />
            <div className="home-projects">
                <div className="intro">
                    <h1>Featured Projects</h1>
                    <p>Brief intro goes here. My main experience lies in building websites,
                        web apps and portfolios.I am currently working in personal projects.
                    </p>
                </div>
                <div className="items">
                    <Item title={items.item1.title} description={items.item1.description} imagesource={items.item1.imagesource} link={items.item1.link}/>
                    <Item title={items.item2.title} description={items.item2.description} imagesource={items.item2.imagesource} link={items.item2.link}/>
                    <Item title={items.item3.title} description={items.item3.description} imagesource={items.item3.imagesource} link={items.item3.link}/>
                </div>
                <Link to="/projects">
                    <button>More Projects →</button>
                </Link>
            </div>
            <div className="skills">
                <br />
                <h1>Skills</h1>
                <marquee behavior="alternate">
                    <FontAwesomeIcon className="skills-icon icon1" style={{color: "#dd4b25",}} onMouseOver={() => handleMouseover("HTML5")} icon="fa-brands fa-html5" />
                    <FontAwesomeIcon className="skills-icon icon2" style={{color: "#2862e9",}} onMouseOver={() => handleMouseover("CSS3")} icon="fa-brands fa-css3-alt" />
                    <FontAwesomeIcon className="skills-icon icon3" style={{color: "d0de0d",}} onMouseOver={() => handleMouseover("JAVASCRIPT")} icon="fa-brands fa-js" />
                    <FontAwesomeIcon className="skills-icon icon4" spin style={{color: "#5ed3f3",}} onMouseOver={() => handleMouseover("ReactJS")} icon="fa-brands fa-react" />
                    <FontAwesomeIcon className="skills-icon icon5" style={{color: "#c76494",}} onMouseOver={() => handleMouseover("SASS")} icon="fa-brands fa-sass" />
                </marquee>
                <span className="span">
                    {text}
                </span>
            </div>
        </>
    );
}
export default Home;