    import { useDarkMode } from '../DarkModeContext'; 
    import { Outlet, Link } from "react-router-dom";
    import '../App.css';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { fab } from '@fortawesome/free-brands-svg-icons'
    import { fas } from '@fortawesome/free-solid-svg-icons';  
    library.add(fas,fab);
    function toggle(){
        let aside = document.querySelector(".aside");
        if(aside.classList.contains("toggleleft")){
            aside.classList.remove('toggleleft');
            aside.classList.add('toggleright');
        }else{
            aside.classList.remove('toggleright');
            aside.classList.add('toggleleft');
        }
    }
    function NavBar(){
        const { toggleDarkMode } = useDarkMode(); 
        return(
            <>
                <nav>
                    <ul className='left'>
                        <FontAwesomeIcon className="bars" onClick={toggle} icon="fa-solid fa-bars" />
                        <FontAwesomeIcon className="mode" onClick={toggleDarkMode} icon="fa-solid fa-circle-half-stroke" />
                    </ul>
                    <ul className='middle'>
                        <a href="https://www.facebook.com/khanalankitt" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="fb" icon="fa-brands fa-facebook" />
                        </a>
                        <a href="https://www.instagram.com/akhanal749/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="insta" icon="fa-brands fa-instagram" />
                        </a>
                        <a href="https://www.github.com/khanalankitt" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="github" icon="fa-brands fa-github" />
                        </a>
                    </ul>
                    <Link to="/contact">
                        <button className='right'>Hire Me</button>
                    </Link>
                </nav>
                <SideBar/>
            </>
        );
    }

    function SideBar(){
        return(
            <>
                <aside className='aside'>
                    <ul>
                    <Link to="/">
                        <li>
                            <FontAwesomeIcon  className='sideicon icon-about' icon="fa-solid fa-user" /><br />
                            Home
                        </li>
                    </Link>
                    <Link to="/projects">
                        <li>
                            <FontAwesomeIcon className='sideicon icon-projects' icon="fa-solid fa-briefcase" /><br />
                            Projects
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li>
                            <FontAwesomeIcon className='sideicon icon-contact' icon="fa-solid fa-comment-dots" /><br />
                            Contact
                        </li>
                    </Link>
                        <li className='li-x' onClick={toggle}>
                            <p className='x'>x</p>
                        </li>   
                    </ul>
                </aside>
                <Outlet />
            </>
        );
    }
    export default NavBar;