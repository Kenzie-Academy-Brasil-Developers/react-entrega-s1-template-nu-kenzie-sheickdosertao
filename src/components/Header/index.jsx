import Styles from "./style.module.css"
import  "../../Styles/Global.css"
export const Header = ( ) => {
    return (
        <header className={Styles.headerLogo}>
          <h1 className={Styles.img2}><span className={Styles.sp}>Nu</span>kenzie</h1>
        </header>
    )
}