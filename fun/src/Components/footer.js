import { useDarkMode } from '../DarkModeContext'; // Import useDarkMode hook
export default function Footer(){
    const { isDarkMode } = useDarkMode();
    return(
        <footer className={`${isDarkMode ? 'dark-mode' : ''}`} style={styles}>Copyright © Ankit Khanal 2023/24</footer>
    );
}
let styles={
    height:"40px",
    width:"100% ",
    margin:"auto",
    textAlign:"center", 
    padding:"5px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
}