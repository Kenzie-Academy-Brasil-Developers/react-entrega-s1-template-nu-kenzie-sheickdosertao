import Styles from "./style.module.css"


export const FinanceCard = () => {
    return (
        <div className={Styles.divb}>
        <h2 className={Styles.h2b}>Salario - Mes Dezembro</h2>
        <p className={Styles.ps}>R$ 6.660,00</p>
        
        <button className={Styles.botao}>Excluir</button>
        <p className={Styles.po}>Entrada</p>
     </div>
    )
} 