import "../App.css";
import "../Projects.css";
import { Me } from "./home";
import { useEffect } from "react";
// import { useDarkMode } from '../DarkModeContext'; // Import useDarkMode hook
function Contact(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        
        <>
            <Me
                header="Get In Touch"
                desc="I'm open to collaborations, partnerships, or just a friendly conversation.
                 Don't hesitate to reach out—I look forward to connecting with you!"
            />
            <div className="form-container">
                <h1>Contact Form</h1>
                <form method="GET">
                    <input type="text" placeholder="Name" name="name" required/>
                    <input type="email" placeholder="Email" name="email" required/><br />
                    <textarea placeholder="Enter your message"
                        name="textarea" id="textarea" cols="86" rows="10" required
                    ></textarea><br />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </>
    );
}
export default Contact;