import styles from './Navigation.module.css'

const Navigation = () =>{
    return(
        <nav className={`container ${styles.navigation}`}>
        <div className="logo">
        <img src="./images/Logo.png" alt="Logo"></img>
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    )
}

export default Navigation