import Styles from "./style.module.css"
import  "../../Styles/Global.css"
export const Header = ( ) => {
    return (
        <header className={Styles.Logotipo}>
          <h1 className={Styles.imagem2}><span className={Styles.sp}>Nu</span>kenzie</h1>
        </header>
    )
}