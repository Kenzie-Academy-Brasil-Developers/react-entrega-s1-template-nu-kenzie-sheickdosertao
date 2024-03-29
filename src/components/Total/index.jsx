import Styles from "./style.module.css"

export const Total = () => {
    return (
        <div className={Styles.div3} id="total">
            <h2 className={Styles.h22}>Valor total:</h2>
            <p className={Styles.pp}>R$ 00,00</p>
            <p className={Styles.pp2}>O valor se refere ao saldo</p>
        </div>
    )
}