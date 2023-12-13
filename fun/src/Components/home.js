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
                    <a href={props.link} target='_blank' style={{textDecorationLine:"none",color:"cornflowerblue"}}>
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
function Home(){
    return(
        <>
            <div className="me">
                <div className="image">
                    <img src="me.png" alt="" />
                </div>
                <div className="aboutme">
                    <h1>Ankit Khanal</h1>
                    <p>I'm thrilled to introduce myself as an aspiring computer science
                        student with a passion for web development. I believe in the power
                        of technology to transform the world, and 
                        I'm dedicated to honing my skills to make that impact.
                        
                    </p>
                    <button>View Resume →</button>
                </div>
            </div>
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
                <button>More Projects →</button>
            </div>
            <div className="skills">

            </div>
        </>
    );
}
export default Home;