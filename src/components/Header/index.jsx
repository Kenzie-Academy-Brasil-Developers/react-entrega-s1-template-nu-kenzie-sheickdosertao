import Styles from "./style.module.css"
import  "../../Styles/Global.css"
export const Header = ( ) => {
    return (
        <header className={Styles.headerLogo}>
            <img className={Styles.img2} src="../../../src/assets/img/Nu Kenzie.png" alt="logo" />
        </header>
    )
}